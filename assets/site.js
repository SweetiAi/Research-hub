(()=>{
  const grid=document.querySelector('#selected .grid');
  if(grid && !document.querySelector('[data-q*="vagus nerve stimulation"]')){
    const card=document.createElement('article');
    card.className='card';
    card.dataset.cat='intero';
    card.dataset.q='vagus nerve stimulation vns tavns tcvns transcutaneous auricular cervical interoception neuromodulation bioelectronic medicine biomarkers nucleus tractus solitarius locus coeruleus autonomic neuroimmune';
    card.innerHTML=`<div class="meta"><span>Focused narrative review</span><span>New</span></div><div class="cover"><img src="assets/Vagus Nerve Pathways and Whole-Body Harmony.png" alt="Vagus Nerve Stimulation: Anatomy, Mechanisms, Stimulation Parameters, Biomarkers, and Clinical Translation"></div><h3>Vagus Nerve Stimulation</h3><p>Anatomy, mechanisms, stimulation parameters, biomarkers and clinical translation across invasive and non-invasive VNS, including taVNS and tcVNS.</p><div class="bottom"><div class="tags"><span class="tag">VNS</span><span class="tag">Interoception</span><span class="tag">Neuromodulation</span></div><a class="go" href="vagus-nerve-stimulation.pdf.pdf" target="_blank" rel="noopener noreferrer">↗</a></div>`;
    const haptics=[...grid.querySelectorAll('.card')].find(c=>c.querySelector('h3')?.textContent.includes('Advanced Haptics'));
    if(haptics) haptics.insertAdjacentElement('afterend',card); else grid.appendChild(card);
  }

  const stat=document.querySelector('.stats .stat strong');
  if(stat) stat.textContent='13';
  const selectedDesc=document.querySelector('#selected .head p');
  if(selectedDesc) selectedDesc.textContent='All 12 original research artifacts are preserved here, with a new Vagus Nerve Stimulation review added.';

  const filters=[...document.querySelectorAll('.filter')],
        cards=[...document.querySelectorAll('.card')],
        search=document.querySelector('#search'),
        count=document.querySelector('#count');
  let active='all';
  function apply(){
    const q=(search?.value||'').toLowerCase();
    let n=0;
    cards.forEach(c=>{
      const ok=(active==='all'||c.dataset.cat.includes(active))&&(!q||(c.dataset.q+' '+c.innerText).toLowerCase().includes(q));
      c.classList.toggle('hide',!ok);
      if(ok)n++;
    });
    if(count) count.textContent=n+' artifact'+(n===1?'':'s');
  }
  filters.forEach(b=>b.onclick=()=>{
    filters.forEach(x=>x.classList.remove('active'));
    b.classList.add('active');
    active=b.dataset.f;
    apply();
  });
  search?.addEventListener('input',apply);
  document.querySelectorAll('[data-domain]').forEach(a=>a.onclick=()=>{
    active=a.dataset.domain;
    filters.forEach(x=>x.classList.toggle('active',x.dataset.f===active));
    apply();
  });
  apply();
})();