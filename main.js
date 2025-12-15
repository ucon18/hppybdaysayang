
// DARK/LIGHT MODE
function toggleMode(){document.body.classList.toggle('light');}

// FADE ON SCROLL
const fades=document.querySelectorAll('.fade');
const obs=new IntersectionObserver(e=>{e.forEach(i=>i.isIntersecting&&i.target.classList.add('show'));});
fades.forEach(f=>obs.observe(f));

// TYPING EFFECT
const text=`Di usia ke-18 ini, kamu memasuki fase baru.
Fase mimpi yang lebih besar, langkah lebih berani.

Terima kasih karena telah menjadi sosok yang lembut,
tulus, dan begitu berarti bagiku.

Selamat ulang tahun, Riska.
Jika suatu hari aku diminta menyebutkan hal paling indah yang pernah aku miliki,
maka jawabannya adalah: kamu.`;
let i=0;
function type(){if(i<text.length){typing.innerHTML+=text.charAt(i);i++;setTimeout(type,45);}}
type();

// POPUP
function openPopup(){document.getElementById("popup").style.display="flex";}
function closePopup(){document.getElementById("popup").style.display="none";}

// HEARTS + CONFETTI
function hearts(){const h=document.createElement("div");h.className="heart";h.innerHTML="💗";h.style.left=Math.random()*100+"vw";h.style.fontSize=(Math.random()*20+12)+"px";document.body.appendChild(h);setTimeout(()=>h.remove(),6000);}
function confetti(){const c=document.createElement("div");c.className="confetti";c.innerHTML="🎉";c.style.left=Math.random()*100+"vw";c.style.fontSize=(Math.random()*18+10)+"px";document.body.appendChild(c);setTimeout(()=>c.remove(),6000);}
setInterval(hearts,400);
setInterval(confetti,700);

// FULLSCREEN MOBILE
document.body.addEventListener("click",()=>{document.documentElement.requestFullscreen?.();},{once:true});

// COUNTDOWN ULTah
const target=new Date("December 16, 2025 00:00:00").getTime();
const countdownEl=document.createElement("div");
countdownEl.style.position="fixed";countdownEl.style.top="20px";countdownEl.style.left="20px";countdownEl.style.color="var(--accent)";countdownEl.style.fontWeight="bold";
document.body.appendChild(countdownEl);
setInterval(()=>{
let now=new Date().getTime(),d=target-now;
countdownEl.innerHTML=`⏳ ${Math.floor(d/(1000*60*60*24))}d ${Math.floor(d/(1000*60*60)%24)}h ${Math.floor(d/(1000*60)%60)}m`;
},1000);
