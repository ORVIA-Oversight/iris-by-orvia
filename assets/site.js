
(() => {
  const menu = document.querySelector('[data-menu]');
  const mobile = document.querySelector('[data-mobile-menu]');
  if(menu && mobile){menu.addEventListener('click',()=>{const open=mobile.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});}

  const prompts = [
    'What needs my attention today?',
    'Check all new enquiries.',
    'What changed overnight?',
    'Prepare tomorrow\'s management brief.'
  ];
  const q = document.querySelector('[data-command-question]');
  if(q && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){let i=0;setInterval(()=>{i=(i+1)%prompts.length;q.animate([{opacity:.2,transform:'translateY(5px)'},{opacity:1,transform:'none'}],{duration:420});q.textContent=prompts[i];},4300);}

  const tabs = [...document.querySelectorAll('[data-role-tab]')];
  const title = document.querySelector('[data-role-title]');
  const prompt = document.querySelector('[data-role-prompt]');
  const desc = document.querySelector('[data-role-desc]');
  const roles = {
    owner:['Owner / Founder','Give me today\'s priorities.','A concise view of decisions, opportunities and issues that need your attention.'],
    operations:['Operations','What changed across the business?','Bring together operational changes across authorised systems and structured records.'],
    sales:['Sales','Which opportunities should we act on?','Coordinate pipeline context, follow-ups and relevant commercial information for human review.'],
    finance:['Finance','What needs commercial attention?','Surface invoices, commitments and commercial issues from connected sources.'],
    professional:['Professional Services','Find everything we know about this matter.','Search permitted messages, documents, projects and structured context without guessing where it lives.'],
    care:['Care / Support','Bring together the evidence for human review.','Coordinate evidence and context while keeping safeguarding and care decisions with accountable people.'],
    biaB:['Business in a Box','Give the new owner the operating intelligence behind the business.','Carry the approved knowledge, processes and specialist capability designed into the business.']
  };
  tabs.forEach(t=>t.addEventListener('click',()=>{tabs.forEach(x=>x.classList.remove('active'));t.classList.add('active');const d=roles[t.dataset.role];if(d){title.textContent=d[0];prompt.textContent='“'+d[1]+'”';desc.textContent=d[2];}}));

  const form = document.querySelector('[data-demo-form]');
  if(form){form.addEventListener('submit',(e)=>{e.preventDefault();const ok=form.querySelector('.form-success');if(ok){ok.classList.add('show');ok.focus();}});}
})();
