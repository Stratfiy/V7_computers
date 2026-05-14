document.addEventListener('DOMContentLoaded',()=>{
  // Mobile nav
  const h=document.querySelector('.hamburger'),n=document.querySelector('.nav-links');
  h&&h.addEventListener('click',()=>{h.classList.toggle('active');n.classList.toggle('open');document.body.style.overflow=n.classList.contains('open')?'hidden':''});
  n&&n.querySelectorAll('a').forEach(l=>l.addEventListener('click',()=>{h.classList.remove('active');n.classList.remove('open');document.body.style.overflow=''}));

  // Scroll header
  const hdr=document.querySelector('.header');
  window.addEventListener('scroll',()=>hdr.classList.toggle('scrolled',window.scrollY>60));

  // Reveal on scroll
  const ro=new IntersectionObserver(e=>e.forEach(el=>{if(el.isIntersecting){el.target.classList.add('visible');ro.unobserve(el.target)}}),{threshold:.08,rootMargin:'0px 0px -60px 0px'});
  document.querySelectorAll('.reveal').forEach(el=>ro.observe(el));

  // Active nav
  const pg=window.location.pathname.split('/').pop()||'index.html';
  document.querySelectorAll('.nav-links a').forEach(a=>{
    const hr=a.getAttribute('href');
    if(hr===pg||(pg===''&&hr==='index.html'))a.classList.add('active');
  });

  // Counter animation
  const co=new IntersectionObserver(e=>e.forEach(el=>{
    if(el.isIntersecting){
      const t=parseInt(el.target.dataset.count),s=el.target.dataset.suffix||'';
      let c=0;const inc=Math.max(1,t/50);
      const ti=setInterval(()=>{c+=inc;if(c>=t){c=t;clearInterval(ti)}el.target.textContent=Math.floor(c)+s},25);
      co.unobserve(el.target);
    }
  }),{threshold:.5});
  document.querySelectorAll('[data-count]').forEach(c=>co.observe(c));

  // Contact form → WhatsApp
  const cf=document.getElementById('contactForm');
  cf&&cf.addEventListener('submit',e=>{
    e.preventDefault();
    const fd=new FormData(cf),d=Object.fromEntries(fd.entries());
    let m=`Hello V7 Computers!%0A%0AName: ${d.name}%0AEmail: ${d.email||'N/A'}%0APhone: ${d.phone}%0A`;
    if(d.service)m+=`Service: ${d.service}%0A`;
    m+=`Message: ${d.message}`;
    window.open(`https://wa.me/919943659284?text=${m}`,'_blank');
    const b=cf.querySelector('button[type="submit"]');
    b.innerHTML='✓ Sent!';b.style.background='#22C55E';
    setTimeout(()=>{b.innerHTML='<i class="fab fa-whatsapp"></i> Send via WhatsApp';b.style.background='';cf.reset()},3000);
  });

  // Smooth anchor scroll
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click',function(e){
      const t=document.querySelector(this.getAttribute('href'));
      if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth',block:'start'})}
    });
  });
});
