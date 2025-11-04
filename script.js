
(function(){
  // smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      e.preventDefault();
      const id = this.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
    });
  });

  //contact form handler
  window.handleForm = function(e){
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const msg = document.getElementById('message').value.trim();
    if(!name || !email || !msg){ alert('Please fill all fields'); return false;}
    alert('Demo: message captured. When deploying, configure a server or service to send emails.\n\nName: '+name+'\nEmail: '+email);
    e.target.reset();
    return false;
  };
})();