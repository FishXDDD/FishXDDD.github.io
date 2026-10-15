
(function(){
  const links=[...document.querySelectorAll('.nav-links a')];
  const observed=links.filter(link=>link.getAttribute('href').startsWith('#')).map(link=>document.querySelector(link.getAttribute('href'))).filter(Boolean);
  if('IntersectionObserver' in window){
    const observer=new IntersectionObserver((entries)=>{
      const visible=entries.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio);
      if(!visible.length)return;
      links.filter(link=>link.getAttribute('href').startsWith('#')).forEach(link=>{const active=link.getAttribute('href')==='#'+visible[0].target.id;link.classList.toggle('active',active);if(active)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current')});
    },{rootMargin:'-18% 0px -62% 0px',threshold:[0,.1,.5]});
    observed.forEach(el=>observer.observe(el));
  }
})();
