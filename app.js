let rows=[];
const CURRENT_YEAR=2026;
const esc=s=>String(s??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));

function uniq(k,source=rows){return [...new Set(source.map(x=>x[k]).filter(Boolean))].sort()}
function appointmentYear(r){const m=String(r.joined||'').match(/(20\d{2})/);return m?Number(m[1]):null}
function fill(id,k){const e=document.getElementById(id),v=e.value,first=e.options[0].outerHTML;e.innerHTML=first+uniq(k).map(x=>`<option>${esc(x)}</option>`).join('');if([...e.options].some(o=>o.value===v))e.value=v;}
function fillYears(){const e=document.getElementById('startYear');const v=e.value||'2016';e.innerHTML='';for(let y=2016;y<=CURRENT_YEAR;y++)e.insertAdjacentHTML('beforeend',`<option value="${y}">${y}</option>`);e.value=v;}

function metricRange(s){
  if(s===null||s===undefined)return null;
  const t=String(s).replace(/,/g,'').trim();
  if(!t||/not reconstructed|not publicly recoverable|not reliably recoverable|substantial|many|several|few|remainder|low/i.test(t))return null;
  let m=t.match(/(\d+(?:\.\d+)?)\s*[–-]\s*(\d+(?:\.\d+)?)/);if(m)return {lo:+m[1],hi:+m[2]};
  m=t.match(/(?:at least|~)?\s*(\d+(?:\.\d+)?)\s*\+/i);if(m)return {lo:+m[1],hi:+m[1]};
  m=t.match(/(?:at least|~)?\s*(\d+(?:\.\d+)?)/i);if(m)return {lo:+m[1],hi:+m[1]};
  return null;
}
function midpoint(s){const r=metricRange(s);return r?(r.lo+r.hi)/2:null}
function combineRanges(...vals){
  const rr=vals.map(metricRange);if(rr.some(x=>!x))return '—';
  const lo=rr.reduce((s,x)=>s+x.lo,0),hi=rr.reduce((s,x)=>s+x.hi,0);
  return lo===hi?String(lo):`~${lo}–${hi}`;
}
function journalEquivalent(j,l){
  const a=metricRange(j),b=metricRange(l);if(!a||!b)return '—';
  const lo=a.lo+0.5*b.lo,hi=a.hi+0.5*b.hi;
  const f=x=>Number.isInteger(x)?String(x):x.toFixed(1);
  return lo===hi?f(lo):`~${f(lo)}–${f(hi)}`;
}
function filtered(){
  const qq=q.value.toLowerCase(),c=college.value,d=dept.value,ca=category.value,r=route.value,sy=Number(startYear.value||2016);
  return rows.filter(x=>{
    const y=appointmentYear(x);
    const yearOK=x.college==='Benchmark / User'?true:(y!==null&&y>=sy&&y<=CURRENT_YEAR);
    const blob=Object.values(x).join(' ').toLowerCase();
    return yearOK&&blob.includes(qq)&&(!c||x.college===c)&&(!d||x.department===d)&&(!ca||x.category===ca)&&(!r||x.route===r);
  });
}
function renderChips(){
  const source=rows.filter(x=>x.college!=='Benchmark / User'&&appointmentYear(x)>=Number(startYear.value||2016));
  const counts={};source.forEach(x=>counts[x.college]=(counts[x.college]||0)+1);
  chips.innerHTML=`<button class="chip ${college.value===''?'active':''}" onclick="pickCollege('')">ALL</button>`+
    Object.entries(counts).sort().map(([k,v])=>`<button class="chip ${college.value===k?'active':''}" onclick='pickCollege(${JSON.stringify(k)})'>${esc(k)} · ${v}</button>`).join('');
}
function pickCollege(name){college.value=name;render()}

function mean(a){return a.reduce((s,x)=>s+x,0)/a.length}
function sd(a){if(a.length<2)return a.length?0:null;const m=mean(a);return Math.sqrt(a.reduce((s,x)=>s+(x-m)**2,0)/(a.length-1))}
function stat(arr){const v=arr.filter(x=>Number.isFinite(x));return {n:v.length,mean:v.length?mean(v):null,sd:sd(v)}}
function fmtStat(o,digits=1){if(!o||!o.n)return `<span class="metric-main">—</span><span class="metric-n">N=0</span>`;const f=x=>Number(x).toFixed(digits).replace(/\.0$/,'');return `<span class="metric-main">${f(o.mean)} ± ${f(o.sd||0)}</span><span class="metric-n">N=${o.n}</span>`;}
function parseCitation(s){if(!s||/not publicly recoverable|not reliably recoverable/i.test(s))return null;return midpoint(s)}
function statusBadge(s){const cls=s==='Verified'?'audit-verified':'audit-reconstructed';return `<span class="audit-badge ${cls}">${esc(s||'Unreviewed')}</span>`;}

function renderInstituteSummary(){
  const source=filtered().filter(x=>x.college!=='Benchmark / User');
  const groups={};source.forEach(r=>(groups[r.college]??=[]).push(r));
  summaryBody.innerHTML=Object.entries(groups).sort().map(([inst,rr])=>{
    const journals=stat(rr.map(r=>midpoint(r.full_journals)));
    const letters=stat(rr.map(r=>midpoint(r.letters)));
    const conf=stat(rr.map(r=>midpoint(r.conferences)));
    const totals=stat(rr.map(r=>{const a=midpoint(r.full_journals),b=midpoint(r.letters),c=midpoint(r.conferences);return [a,b,c].every(Number.isFinite)?a+b+c:null;}));
    const citations=stat(rr.map(r=>parseCitation(r.citations)));
    const postdoc=stat(rr.map(r=>Number.isFinite(r.postdoc_years)?r.postdoc_years:null));
    return `<tr><td><div class="name">${esc(inst)}</div></td><td><span class="metric-main">${rr.length}</span></td><td>${fmtStat(journals)}</td><td>${fmtStat(letters)}</td><td>${fmtStat(conf)}</td><td>${fmtStat(totals)}</td><td>${fmtStat(citations,0)}</td><td>${fmtStat(postdoc)}</td></tr>`;
  }).join('')||'<tr><td colspan="8">No records match the current filters.</td></tr>';
  summaryRange.textContent=`${startYear.value}–${CURRENT_YEAR}`;
}

function render(){
  fill('college','college');fill('dept','department');fill('category','category');fill('route','route');
  const a=filtered();
  tb.innerHTML=a.map(x=>`<tr>
    <td><div class="name">${esc(x.name)}</div><span class="category-pill">${esc(x.category)}</span></td>
    <td>${esc(x.college)}</td><td>${esc(x.department)}</td><td>${esc(x.joined)}</td><td>${esc(x.route)}</td><td>${esc(x.previous)}</td>
    <td>${esc(x.phd)}</td><td>${esc(x.years_after_phd)}</td>
    <td><b>${esc(x.full_journals)}</b></td><td><b>${esc(x.letters)}</b></td><td><b>${esc(x.conferences)}</b></td>
    <td><b>${esc(x.publication_total)}</b></td><td><b>${esc(x.journal_equiv)}</b></td>
    <td>${statusBadge(x.publication_audit_status)}<div class="audit-mini">${esc(x.publication_audit_note)}</div></td>
    <td>${x.publication_audit_source&&/^https?:/.test(x.publication_audit_source)?`<a href="${esc(x.publication_audit_source)}" target="_blank" rel="noopener">PUB SOURCE ↗</a>`:esc(x.publication_audit_source)}</td>
    <td>${esc(x.citations)}</td><td>${esc(x.current_metrics)}</td><td>${esc(x.area)}</td><td>${esc(x.signals)}</td><td>${esc(x.audit_note)}</td>
    <td>${x.source?`<a href="${esc(x.source)}" target="_blank" rel="noopener">PROFILE ↗</a>`:''}</td>
  </tr>`).join('');
  np.textContent=a.length;
  ni.textContent=new Set(a.filter(x=>x.college!=='Benchmark / User').map(x=>x.college)).size;
  robot.textContent=a.filter(x=>/robot|control|autonomy/i.test((x.category||'')+' '+(x.area||''))).length;
  nverified.textContent=a.filter(x=>x.publication_audit_status==='Verified').length;
  nrecon.textContent=a.filter(x=>x.publication_audit_status==='Reconstructed').length;
  visibleLabel.textContent=`${a.length} records · ${startYear.value}–${CURRENT_YEAR}`;
  renderChips();renderInstituteSummary();
}

function clearFilters(){q.value='';college.value='';dept.value='';category.value='';route.value='';startYear.value='2016';render()}
function dl(t,n,m){let b=new Blob([t],{type:m}),a=document.createElement('a');a.href=URL.createObjectURL(b);a.download=n;a.click();URL.revokeObjectURL(a.href)}
function jsn(){dl(JSON.stringify(filtered(),null,2),`faculty_hiring_benchmark_${startYear.value}_${CURRENT_YEAR}.json`,'application/json')}
function csv(){const a=filtered();if(!a.length)return;let ks=Object.keys(a[0]);let s=[ks.join(','),...a.map(r=>ks.map(k=>`"${String(r[k]??'').replace(/"/g,'""')}"`).join(','))].join('\n');dl(s,`faculty_hiring_benchmark_${startYear.value}_${CURRENT_YEAR}.csv`,'text/csv')}

async function init(){
  const manifest=await fetch('data/manifest.json').then(r=>r.json());
  const chunks=await Promise.all(manifest.map(x=>fetch(x.file).then(r=>r.json())));
  rows=chunks.flat();
  const audit=await fetch('data/publication_audit.json').then(r=>r.json());
  const byName=new Map(audit.map(x=>[x.name,x]));
  rows=rows.map(r=>{
    const a=byName.get(r.name)||{};
    const merged={...r,...a};
    merged.publication_total=combineRanges(merged.full_journals,merged.letters,merged.conferences);
    merged.journal_equiv=journalEquivalent(merged.full_journals,merged.letters);
    return merged;
  });
  fillYears();
  ['q','college','dept','category','route','startYear'].forEach(id=>document.getElementById(id).addEventListener('input',render));
  render();
}
init().catch(err=>{console.error(err);document.body.insertAdjacentHTML('beforeend','<p style="padding:20px">Could not load dataset. Serve this folder through GitHub Pages or a local web server.</p>');});