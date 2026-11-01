/* INSOMNIA BANGLADESH website scripts.
   EDIT HERE:
   - EMAIL: the address the booking form sends to.
   - MEMBER_LINKS: Facebook (fb) and Instagram (ig) links for each member,
     in the same order as the band members on the page.
     Use "none" if a member has no account. */
var lb=document.getElementById("lb");
document.querySelectorAll(".gal button").forEach(function(b){b.addEventListener("click",function(){var i=b.querySelector("img");lb.querySelector("img").src=i.src;lb.querySelector("img").alt=i.alt;if(lb.showModal)lb.showModal()})});
document.getElementById("lbx").addEventListener("click",function(){lb.close()});
lb.addEventListener("click",function(e){if(e.target===lb)lb.close()});
var yt=document.getElementById("yt");function loadYt(){if(yt&&!yt.src)yt.src=yt.getAttribute("data-src")}
if("IntersectionObserver" in window&&yt){new IntersectionObserver(function(es,o){es.forEach(function(e){if(e.isIntersecting){loadYt();o.disconnect()}})},{threshold:.4}).observe(yt)}else{loadYt()}
var EMAIL="arsabab226@gmail.com";
var MEMBER_LINKS=[{fb:"https://www.facebook.com/pinku.karmakar.639799",ig:"none"},{fb:"https://www.facebook.com/profile.php?id=100054001657895",ig:"https://www.instagram.com/adnan_sabab_/"},{fb:"https://www.facebook.com/saikat.khan.75054689",ig:"none"}];
document.querySelectorAll(".members>div").forEach(function(c,i){
 c.className="mcard";c.tabIndex=0;c.setAttribute("role","button");c.setAttribute("aria-expanded","false");
 var p=document.createElement("div");p.className="links";p.hidden=true;
 [["Facebook","fb"],["Instagram","ig"]].forEach(function(s){var u=MEMBER_LINKS[i][s[1]],n;if(u&&u!=="none"){n=document.createElement("a");n.href=u;n.target="_blank";n.rel="noopener noreferrer";n.textContent=s[0]}else{n=document.createElement("span");n.textContent=u==="none"?"No "+s[0]+" account":s[0]+" link coming soon"}p.appendChild(n)});
 p.addEventListener("click",function(e){e.stopPropagation()});
 c.appendChild(p);
 function tog(){var open=c.getAttribute("aria-expanded")!=="true";document.querySelectorAll(".mcard").forEach(function(o){o.setAttribute("aria-expanded","false");o.lastChild.hidden=true});c.setAttribute("aria-expanded",String(open));p.hidden=!open}
 c.addEventListener("click",tog);
 c.addEventListener("keydown",function(e){if(e.target===c&&(e.key==="Enter"||e.key===" ")){e.preventDefault();tog()}});
});
document.getElementById("bookForm").addEventListener("submit",function(e){
  e.preventDefault();
  var b="Name: "+fn.value+"\nEmail: "+fe.value+"\nEvent: "+fd.value+"\n\n"+fm.value;
  var url="mailto:"+EMAIL+"?subject="+encodeURIComponent("Booking request: INSOMNIA")+"&body="+encodeURIComponent(b);
  document.getElementById("fs").textContent="Opening your email app…";
  try{window.open(url,"_top")}catch(x){location.href=url}
});
