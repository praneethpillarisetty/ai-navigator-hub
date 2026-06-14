
const btn=document.getElementById('themeToggle');
if(localStorage.theme==='dark') document.body.classList.add('dark');
if(btn) btn.addEventListener('click',()=>{document.body.classList.toggle('dark');localStorage.theme=document.body.classList.contains('dark')?'dark':'light'});
function filterCards(){const q=(document.getElementById('toolSearch')?.value||'').toLowerCase();document.querySelectorAll('.card[data-name]').forEach(c=>{c.style.display=(c.innerText.toLowerCase().includes(q)||c.dataset.cat.toLowerCase().includes(q)||c.dataset.price.toLowerCase().includes(q))?'block':'none'})}
document.addEventListener('input',e=>{if(e.target&&e.target.id==='toolSearch')filterCards()});
function scrollToTools(){document.getElementById('tools')?.scrollIntoView({behavior:'smooth'});filterCards()}
