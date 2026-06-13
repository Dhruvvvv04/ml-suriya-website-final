import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

/* ── Google Fonts injected once ── */
const fontLink = document.createElement("link");
fontLink.href =
  "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300;1,9..40,400&family=Noto+Serif+Devanagari:wght@400;500;600&display=swap";
fontLink.rel = "stylesheet";
document.head.appendChild(fontLink);

/* ── Inline global styles (CSS vars + animations) ── */
const globalCSS = `
:root{
  --bg:#f7f5fe;
  --ink:#160a2e;--ink2:#3d2870;--muted:#8b7aaa;
  --p900:#160a2e;--p800:#2b1260;--p700:#4a1f94;--p600:#6b35c8;
  --p500:#8b5cf6;--p400:#a78bfa;--p300:#c4b5fd;--p200:#ddd6fe;
  --gold:#f0c040;--coral:#f07070;--rose:#e879f9;
  --glass-bg:rgba(255,255,255,0.45);
  --glass-border:rgba(255,255,255,0.80);
}
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box;}
html{scroll-behavior:smooth;}
body{background:var(--bg);color:var(--ink);font-family:'DM Sans',system-ui,sans-serif;overflow-x:hidden;}
.font-display{font-family:'Cormorant Garamond',Georgia,serif!important;}
.font-deva{font-family:'Noto Serif Devanagari',serif!important;}

/* Animations */
@keyframes drift1{from{transform:translate(0,0)scale(1);}to{transform:translate(80px,60px)scale(1.1);}}
@keyframes drift2{from{transform:translate(0,0)scale(1);}to{transform:translate(-60px,80px)scale(0.92);}}
@keyframes drift3{from{transform:translate(0,0)scale(1);}to{transform:translate(50px,-70px)scale(1.08);}}
@keyframes drift4{from{transform:translate(0,0)scale(1);}to{transform:translate(90px,-50px)scale(1.05);}}
@keyframes fadeUp{from{opacity:0;transform:translateY(28px);}to{opacity:1;transform:translateY(0);}}
@keyframes jainFloat{0%,100%{transform:translateY(0);}50%{transform:translateY(-6px);}}
@keyframes jainGlow{0%{filter:drop-shadow(0 0 10px rgba(240,120,64,0.45));}100%{filter:drop-shadow(0 0 22px rgba(240,120,64,0.75)) drop-shadow(0 0 40px rgba(232,121,249,0.30));}}
@keyframes jainRing{from{transform:translate(-50%,-50%)rotate(0deg);}to{transform:translate(-50%,-50%)rotate(360deg);}}
@keyframes liveBlink{0%,100%{opacity:1;}50%{opacity:0.25;}}
@keyframes mq{from{transform:translateX(0);}to{transform:translateX(-50%);}}
@keyframes omPulse{0%,100%{filter:drop-shadow(0 0 6px rgba(139,92,246,0.4));}50%{filter:drop-shadow(0 0 18px rgba(139,92,246,0.8));}}
@keyframes playPulse{0%{box-shadow:0 0 0 0 rgba(255,68,68,0.6);}70%{box-shadow:0 0 0 20px rgba(255,68,68,0);}100%{box-shadow:0 0 0 0 rgba(255,68,68,0);}}
@keyframes playGlow{0%,100%{box-shadow:0 3px 12px rgba(255,68,68,0.45);}50%{box-shadow:0 3px 20px rgba(255,68,68,0.75),0 0 0 4px rgba(255,68,68,0.12);}}
@keyframes aboutBgShape{from{border-radius:44% 56% 62% 38%/42% 46% 54% 58%;}to{border-radius:60% 40% 38% 62%/56% 38% 62% 44%;}}
@keyframes aboutRing{from{transform:rotate(0deg);}to{transform:rotate(360deg);}}
@keyframes aboutPhotoFloat{0%,100%{transform:translateY(0)rotate(0deg);}33%{transform:translateY(-8px)rotate(0.4deg);}66%{transform:translateY(-4px)rotate(-0.3deg);}}
@keyframes badgeFloat{0%,100%{transform:translateY(0);}50%{transform:translateY(-5px);}}
@keyframes fwAmb{from{transform:translate(0,0)scale(1);}to{transform:translate(60px,40px)scale(1.1);}}
@keyframes thumbOrb1{from{transform:translate(0,0);}to{transform:translate(40px,30px);}}
@keyframes thumbOrb2{from{transform:translate(0,0);}to{transform:translate(-30px,-20px);}}

.aura-orb{position:absolute;border-radius:50%;filter:blur(110px);}
.aura-orb-1{width:800px;height:800px;top:-200px;left:-200px;
  background:radial-gradient(circle at 40% 40%,rgba(139,92,246,0.42)0%,rgba(167,139,250,0.18)40%,transparent 70%);
  animation:drift1 22s ease-in-out 0s infinite alternate;}
.aura-orb-2{width:600px;height:600px;top:-100px;right:-150px;
  background:radial-gradient(circle at 50% 50%,rgba(240,192,64,0.38)0%,rgba(232,121,249,0.15)50%,transparent 70%);
  animation:drift2 28s ease-in-out 0s infinite alternate;}
.aura-orb-3{width:700px;height:700px;bottom:-200px;right:-100px;
  background:radial-gradient(circle at 50% 50%,rgba(107,53,200,0.34)0%,rgba(240,112,112,0.12)50%,transparent 70%);
  animation:drift3 24s ease-in-out 0s infinite alternate;}
.aura-orb-4{width:500px;height:500px;bottom:10%;left:-100px;
  background:radial-gradient(circle at 50% 50%,rgba(232,121,249,0.28)0%,rgba(139,92,246,0.12)50%,transparent 70%);
  animation:drift4 30s ease-in-out 0s infinite alternate;}

.om-animate{animation:jainFloat 5s ease-in-out infinite, jainGlow 4s ease-in-out infinite alternate;}
.ring-1{animation:jainRing 10s linear infinite;}
.ring-2{animation:jainRing 16s linear infinite reverse;}
.ring-3{animation:jainRing 24s linear infinite;}
.live-blink{animation:liveBlink 1.5s ease-in-out infinite;}
.marquee-anim{animation:mq 32s linear infinite;}
.om-pulse{animation:omPulse 4s ease-in-out infinite;}
.play-pulse{animation:playPulse 2.5s ease-in-out infinite;}
.play-glow{animation:playGlow 2.5s ease-in-out infinite;}
.photo-float{animation:aboutPhotoFloat 7s ease-in-out infinite;}
.photo-bg-shape{animation:aboutBgShape 12s ease-in-out infinite alternate;}
.photo-ring{animation:aboutRing 18s linear infinite;}
.badge-float-1{animation:badgeFloat 5s ease-in-out infinite;}
.badge-float-2{animation:badgeFloat 5s ease-in-out 1.8s infinite;}
.badge-float-3{animation:badgeFloat 5s ease-in-out 3.2s infinite;}

.reveal{opacity:0;transform:translateY(36px);transition:opacity 0.7s ease,transform 0.7s ease;}
.reveal.visible{opacity:1;transform:translateY(0);}

.glass{
  background:rgba(255,255,255,0.48);
  backdrop-filter:blur(22px)saturate(1.6);
  -webkit-backdrop-filter:blur(22px)saturate(1.6);
  border:1px solid rgba(255,255,255,0.82);
  border-radius:20px;
  box-shadow:0 8px 48px rgba(107,53,200,0.10),inset 0 1.5px 0 rgba(255,255,255,0.95);
}

.nav-link::after{content:'';position:absolute;left:0;bottom:-3px;width:0;height:1.5px;
  background:linear-gradient(90deg,var(--p500),var(--rose));border-radius:2px;transition:width 0.3s;}
.nav-link:hover::after{width:100%;}

.btn-primary{
  font-size:.74rem;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:#fff;
  background:linear-gradient(135deg,var(--p700)0%,var(--p500)60%,var(--rose)100%);
  background-size:200%;padding:.9rem 2.2rem;border-radius:100px;text-decoration:none;display:inline-block;
  box-shadow:0 6px 24px rgba(107,53,200,0.42);transition:all .35s;
}
.btn-primary:hover{background-position:100%;transform:translateY(-3px);box-shadow:0 14px 38px rgba(107,53,200,0.55);}

.btn-secondary{
  font-size:.74rem;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:var(--p700);
  background:rgba(255,255,255,0.55);backdrop-filter:blur(12px);border:1.5px solid rgba(107,53,200,0.28);
  padding:.9rem 2.2rem;border-radius:100px;text-decoration:none;display:inline-block;transition:all .3s;
}
.btn-secondary:hover{background:rgba(255,255,255,0.82);border-color:var(--p500);transform:translateY(-2px);}

.pillar{padding:1.8rem;border-radius:14px;border:none;border-left:5px solid;position:relative;overflow:hidden;
  background:rgba(255,255,255,0.48);backdrop-filter:blur(16px);transition:all .3s;}
.pillar:hover{background:rgba(255,255,255,0.7);transform:translateX(6px);box-shadow:0 8px 28px rgba(107,53,200,0.1);}

.bq{padding:2.4rem;position:relative;overflow:hidden;border-radius:20px;transition:transform .3s,box-shadow .3s;}
.bq:hover{transform:translateY(-4px);box-shadow:0 20px 50px rgba(107,53,200,0.14);}

.story-card{padding:1.8rem 2rem;background:rgba(255,255,255,0.48);backdrop-filter:blur(20px);
  border-radius:20px;border:1px solid rgba(255,255,255,0.88);box-shadow:0 4px 28px rgba(107,53,200,0.07);
  transition:all .3s;position:relative;overflow:hidden;}
.story-card::before{content:'';position:absolute;top:0;left:0;width:4px;height:100%;
  background:linear-gradient(to bottom,var(--p400),var(--p600));border-radius:4px 0 0 4px;opacity:0;transition:opacity .3s;}
.story-card:hover::before{opacity:1;}
.story-card:hover{transform:translateY(-3px);box-shadow:0 12px 44px rgba(107,53,200,0.13);background:rgba(255,255,255,0.68);}

.cred-pill{display:flex;align-items:center;gap:.75rem;padding:.7rem 1.1rem;background:rgba(255,255,255,0.55);
  backdrop-filter:blur(14px);border-radius:14px;border:1px solid rgba(255,255,255,0.90);
  box-shadow:0 2px 12px rgba(107,53,200,0.06);transition:all .28s cubic-bezier(.34,1.56,.64,1);cursor:default;}
.cred-pill:hover{transform:translateX(6px)scale(1.01);background:rgba(255,255,255,0.82);box-shadow:0 6px 28px rgba(107,53,200,0.13);}

.svc-card{padding:2.8rem 2.4rem;position:relative;overflow:hidden;transition:all .4s cubic-bezier(0.34,1.56,0.64,1);
  background:linear-gradient(135deg,#2d1a5a 0%,#4a2d7f 50%,#3d2570 100%);border-radius:24px;
  box-shadow:0 8px 32px rgba(0,0,0,0.15);min-height:260px;display:flex;flex-direction:column;}
.svc-card::before{content:'';position:absolute;width:280px;height:280px;right:-60px;top:-80px;
  border-radius:50%;background:radial-gradient(circle,rgba(240,192,64,0.35)0%,transparent 70%);
  filter:blur(30px);pointer-keys:none;z-index:0;}
.svc-card:hover{transform:translateY(-6px);box-shadow:0 16px 48px rgba(0,0,0,0.25);}

.course-level-card{position:relative;overflow:hidden;transform:translateY(0)scale(1);
  transition:transform .28s cubic-bezier(.22,.61,.36,1),box-shadow .28s ease,border-color .28s ease,background .28s ease;}
.course-level-card::after{content:'';position:absolute;inset:0;pointer-events:none;opacity:0;
  background:linear-gradient(110deg,rgba(240,192,64,0.14),rgba(255,255,255,0.06) 36%,transparent 68%);
  transition:opacity .28s ease;}
.course-level-card:hover{transform:translateY(-3px)scale(1.01);border-color:rgba(240,192,64,0.55)!important;
  box-shadow:0 16px 34px rgba(0,0,0,0.3),0 0 0 1px rgba(240,192,64,0.2) inset;
  background:linear-gradient(120deg,rgba(255,255,255,0.20),rgba(255,255,255,0.09))!important;}
.course-level-card:hover::after{opacity:1;}
.course-level-card:hover .course-level-tag{transform:translateX(-2px)scale(1.04);
  box-shadow:0 8px 18px rgba(240,192,64,0.45);}
.course-level-tag{transition:transform .22s ease,box-shadow .22s ease;}

.fw-card{background:rgba(255,255,255,0.05);backdrop-filter:blur(18px);border:1px solid rgba(255,255,255,0.09);
  border-radius:18px;padding:2.2rem 1.8rem;position:relative;overflow:hidden;transition:all .4s cubic-bezier(0.34,1.56,0.64,1);}
.fw-card:hover{background:rgba(255,255,255,0.10);border-color:rgba(255,255,255,0.18);transform:translateY(-8px)scale(1.02);box-shadow:0 24px 50px rgba(0,0,0,0.35);}

.yt-sess{display:flex;align-items:center;gap:.85rem;padding:.85rem 1rem;background:rgba(255,255,255,0.05);
  border-radius:10px;border:1px solid rgba(255,255,255,0.07);transition:all .25s;text-decoration:none;color:inherit;}
.yt-sess:hover{background:rgba(255,255,255,0.10);transform:translateX(4px);}

.c-link{display:flex;align-items:center;gap:1.1rem;padding:1.35rem 1.5rem;background:rgba(255,255,255,0.48);
  backdrop-filter:blur(16px);border:1px solid rgba(255,255,255,0.80);border-radius:14px;text-decoration:none;
  color:inherit;transition:all .3s cubic-bezier(0.34,1.56,0.64,1);box-shadow:0 3px 18px rgba(107,53,200,0.06);}
.c-link:hover{background:rgba(255,255,255,0.74);transform:translateX(6px)scale(1.01);box-shadow:0 10px 32px rgba(107,53,200,0.14);}

.phil-book-card{padding:1.15rem 1.2rem;border-radius:12px;background:rgba(255,255,255,0.08);
  border:1px solid rgba(255,255,255,0.18);box-shadow:0 6px 20px rgba(0,0,0,0.24);position:relative;overflow:hidden;
  transition:all .35s cubic-bezier(0.34,1.56,0.64,1);}
.phil-book-card::before{content:'';position:absolute;left:0;top:0;bottom:0;width:3px;
  background:linear-gradient(180deg,var(--gold),var(--rose));}
.phil-book-card:hover{background:rgba(255,255,255,0.14);transform:translateY(-4px);box-shadow:0 12px 30px rgba(0,0,0,0.33);}

.yt-card{background:rgba(255,255,255,0.06);backdrop-filter:blur(24px)saturate(1.4);border:1px solid rgba(255,255,255,0.10);
  border-radius:24px;overflow:hidden;transition:all .4s;box-shadow:0 20px 60px rgba(0,0,0,0.35);}
.yt-card:hover{transform:translateY(-6px)scale(1.01);box-shadow:0 30px 80px rgba(0,0,0,0.45),0 0 0 1px rgba(255,100,100,0.2);}
`;
if (!document.getElementById("ml-global-css")) {
  const s = document.createElement("style");
  s.id = "ml-global-css";
  s.textContent = globalCSS;
  document.head.appendChild(s);
}

/* ── Scroll reveal hook ── */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); } }),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ── PHOTO (base64 truncated — use actual path in production) ── */
/* ─────────────────────────────────────────────
   SECTION: Navbar
───────────────────────────────────────────── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = ["About","4R","Philosophy","Services","YouTube","Contact"];
  const hrefs = ["#about","#framework","#philosophy","#services","#youtube","#contact"];
  return (
    <nav style={{
      position:"fixed",top:0,left:0,right:0,zIndex:999,height:78,
      display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 3rem",
      transition:"all 0.4s ease",
      background: scrolled ? "rgba(247,245,254,0.82)" : "transparent",
      backdropFilter: scrolled ? "blur(28px) saturate(1.7)" : "none",
      borderBottom: scrolled ? "1px solid rgba(255,255,255,0.85)" : "none",
      boxShadow: scrolled ? "0 2px 30px rgba(107,53,200,0.07)" : "none",
    }}>
      <div style={{display:"flex",flexDirection:"column",gap:1}}>
        <span className="font-display" style={{fontSize:"1.6rem",fontWeight:700,color:"var(--ink)",lineHeight:1}}>M L Suriya</span>
        <span style={{fontSize:"0.75rem",fontWeight:600,letterSpacing:"0.26em",textTransform:"uppercase",color:"var(--p500)"}}>Peaceful Profit Monk</span>
      </div>
      <ul style={{display:"flex",gap:"3rem",listStyle:"none"}}>
        {links.map((l,i)=>(
          <li key={l}><a href={hrefs[i]} className="nav-link" style={{fontSize:"1.05rem",fontWeight:600,letterSpacing:"0.08em",color:"var(--ink2)",textDecoration:"none",position:"relative"}}>{l}</a></li>
        ))}
      </ul>
      <a href="tel:+919427611171" style={{fontSize:"0.95rem",fontWeight:600,letterSpacing:"0.12em",textTransform:"uppercase",color:"#fff",background:"linear-gradient(135deg,var(--p700),var(--p500))",padding:"0.68rem 1.7rem",borderRadius:"100px",textDecoration:"none",boxShadow:"0 4px 20px rgba(107,53,200,0.38)",transition:"all 0.3s"}}>Call Now</a>
    </nav>
  );
}

/* ─────────────────────────────────────────────
   SECTION: Hero
───────────────────────────────────────────── */
function Hero() {
  return (
    <section style={{minHeight:"100vh",display:"flex",alignItems:"flex-start",paddingTop:78,overflow:"hidden",position:"relative",isolation:"isolate"}}>
      <div style={{width:"100%"}}>
        <div style={{
          display:"grid",gridTemplateColumns:"1.06fr 0.94fr",alignItems:"stretch",position:"relative",zIndex:1,minHeight:640,
          background:"linear-gradient(112deg,rgba(255,255,255,0.96)0%,rgba(251,247,255,0.93)56%,rgba(77,35,145,0.92)100%)",
          borderBottom:"1px solid rgba(255,255,255,0.75)",boxShadow:"0 28px 76px rgba(52,28,96,0.25)",
        }}>
          {/* Left */}
          <div style={{display:"flex",flexDirection:"column",justifyContent:"flex-start",padding:"3.4rem 3.1rem 3rem",position:"relative",zIndex:2,background:"linear-gradient(140deg,rgba(255,255,255,0.97),rgba(249,244,255,0.95))"}}>
            {/* Om symbol */}
            <div style={{position:"relative",width:82,marginBottom:"1.2rem",display:"flex",flexDirection:"column",alignItems:"flex-start",gap:"0.5rem"}}>
              <div style={{position:"absolute",width:56,height:56,top:32,left:32,transform:"translate(-50%,-50%)",borderRadius:"50%",border:"1px solid rgba(240,120,64,0.35)"}} className="ring-1"/>
              <div style={{position:"absolute",width:78,height:78,top:32,left:32,transform:"translate(-50%,-50%)",borderRadius:"50%",border:"1px dashed rgba(139,92,246,0.22)"}} className="ring-2"/>
              <div style={{position:"absolute",width:100,height:100,top:32,left:32,transform:"translate(-50%,-50%)",borderRadius:"50%",border:"1px dotted rgba(232,121,249,0.14)"}} className="ring-3"/>
              <div className="om-animate" style={{width:64,height:64,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"2.4rem",lineHeight:1,background:"linear-gradient(135deg,var(--gold),var(--coral),var(--rose))",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",position:"relative",zIndex:2}}>ॐ</div>
            </div>
            <span style={{fontSize:"0.65rem",fontWeight:600,letterSpacing:"0.3em",textTransform:"uppercase",color:"var(--p600)",marginBottom:"1rem"}}>Peaceful Profit Monk · ध्यान धन साधक</span>
            <h1 className="font-display" style={{fontSize:"clamp(4rem,7.5vw,7rem)",fontWeight:700,lineHeight:0.95,color:"var(--ink)",letterSpacing:"-0.02em"}}>
              Mishrilal
              <span className="font-display" style={{display:"block",fontStyle:"italic",fontWeight:300,fontSize:"clamp(3.2rem,6vw,5.8rem)",background:"linear-gradient(125deg,var(--p700)0%,var(--p500)40%,var(--rose)100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",lineHeight:1.05}}>Suriya</span>
            </h1>
            <span style={{fontFamily:"'DM Sans',sans-serif",fontSize:"1.55rem",fontWeight:500,color:"var(--muted)",display:"block",margin:"0.8rem 0 2rem",letterSpacing:"0.04em"}}>ध्यान · धन · साधना</span>
            <p style={{fontSize:"1.03rem",lineHeight:1.58,color:"var(--ink2)",fontWeight:300,maxWidth:620,marginBottom:"2.4rem"}}>For over <strong style={{color:"var(--p600)",fontWeight:600}}>30 years</strong>, guiding 300+ organisations to double their profits — through peace, dharma &amp; the timeless science of meditation. Govt. of India certified ZED Master Trainer.</p>
            <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"0.75rem",marginBottom:"2.2rem"}}>
              {[["30+","Years of Mastery"],["300+","Organisations"],["2×","Profit Growth"]].map(([n,l])=>(
                <div key={l} style={{background:"rgba(255,255,255,0.52)",backdropFilter:"blur(18px)",border:"1px solid rgba(255,255,255,0.84)",borderRadius:14,boxShadow:"0 4px 20px rgba(107,53,200,0.08)",padding:"1.1rem 1.4rem",textAlign:"center"}}>
                  <span style={{fontFamily:"'DM Sans',sans-serif",fontSize:"3rem",fontWeight:700,lineHeight:1,background:"linear-gradient(135deg,var(--p700),var(--p400))",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",display:"block"}}>{n}</span>
                  <span style={{fontSize:"0.62rem",fontWeight:500,letterSpacing:"0.08em",textTransform:"uppercase",color:"var(--muted)",display:"block",marginTop:"0.3rem"}}>{l}</span>
                </div>
              ))}
            </div>
            <div style={{display:"flex",gap:"1rem"}}>
              <a href="#services" className="btn-primary">Explore Services</a>
              <a href="#contact" className="btn-secondary">Connect With Me</a>
            </div>
          </div>
          {/* Right — portrait + overlay */}
          <div style={{position:"relative",overflow:"hidden",minHeight:"100%",display:"flex",alignItems:"flex-end"}}>
            <div style={{position:"absolute",inset:0,zIndex:2,background:"linear-gradient(240deg,rgba(47,20,90,0.18)2%,rgba(47,20,90,0.62)72%),linear-gradient(0deg,rgba(36,18,70,0.74)0%,rgba(36,18,70,0)42%)",pointerEvents:"none"}}/>
            <div style={{position:"absolute",inset:0,zIndex:1,overflow:"hidden"}}>
              <img src="/image.png" alt="Mishrilal Suriya" className="photo-float" style={{width:"100%",height:"100%",objectFit:"cover",objectPosition:"52% 16%",filter:"brightness(0.94)contrast(1.08)saturate(1.06)"}}/>
            </div>
            {/* Overlay cards */}
            <div style={{position:"relative",left:"5.5%",right:"5.5%",bottom:"1.1rem",width:"89%",display:"flex",flexDirection:"column",gap:"0.8rem",zIndex:3,marginBottom:"1.1rem"}}>
              <div className="glass" style={{padding:"1.45rem 1.2rem",background:"rgba(67,38,120,0.54)",border:"1px solid rgba(255,255,255,0.32)",boxShadow:"0 10px 38px rgba(10,4,22,0.35)",borderRadius:20}}>
                <span style={{fontSize:"0.6rem",fontWeight:600,letterSpacing:"0.28em",textTransform:"uppercase",color:"var(--p500)",display:"block",marginBottom:"0.9rem"}}>Credentials &amp; Expertise</span>
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.6rem"}}>
                  {[
                    ["v","QCI Certified — ZED Master Trainer","Quality Council of India · Govt. of India"],
                    ["c","Meditation Master Trainer","Daily Virtual Dhyan & Swadhyaya Sessions"],
                    ["g","Managing Director","Here Quality Excellence Pvt. Ltd., Vadodara"],
                    ["r","Mechanical Engineer & Author","Published by Government of India"],
                    ["m","Spiritual Mission · Since 2020","Vadodara, Gujarat, India"],
                    ["v","30+ Years of Mastery","Peace, Dharma & Profit Growth"],
                  ].map(([color,title,sub],i)=>{
                    const dotColors = {v:"var(--p500)",c:"var(--coral)",g:"var(--gold)",r:"var(--rose)",m:"#7fdcc8"};
                    const dotShadows = {v:"rgba(139,92,246,0.7)",c:"rgba(240,112,112,0.7)",g:"rgba(240,192,64,0.7)",r:"rgba(232,121,249,0.7)",m:"rgba(127,220,200,0.7)"};
                    return (
                      <div key={i} style={{display:"flex",alignItems:"flex-start",gap:"0.9rem",padding:"0.78rem 0.85rem",background:"rgba(255,255,255,0.55)",borderRadius:12,border:"1px solid rgba(255,255,255,0.9)"}}>
                        <div style={{width:8,height:8,borderRadius:"50%",flexShrink:0,marginTop:4,background:dotColors[color],boxShadow:`0 0 8px ${dotShadows[color]}`}}/>
                        <div>
                          <span style={{fontSize:"0.72rem",fontWeight:600,color:"var(--ink)",display:"block",lineHeight:1.3}}>{title}</span>
                          <span style={{fontSize:"0.63rem",color:"var(--muted)",display:"block",marginTop:"0.1rem"}}>{sub}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <a href="https://www.youtube.com/@peacefulprofitmonk" target="_blank" rel="noreferrer" style={{display:"flex",alignItems:"center",gap:"0.85rem",padding:"0.85rem 1.1rem 0.85rem 0.9rem",background:"rgba(255,255,255,0.50)",backdropFilter:"blur(18px)",border:"1px solid rgba(255,255,255,0.80)",borderRadius:16,textDecoration:"none",color:"inherit",boxShadow:"0 4px 24px rgba(107,53,200,0.09)"}}>
                <div className="play-glow" style={{width:36,height:36,borderRadius:8,background:"linear-gradient(135deg,#cc0000,#ff4444)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                  <div style={{width:0,height:0,borderTop:"7px solid transparent",borderBottom:"7px solid transparent",borderLeft:"12px solid #fff",marginLeft:3}}/>
                </div>
                <div>
                  <span style={{fontSize:"0.72rem",fontWeight:600,color:"var(--ink)",display:"block",lineHeight:1.3}}>Watch Daily Dhyan &amp; Swadhyaya Sessions</span>
                  <span style={{fontSize:"0.6rem",color:"var(--muted)",display:"block",marginTop:"0.08rem"}}>@PeacefulProfitMonk · Free · Open to All</span>
                </div>
                <div style={{marginLeft:"auto",display:"flex",alignItems:"center",gap:"0.3rem",fontSize:"0.55rem",fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase",color:"rgba(255,80,80,0.9)",border:"1px solid rgba(255,80,80,0.25)",padding:"0.22rem 0.55rem",borderRadius:100,background:"rgba(255,68,68,0.07)"}}>
                  <div className="live-blink" style={{width:5,height:5,borderRadius:"50%",background:"#ff4444"}}/>Daily Live
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   SECTION: Marquee
───────────────────────────────────────────── */
function Marquee() {
  const items = ["ZED Master Trainer","Dhyan Master","Peaceful Profit Monk","ध्यान धन साधक","300+ Organisations","Govt. of India Certified","Zero Waste · Zero Defect · Zero Mind"];
  const doubled = [...items,...items];
  return (
    <div style={{position:"relative",zIndex:1,padding:"1rem 0",background:"rgba(255,255,255,0.38)",backdropFilter:"blur(18px)",borderTop:"1px solid rgba(255,255,255,0.75)",borderBottom:"1px solid rgba(255,255,255,0.75)",overflow:"hidden"}}>
      <div className="marquee-anim" style={{display:"inline-flex",whiteSpace:"nowrap"}}>
        {doubled.map((item,i)=>(
          <span key={i} style={{display:"inline-flex",alignItems:"center"}}>
            <span style={{fontSize:"0.68rem",fontWeight:500,letterSpacing:"0.2em",textTransform:"uppercase",color:"var(--ink2)",padding:"0 2.5rem"}}>{item}</span>
            <span style={{display:"inline-block",width:6,height:6,borderRadius:"50%",background:"linear-gradient(135deg,var(--p400),var(--rose))",opacity:0.7}}/>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   SECTION: About
───────────────────────────────────────────── */
function About() {
  return (
    <section id="about" style={{padding:"7rem 0",position:"relative",zIndex:1,background:"var(--bg)"}}>
      <div style={{maxWidth:1160,margin:"0 auto",padding:"0 2.5rem"}}>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1.5fr",gap:"5rem",alignItems:"start"}}>
          {/* Left sticky panel */}
          <div className="reveal" style={{position:"sticky",top:90}}>
            <div style={{position:"relative",width:"100%",marginBottom:"2.2rem"}}>
              <div className="photo-bg-shape" style={{position:"absolute",top:18,left:18,right:-18,bottom:-18,borderRadius:"44% 56% 62% 38%/42% 46% 54% 58%",background:"linear-gradient(135deg,rgba(139,92,246,0.14)0%,rgba(240,192,64,0.10)50%,rgba(232,121,249,0.08)100%)",zIndex:0}}/>
              <div className="photo-ring" style={{position:"absolute",top:-12,left:-12,right:12,bottom:12,borderRadius:"42% 58% 58% 42%/48% 42% 58% 52%",border:"1.5px solid rgba(139,92,246,0.22)",zIndex:0}}/>
              <img src="/image.png" alt="Mishrilal Suriya" className="photo-float" style={{position:"relative",zIndex:1,width:"100%",height:"auto",display:"block",borderRadius:"44% 56% 52% 48%/46% 44% 56% 54%",filter:"brightness(1.04)contrast(1.06)saturate(1.1)drop-shadow(0 18px 48px rgba(107,53,200,0.28))"}}/>
              <div className="badge-float-1" style={{position:"absolute",zIndex:3,top:"12%",right:-18,background:"rgba(255,255,255,0.90)",backdropFilter:"blur(16px)",border:"1px solid rgba(255,255,255,0.95)",borderRadius:100,padding:"0.46rem 0.9rem",fontSize:"0.72rem",fontWeight:600,color:"var(--p700)",whiteSpace:"nowrap",boxShadow:"0 4px 20px rgba(107,53,200,0.15)"}}>ZED Master Trainer</div>
              <div className="badge-float-2" style={{position:"absolute",zIndex:3,bottom:"22%",left:-16,background:"rgba(255,255,255,0.90)",backdropFilter:"blur(16px)",border:"1px solid rgba(255,255,255,0.95)",borderRadius:100,padding:"0.46rem 0.9rem",fontSize:"0.72rem",fontWeight:600,color:"var(--p600)",whiteSpace:"nowrap",boxShadow:"0 4px 20px rgba(107,53,200,0.15)"}}>Dhyan Master</div>
              <div className="badge-float-3" style={{position:"absolute",zIndex:3,bottom:"6%",right:8,background:"rgba(255,255,255,0.90)",backdropFilter:"blur(16px)",border:"1px solid rgba(255,255,255,0.95)",borderRadius:100,padding:"0.46rem 0.9rem",fontSize:"0.72rem",fontWeight:600,color:"var(--p800)",whiteSpace:"nowrap",boxShadow:"0 4px 20px rgba(107,53,200,0.15)"}}>30+ Years</div>
            </div>
            <div style={{textAlign:"center",marginBottom:"1.8rem"}}>
              <h3 className="font-display" style={{fontSize:"1.6rem",fontWeight:700,color:"var(--ink)",letterSpacing:"-0.02em",marginBottom:"0.18rem"}}>Mishrilal Suriya</h3>
              <span style={{fontSize:"0.78rem",fontWeight:500,color:"var(--muted)",letterSpacing:"0.06em",textTransform:"uppercase"}}>Peaceful Profit Monk · ध्यान धन साधक</span>
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:"0.55rem"}}>
              {[["🏛️","ZED Master Trainer","QCI · Govt. of India Certified","v"],["🧘","Meditation Master Trainer","Daily Dhyan & Swadhyaya Sessions","c"],["🏭","Managing Director","Here Quality Excellence · Vadodara","g"],["📖","Author & Engineer","Published by Government of India","r"],["📍","Spiritual Mission since 2020","Vadodara, Gujarat, India","m"]].map(([emoji,title,sub,c],i)=>{
                const iconBg = {v:"linear-gradient(135deg,rgba(139,92,246,0.18),rgba(196,181,253,0.25))",c:"linear-gradient(135deg,rgba(240,192,64,0.18),rgba(240,192,64,0.30))",g:"linear-gradient(135deg,rgba(16,185,129,0.15),rgba(52,211,153,0.25))",r:"linear-gradient(135deg,rgba(232,121,249,0.15),rgba(232,121,249,0.25))",m:"linear-gradient(135deg,rgba(245,158,11,0.15),rgba(251,191,36,0.25))"};
                return (
                  <div key={i} className="cred-pill">
                    <div style={{width:32,height:32,borderRadius:10,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1rem",flexShrink:0,background:iconBg[c]}}>{emoji}</div>
                    <div style={{display:"flex",flexDirection:"column",gap:"0.1rem"}}>
                      <span style={{fontSize:"0.80rem",fontWeight:600,color:"var(--ink2)",lineHeight:1.3}}>{title}</span>
                      <span style={{fontSize:"0.70rem",color:"var(--muted)",fontWeight:400,lineHeight:1.3}}>{sub}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* Right story */}
          <div className="reveal" style={{display:"flex",flexDirection:"column",gap:"1.6rem",paddingTop:"0.5rem",transitionDelay:"0.15s"}}>
            <div>
              <span style={{display:"block",fontSize:"0.65rem",fontWeight:600,letterSpacing:"0.3em",textTransform:"uppercase",color:"var(--p600)"}}>Who I Am</span>
              <div style={{width:36,height:"2.5px",background:"linear-gradient(90deg,var(--p500),var(--rose))",borderRadius:2,margin:"0.85rem 0"}}/>
              <h2 className="font-display sec-h" style={{fontSize:"clamp(2.4rem,4.2vw,3.6rem)",fontWeight:700,lineHeight:1.12,color:"var(--ink)",letterSpacing:"-0.01em"}}>Engineer.<br/><em style={{fontStyle:"italic",fontWeight:400,color:"var(--p600)"}}>Meditator.</em><br/>Mentor.</h2>
            </div>
            <div className="glass" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"0.75rem"}}>
              {[["30+","Years of Mastery"],["300+","Organisations"],["2×","Profit Growth"]].map(([n,l])=>(
                <div key={l} style={{borderRadius:14,border:"1px solid rgba(255,255,255,0.88)",textAlign:"center",padding:"1.1rem 0.8rem"}}>
                  <span style={{display:"block",fontFamily:"'DM Sans',sans-serif",fontSize:"2rem",fontWeight:700,background:"linear-gradient(135deg,var(--p600),var(--p400))",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"}}>{n}</span>
                  <span style={{display:"block",fontSize:"0.68rem",color:"var(--muted)",textTransform:"uppercase",letterSpacing:"0.06em",marginTop:"0.15rem"}}>{l}</span>
                </div>
              ))}
            </div>
            {[
              {icon:"🌟",title:"The Journey",body:<>The <strong style={{color:"var(--p600)"}}>श्री मिश्री लाल जी सुरिया</strong> — the Peaceful Profit Monk — is Managing Director of Here Quality Excellence Pvt. Ltd., Vadodara. A Mechanical Engineer, he has devoted over three decades to guiding organisations toward excellence through Indian spiritual wisdom.</>},
              {icon:"⚙️",title:"Precision Meets Spirituality",body:<>As a <strong style={{color:"var(--p600)"}}>ZED Master Trainer certified by QCI (Govt. of India)</strong> and a Master Trainer in Dhyan, he bridges engineering precision, quality management rigour, and Indian spiritual tradition into one unified practice.</>},
              {icon:"🪷",title:"The 4R Framework & Open Sessions",body:<>His daily virtual Swadhyaya and Dhyan sessions are open to all. Through listening and practice, anyone can access the <strong style={{color:"var(--p600)"}}>4R Framework</strong> — Rupees (सम्पत्ति), Respect (सम्मान), Relations (सम्बन्ध), and Rest (समाधि).</>},
              {icon:"☸️",title:"Holistic Vision",body:<>He places special emphasis on <strong style={{color:"var(--p600)"}}>Holistic Vision (Samyak-Darshan)</strong> from Jainvani and the Gita's <em style={{color:"var(--p500)"}}>Samatvam Yoga Uchyate</em> as the inner technology that makes all four R's naturally available.</>},
            ].map(({icon,title,body},i)=>(
              <div key={i} className="story-card">
                <span style={{fontSize:"1.4rem",marginBottom:"0.7rem",display:"block"}}>{icon}</span>
                <div className="font-display" style={{fontSize:"1.15rem",fontWeight:600,color:"var(--ink)",marginBottom:"0.55rem"}}>{title}</div>
                <p style={{fontSize:"0.92rem",lineHeight:1.85,color:"var(--ink2)",fontWeight:300}}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   SECTION: 4R Framework
───────────────────────────────────────────── */
function Framework() {
  const cards = [
    {n:"1",en:"Rupees",hi:"सम्पत्ति",desc:"Lasting prosperity aligned with dharma and purposeful, ethical enterprise.",glow:"rgba(240,192,64,0.9)",bar:"linear-gradient(90deg,#f0c040,#f5d27a)",delay:0},
    {n:"2",en:"Relation & Respect",hi:"सम्बन्ध और सम्मान",desc:"Real harmony is seen at home: when a mother-in-law and her son's wife relate with empathy, dignity, and mutual respect.",glow:"rgba(139,92,246,0.9)",bar:"linear-gradient(90deg,var(--p400),var(--p300))",delay:0.1},
    {n:"3",en:"Rest",hi:"आराम",desc:"True rest is inner calm: a steady mind, balanced breath, and deep recovery amidst work, family, and responsibility.",glow:"rgba(240,112,112,0.9)",bar:"linear-gradient(90deg,var(--coral),#f5a090)",delay:0.2},
    {n:"4",en:"Reading",hi:"पठन",desc:"Reading sharpens judgment: when you practice the previous R's consistently, this R helps you generate more Rupees with clarity.",glow:"rgba(232,121,249,0.9)",bar:"linear-gradient(90deg,var(--rose),#f5a8f8)",delay:0.3},
  ];
  return (
    <section id="framework" style={{padding:"7rem 0",background:"var(--p900)",position:"relative",overflow:"hidden"}}>
      {[{w:600,h:600,t:-150,l:-150,bg:"rgba(107,53,200,0.55)"},{w:450,h:450,b:-100,r:-100,bg:"rgba(240,192,64,0.40)"},{w:350,h:350,t:"40%",l:"40%",bg:"rgba(232,121,249,0.30)"}].map(({w,h,t,b,l,r,bg},i)=>(
      <div key={i} style={{position:"absolute",borderRadius:"50%",filter:"blur(100px)",pointerEvents:"none",width:w,height:h,top:t,bottom:b,left:l,right:r,background:`radial-gradient(circle,${bg}0%,transparent 70%)`,animation:`fwAmb ${[18,22,15][i]}s ease-in-out infinite alternate`}}/>
    ))}
      <div style={{maxWidth:1160,margin:"0 auto",padding:"0 2.5rem",position:"relative",zIndex:1}}>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"3rem",alignItems:"end",marginBottom:"3.5rem"}}>
          <div className="reveal">
            <span style={{display:"block",fontSize:"0.65rem",fontWeight:600,letterSpacing:"0.3em",textTransform:"uppercase",color:"rgba(196,181,253,0.8)"}}>The Framework</span>
            <div style={{width:36,height:"2.5px",background:"linear-gradient(90deg,var(--p300),var(--rose))",borderRadius:2,margin:"0.85rem 0"}}/>
            <h2 className="font-display" style={{fontSize:"clamp(2.4rem,4.2vw,3.6rem)",fontWeight:700,lineHeight:1.12,color:"#fff",letterSpacing:"-0.01em"}}>The <em style={{fontStyle:"italic",fontWeight:400,background:"linear-gradient(125deg,var(--p300),var(--gold))",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"}}>4R</em> Path<br/>to Fulfilment</h2>
          </div>
          <p className="reveal" style={{fontSize:"0.97rem",lineHeight:1.85,color:"rgba(255,255,255,0.52)",maxWidth:420,transitionDelay:"0.15s"}}>Through Swadhyaya and Dhyan, these four dimensions of a flourishing life become naturally accessible to every sincere seeker.</p>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"1.4rem"}}>
          {cards.map(({n,en,hi,desc,glow,bar,delay})=>(
            <div key={n} className="fw-card reveal" style={{transitionDelay:`${delay}s`}}>
              <div style={{position:"absolute",width:140,height:140,borderRadius:"50%",filter:"blur(40px)",top:-30,right:-30,pointerEvents:"none",background:`radial-gradient(circle,${glow}0%,transparent 70%)`,opacity:0.55}}/>
              <div className="font-display" style={{position:"absolute",top:"1rem",right:"1.2rem",fontSize:"4rem",fontWeight:900,color:"#fff",lineHeight:1}}>{n}</div>
              <div style={{width:28,height:2,borderRadius:2,marginBottom:"1rem",background:bar}}/>
              <span className="font-display" style={{fontSize:"1.6rem",fontWeight:700,color:"#fff",display:"block",lineHeight:1,marginBottom:"0.2rem"}}>{en}</span>
              <span style={{fontSize:"0.95rem",color:"var(--gold)",display:"block",marginBottom:"0.9rem"}}>{hi}</span>
              <p style={{fontSize:"0.84rem",lineHeight:1.75,color:"rgba(255,255,255,0.46)"}}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   SECTION: Philosophy
───────────────────────────────────────────── */
function Philosophy() {
  return (
    <section id="philosophy" style={{padding:"7rem 0",position:"relative",zIndex:1}}>
      <div style={{maxWidth:1160,margin:"0 auto",padding:"0 2.5rem"}}>
        <div style={{textAlign:"center",marginBottom:"4rem"}} className="reveal">
          <span style={{display:"block",fontSize:"0.65rem",fontWeight:600,letterSpacing:"0.3em",textTransform:"uppercase",color:"var(--p600)"}}>Core Philosophy</span>
          <div style={{width:36,height:"2.5px",background:"linear-gradient(90deg,var(--p500),var(--rose))",borderRadius:2,margin:"0.85rem auto"}}/>
          <h2 className="font-display" style={{fontSize:"clamp(2.4rem,4.2vw,3.6rem)",fontWeight:700,lineHeight:1.12,color:"var(--ink)"}}>Where <em style={{fontStyle:"italic",fontWeight:400,color:"var(--p600)"}}>Dharma</em> Meets Excellence</h2>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"4.5rem",alignItems:"start"}}>
          {/* Left — quotes */}
          <div>
            {[
              {text:"समत्वं योग उच्यते",trans:'"Equanimity is called Yoga."',src:"— Bhagavad Gita",glow:"var(--p400)",delay:0},
              {text:"सम्यक्-दर्शन",trans:'"Right Perception — seeing reality without distortion."',src:"— Jainvani · Holistic Vision",glow:"var(--gold)",delay:0.15},
            ].map(({text,trans,src,glow,delay},i)=>(
              <div key={i} className="glass bq reveal" style={{marginBottom:"1.4rem",transitionDelay:`${delay}s`}}>
                <div style={{position:"absolute",width:180,height:180,borderRadius:"50%",filter:"blur(55px)",opacity:0.2,top:-50,right:-50,pointerEvents:"none",background:`radial-gradient(circle,${glow}0%,transparent 70%)`}}/>
                <span className="font-display" style={{fontSize:"5rem",lineHeight:0.8,display:"block",marginBottom:"0.4rem",background:"linear-gradient(135deg,var(--p400),var(--rose))",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",opacity:0.35}}>"</span>
                <span className="font-display" style={{fontSize:"1.7rem",fontWeight:500,color:"var(--ink)",display:"block",lineHeight:1.55,marginBottom:"0.55rem"}}>{text}</span>
                <span className="font-display" style={{fontStyle:"italic",fontSize:"1rem",color:"var(--muted)",display:"block",marginBottom:"0.4rem"}}>{trans}</span>
                <span style={{fontSize:"0.6rem",fontWeight:600,letterSpacing:"0.22em",textTransform:"uppercase",color:"var(--p500)"}}>{src}</span>
              </div>
            ))}
          </div>
          {/* Right — pillars */}
          <div className="reveal" style={{transitionDelay:"0.2s"}}>
            <span style={{display:"block",fontSize:"0.65rem",fontWeight:600,letterSpacing:"0.3em",textTransform:"uppercase",color:"var(--p600)"}}>Three Foundations</span>
            <div style={{width:36,height:"2.5px",background:"linear-gradient(90deg,var(--p500),var(--rose))",borderRadius:2,margin:"0.85rem 0"}}/>
            <div style={{display:"flex",flexDirection:"column",gap:"1.5rem"}}>
              {[
                {name:"Holistic Vision",hi:"सम्यक्-दर्शन",body:"The Jain principle of right perception — seeing reality as it is, enabling wise, ethical decisions in business and life.",border:"var(--p500)"},
                {name:"Zero Philosophy",hi:"शून्य दर्शन",body:"Zero Waste · Zero Defect · Zero Effect · Zero Mind — India's quality mission powered by ancient spiritual inner technology.",border:"var(--gold)"},
                {name:"Daily Practice",hi:"नित्य साधना",body:"Daily Swadhyaya and Dhyan sessions transform how individuals and businesses relate to work, wealth, and wellbeing.",border:"var(--p500)"},
              ].map(({name,hi,body,border})=>(
                <div key={name} className="pillar" style={{borderLeftColor:border}}>
                  <p style={{fontSize:"0.7rem",fontWeight:700,letterSpacing:"0.25em",textTransform:"uppercase",color:"var(--p600)",marginBottom:"0.5rem"}}>{name}</p>
                  <span className="font-display" style={{fontSize:"1.1rem",color:"var(--ink)",display:"block",marginBottom:"0.6rem",fontWeight:600}}>{hi}</span>
                  <p style={{fontSize:"0.88rem",lineHeight:1.8,color:"var(--muted)"}}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Books */}
        <div className="reveal" style={{marginTop:"3.3rem",padding:"1.8rem 2rem",borderRadius:20,position:"relative",overflow:"hidden",background:"linear-gradient(145deg,var(--p900)0%,#20084a 50%,var(--p900)100%)",border:"1px solid rgba(255,255,255,0.14)",boxShadow:"0 14px 42px rgba(24,10,48,0.35)",transitionDelay:"0.28s"}}>
          <div style={{position:"absolute",width:320,height:320,right:-90,top:-90,borderRadius:"50%",background:"radial-gradient(circle,rgba(240,192,64,0.30)0%,transparent 70%)",filter:"blur(6px)",pointerEvents:"none"}}/>
          <div style={{marginBottom:"1.35rem",position:"relative",zIndex:1}}>
            <span style={{display:"block",fontSize:"0.65rem",fontWeight:600,letterSpacing:"0.3em",textTransform:"uppercase",color:"rgba(196,181,253,0.78)"}}>Books Published</span>
            <div style={{width:36,height:"2.5px",background:"linear-gradient(90deg,rgba(196,181,253,0.8),rgba(240,192,64,0.85))",borderRadius:2,margin:"0.85rem 0"}}/>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:"1rem",position:"relative",zIndex:1}}>
            {[
              {title:"Zero Mind · Zero Waste · Zero Defect · Zero Effect",sub:"Written for Government of India",desc:"A framework linking ancient Indian spiritual wisdom with quality excellence, introducing Zero Mind as the inner base for external transformation."},
              {title:"Samyak Samadhan",sub:"Author's Work",desc:"Explores right understanding, inner resolution, and practical life clarity. The book guides readers toward balanced decisions and peaceful progress."},
            ].map(({title,sub,desc})=>(
              <div key={title} className="phil-book-card">
                <span className="font-display" style={{display:"block",fontSize:"1.15rem",fontWeight:700,color:"#fff",lineHeight:1.2,marginBottom:"0.22rem"}}>{title}</span>
                <span style={{display:"block",fontSize:"0.63rem",fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase",color:"rgba(240,192,64,0.86)",marginBottom:"0.45rem"}}>{sub}</span>
                <p style={{fontSize:"0.86rem",lineHeight:1.68,color:"rgba(255,255,255,0.64)"}}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   SECTION: Services
───────────────────────────────────────────── */
function Services() {
  const cards = [
    {n:"01",title:"Technique of Stressfree",body:"Practical methods to reduce stress and build a calm, balanced mind in daily life.",delay:0},
    {n:"02",title:"Career Counselling",body:"Guidance to choose the right career path based on strengths, goals, and long-term growth.",delay:0.12},
    {n:"03",title:"Career and Computze Counselling",body:"Personalized guidance for career direction and growth through practical counselling.",delay:0.24},
    {n:"04",title:"How to Face Interview Confidently",body:"Step-by-step mentoring to improve interview confidence, communication, and performance.",delay:0.36},
  ];
  const courses = [
    {num:1,name:"Foundation Course",levelType:"Basic",level:"Rishi · Samyak Drashti · Free · One-day course",href:"/courses/foundation"},
    {num:2,name:"Crash Course",levelType:"Intermediate",level:"Muni-Sadhak · Rs 100 fee · 7 days · Up to 2 hours daily",href:"/courses/crash"},
    {num:3,name:"Kevalya — DIY Course",levelType:"Advance",level:"Yogeshwar · Arihant · 3-month deep course · Charges: contact mobile",href:"/courses/kevalya"},
  ];
  return (
    <section id="services" style={{padding:"7rem 0",background:"var(--bg)",position:"relative",zIndex:1}}>
      <div style={{maxWidth:1160,margin:"0 auto",padding:"0 2.5rem"}}>
        <div style={{marginBottom:"3.5rem"}} className="reveal">
          <span style={{display:"block",fontSize:"0.65rem",fontWeight:600,letterSpacing:"0.3em",textTransform:"uppercase",color:"var(--p600)"}}>What I Offer</span>
          <div style={{width:36,height:"2.5px",background:"linear-gradient(90deg,var(--p500),var(--rose))",borderRadius:2,margin:"0.85rem 0"}}/>
          <h2 className="font-display" style={{fontSize:"clamp(2.4rem,4.2vw,3.6rem)",fontWeight:700,color:"var(--ink)"}}>Pathways to <em style={{fontStyle:"italic",fontWeight:400,color:"var(--p600)"}}>Transformation</em></h2>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:"2rem"}}>
          {cards.map(({n,title,body,delay})=>(
            <div key={n} className="svc-card reveal" style={{transitionDelay:`${delay}s`}}>
              <span className="font-display" style={{fontSize:"3.8rem",fontWeight:700,display:"block",lineHeight:1,marginBottom:"0.5rem",color:"#fff",position:"relative",zIndex:1}}>{n}</span>
              <h3 className="font-display" style={{fontSize:"1.3rem",fontWeight:700,color:"var(--gold)",marginBottom:"1rem",position:"relative",zIndex:1}}>{title}</h3>
              <p style={{fontSize:"0.92rem",lineHeight:1.72,color:"rgba(255,255,255,0.56)",fontWeight:300,flex:1,position:"relative",zIndex:1}}>{body}</p>
            </div>
          ))}
          {/* Courses card */}
          <div id="courses-card" className="svc-card reveal" style={{transitionDelay:"0.48s",gridColumn:"1 / -1"}}>
            <span className="font-display" style={{fontSize:"3.8rem",fontWeight:700,display:"block",lineHeight:1,marginBottom:"0.5rem",color:"#fff",position:"relative",zIndex:1}}>05</span>
            <h3 className="font-display" style={{fontSize:"1.3rem",fontWeight:700,color:"var(--gold)",marginBottom:"1rem",position:"relative",zIndex:1}}>Courses</h3>
            <div style={{display:"inline-flex",alignItems:"center",gap:"0.45rem",padding:"0.45rem 0.85rem",marginBottom:"0.95rem",borderRadius:999,background:"rgba(240,192,64,0.16)",border:"1px solid rgba(240,192,64,0.45)",boxShadow:"0 0 22px rgba(240,192,64,0.18)",width:"fit-content",position:"relative",zIndex:1}}>
              <span style={{fontSize:"0.76rem",fontWeight:700,letterSpacing:"0.08em",textTransform:"uppercase",color:"#ffe6a0"}}>3 Levels of Course</span>
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:"0.9rem",flex:1,position:"relative",zIndex:1}}>
              {courses.map(({num,name,levelType,level,href})=>(
                <Link key={num} to={href} className="course-level-card" style={{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"1rem",textDecoration:"none",color:"inherit",padding:"0.9rem 1rem",borderRadius:14,background:"linear-gradient(120deg,rgba(255,255,255,0.14),rgba(255,255,255,0.06))",border:"1px solid rgba(255,255,255,0.24)",boxShadow:"0 10px 24px rgba(0,0,0,0.22)",transition:"all .25s"}}>
                  <div style={{display:"flex",alignItems:"flex-start",gap:"0.9rem"}}>
                    <span style={{fontFamily:"'DM Sans',sans-serif",fontSize:"0.9rem",fontWeight:700,color:"#1f0f3f",background:"linear-gradient(135deg,var(--gold),#ffe39c)",width:34,height:34,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,boxShadow:"0 6px 16px rgba(240,192,64,0.45)"}}>{num}</span>
                    <div>
                      <span style={{fontSize:"0.9rem",fontWeight:700,color:"#fff",display:"block",lineHeight:1.2,marginBottom:"0.25rem"}}>{name}</span>
                      <span style={{fontSize:"0.72rem",color:"rgba(255,255,255,0.75)",display:"block",fontWeight:500,lineHeight:1.45}}>{level}</span>
                    </div>
                  </div>
                  <span className="course-level-tag" style={{fontSize:"0.62rem",fontWeight:700,letterSpacing:"0.08em",textTransform:"uppercase",color:"#2d154f",background:"linear-gradient(135deg,#f9e08f,#ffd266)",borderRadius:999,padding:"0.42rem 0.75rem",border:"1px solid rgba(255,255,255,0.5)",whiteSpace:"nowrap",boxShadow:"0 4px 14px rgba(240,192,64,0.35)"}}>{levelType}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   SECTION: Student Reading (4th R)
───────────────────────────────────────────── */
function StudentReading() {
  const points = [
    "4th R in the 4R pathway: Reading.",
    "Reading builds clarity before action and strengthens decision quality.",
    "Worth Rupees (4R): Read what improves your value, wisdom, and financial awareness.",
    "Daily reading with reflection turns knowledge into practical results.",
  ];

  return (
    <section id="student-reading" style={{padding:"7rem 0 5.5rem",position:"relative",zIndex:1}}>
      <div style={{maxWidth:1160,margin:"0 auto",padding:"0 2.5rem"}}>
        <div className="reveal" style={{display:"grid",gridTemplateColumns:"1.05fr 0.95fr",gap:"2rem",alignItems:"stretch"}}>
          <div className="glass" style={{padding:"2rem 2rem 1.9rem"}}>
            <span style={{display:"block",fontSize:"0.65rem",fontWeight:600,letterSpacing:"0.3em",textTransform:"uppercase",color:"var(--p600)"}}>To Offer Students</span>
            <div style={{width:36,height:"2.5px",background:"linear-gradient(90deg,var(--p500),var(--rose))",borderRadius:2,margin:"0.85rem 0"}}/>
            <h2 className="font-display" style={{fontSize:"clamp(2rem,3.8vw,3.2rem)",fontWeight:700,lineHeight:1.1,color:"var(--ink)",marginBottom:"0.9rem"}}>
              Reading <em style={{fontStyle:"italic",fontWeight:400,color:"var(--p600)"}}>(4th R)</em>
            </h2>
            <p style={{fontSize:"0.97rem",lineHeight:1.82,color:"var(--muted)",marginBottom:"1.1rem"}}>
              A focused reading practice for students under the 4R model, designed to improve understanding, values, and lifelong growth.
            </p>
            <ul style={{margin:0,paddingLeft:"1.1rem",color:"var(--ink2)",lineHeight:1.85}}>
              {points.map((item) => (
                <li key={item} style={{marginBottom:"0.3rem"}}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="glass" style={{padding:"2rem",display:"flex",flexDirection:"column",justifyContent:"center",position:"relative",overflow:"hidden"}}>
            <div style={{position:"absolute",width:240,height:240,top:-80,right:-60,borderRadius:"50%",background:"radial-gradient(circle,rgba(240,192,64,0.24)0%,transparent 72%)",filter:"blur(4px)",pointerEvents:"none"}}/>
            <span style={{fontSize:"0.62rem",fontWeight:700,letterSpacing:"0.2em",textTransform:"uppercase",color:"var(--p600)",marginBottom:"0.65rem",position:"relative",zIndex:1}}>Worth Rupees (4R)</span>
            <p className="font-display" style={{fontSize:"1.8rem",lineHeight:1.25,color:"var(--ink)",position:"relative",zIndex:1}}>
              you are not just student ,
              <br/>
              <span style={{fontStyle:"italic",fontWeight:700,background:"linear-gradient(120deg,var(--p700),var(--rose))",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"}}>
                you are prudent
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   SECTION: Feedback Impact
───────────────────────────────────────────── */
function FeedbackImpact() {
  const feedbackTopics = [
    "Purpose of life",
    "What is life",
    "What all you want in life",
    "Learning life-transforming case studies",
    "Experiencing endless happiness",
  ];

  return (
    <section id="feedback" style={{padding:"0 0 6.5rem",position:"relative",zIndex:1}}>
      <div style={{maxWidth:1160,margin:"0 auto",padding:"0 2.5rem"}}>
        <div className="reveal glass" style={{padding:"2.2rem 2rem 2rem",position:"relative",overflow:"hidden"}}>
          <div style={{position:"absolute",width:300,height:300,right:-100,bottom:-120,borderRadius:"50%",background:"radial-gradient(circle,rgba(139,92,246,0.2)0%,transparent 70%)",pointerEvents:"none"}}/>
          <span style={{display:"block",fontSize:"0.65rem",fontWeight:600,letterSpacing:"0.3em",textTransform:"uppercase",color:"var(--p600)",position:"relative",zIndex:1}}>
            How Course Has Helped Peoples
          </span>
          <div style={{width:36,height:"2.5px",background:"linear-gradient(90deg,var(--p500),var(--rose))",borderRadius:2,margin:"0.85rem 0",position:"relative",zIndex:1}}/>
          <h2 className="font-display" style={{fontSize:"clamp(2rem,3.8vw,3rem)",fontWeight:700,lineHeight:1.12,color:"var(--ink)",marginBottom:"0.95rem",position:"relative",zIndex:1}}>
            Feedback <em style={{fontStyle:"italic",fontWeight:400,color:"var(--p600)"}}>That Transforms</em>
          </h2>
          <p style={{fontSize:"0.97rem",lineHeight:1.82,color:"var(--muted)",marginBottom:"1rem",position:"relative",zIndex:1}}>
            Participants consistently report clarity, direction, and inner stability after completing the course journey.
          </p>
          <div style={{display:"grid",gridTemplateColumns:"repeat(2,minmax(0,1fr))",gap:"0.75rem",position:"relative",zIndex:1}}>
            {feedbackTopics.map((item) => (
              <div key={item} style={{padding:"0.85rem 1rem",borderRadius:12,background:"rgba(255,255,255,0.62)",border:"1px solid rgba(255,255,255,0.88)",boxShadow:"0 4px 18px rgba(107,53,200,0.08)",color:"var(--ink2)",fontSize:"0.9rem",fontWeight:500}}>
                {item}
              </div>
            ))}
            <div style={{gridColumn:"1 / -1",padding:"0.9rem 1rem",borderRadius:12,background:"linear-gradient(120deg,rgba(139,92,246,0.14),rgba(232,121,249,0.1))",border:"1px solid rgba(139,92,246,0.3)",boxShadow:"0 6px 18px rgba(107,53,200,0.12)",color:"var(--p800)",fontSize:"0.95rem",fontWeight:700,textAlign:"center"}}>
              The integrated answer to these five dimensions is the 4R framework.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   SECTION: YouTube
───────────────────────────────────────────── */
function YouTube() {
  const sessions = [
    {icon:"🧘",title:"Morning Dhyan Session",tag:"Meditation · Daily Practice"},
    {icon:"📖",title:"Swadhyaya — Self Study",tag:"Jain · Gita · Wisdom"},
    {icon:"💼",title:"Peaceful Profit Masterclass",tag:"Business · Spirituality · ZED"},
    {icon:"⭕",title:"Zero Mind — Zero Defect",tag:"Quality · Excellence · India"},
  ];
  const topics = ["🧘 Dhyan","📖 Swadhyaya","💰 Profit & Peace","🕉️ Jain Philosophy","📿 Gita Wisdom","⭕ Zero Mind"];
  return (
    <section id="youtube" style={{padding:"7rem 0",position:"relative",overflow:"hidden",background:"linear-gradient(145deg,var(--p900)0%,#1a082e 40%,#0f0520 100%)"}}>
      {[{w:550,h:550,t:-120,l:-120,bg:"rgba(255,0,0,0.22),rgba(139,92,246,0.25)"},{w:450,h:450,b:-100,r:-80,bg:"rgba(240,192,64,0.28),rgba(232,121,249,0.15)"},{w:300,h:300,t:"40%",r:"25%",bg:"rgba(255,80,80,0.18)"}].map(({w,h,t,b,l,r,bg},i)=>(
        <div key={i} style={{position:"absolute",borderRadius:"50%",filter:"blur(95px)",pointerEvents:"none",width:w,height:h,top:t,bottom:b,left:l,right:r,background:`radial-gradient(circle,${bg.includes(",")?"": ""}${bg}0%,transparent 70%)`}}/>
      ))}
      <div style={{maxWidth:1160,margin:"0 auto",padding:"0 2.5rem",position:"relative",zIndex:1}}>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"5rem",alignItems:"center"}}>
          <div className="reveal">
            <span style={{fontSize:"0.62rem",fontWeight:600,letterSpacing:"0.3em",textTransform:"uppercase",color:"rgba(255,100,100,0.9)",display:"block",marginBottom:"0.6rem"}}>
              <span className="live-blink" style={{display:"inline-block",width:8,height:8,borderRadius:"50%",background:"#ff4444",marginRight:"0.5rem",boxShadow:"0 0 10px rgba(255,68,68,0.9)"}}/>Daily Sessions on YouTube
            </span>
            <div style={{width:36,height:"2.5px",borderRadius:2,background:"linear-gradient(90deg,#ff4444,var(--rose))",margin:"0.85rem 0"}}/>
            <h2 className="font-display" style={{fontSize:"clamp(2rem,3.5vw,3rem)",fontWeight:700,lineHeight:1.18,color:"#fff",marginBottom:"1.2rem"}}>Watch, Learn &amp;<br/><em style={{fontStyle:"italic",fontWeight:400,background:"linear-gradient(125deg,#ff6b6b,var(--rose),var(--p300))",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"}}>Transform Daily</em></h2>
            <p style={{fontSize:"1rem",lineHeight:1.88,color:"rgba(255,255,255,0.55)",fontWeight:300,marginBottom:"2rem"}}>Join thousands for <strong style={{color:"rgba(255,255,255,0.85)",fontWeight:600}}>daily virtual Swadhyaya and Dhyan sessions</strong> — live on YouTube. Each session is a step toward the 4R life.</p>
            <div style={{display:"flex",gap:"1.5rem",marginBottom:"2rem",flexWrap:"wrap"}}>
              {[["Daily","Live Sessions"],["4R","Life Framework"],["Free","Open to All"]].map(([n,l])=>(
                <div key={l} style={{padding:"1rem 1.4rem",background:"rgba(255,255,255,0.06)",backdropFilter:"blur(16px)",border:"1px solid rgba(255,255,255,0.10)",borderRadius:14,textAlign:"center"}}>
                  <span className="font-display" style={{fontSize:"1.8rem",fontWeight:700,display:"block",lineHeight:1,background:"linear-gradient(135deg,#ff6b6b,var(--rose))",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"}}>{n}</span>
                  <span style={{fontSize:"0.6rem",fontWeight:500,letterSpacing:"0.08em",color:"rgba(255,255,255,0.45)",display:"block",marginTop:"0.25rem"}}>{l}</span>
                </div>
              ))}
            </div>
            <div style={{display:"flex",flexWrap:"wrap",gap:"0.5rem",marginBottom:"2.2rem"}}>
              {topics.map(t=>(
                <span key={t} style={{fontSize:"0.68rem",fontWeight:500,letterSpacing:"0.06em",color:"rgba(196,181,253,0.8)",border:"1px solid rgba(196,181,253,0.2)",padding:"0.4rem 1rem",borderRadius:100,background:"rgba(139,92,246,0.12)"}}>{t}</span>
              ))}
            </div>
            <a href="https://www.youtube.com/@peacefulprofitmonk" target="_blank" rel="noreferrer" style={{display:"inline-flex",alignItems:"center",gap:"0.7rem",fontSize:"0.8rem",fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",color:"#fff",textDecoration:"none",background:"linear-gradient(135deg,#cc0000,#ff4444)",padding:"0.95rem 2.2rem",borderRadius:100,boxShadow:"0 6px 28px rgba(255,68,68,0.50)"}}>
              <span style={{fontSize:"1.1rem"}}>▶</span><span>Subscribe on YouTube</span>
            </a>
          </div>
          {/* Right card */}
          <div className="reveal" style={{transitionDelay:"0.18s"}}>
            <div className="yt-card">
              <div style={{width:"100%",aspectRatio:"16/9",background:"linear-gradient(135deg,#1a082e 0%,#2b1060 50%,#1a0533 100%)",position:"relative",overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center"}}>
                <div style={{position:"absolute",width:280,height:280,borderRadius:"50%",filter:"blur(60px)",opacity:0.45,background:"radial-gradient(circle,rgba(139,92,246,0.8)0%,transparent 70%)",top:-40,left:-40,animation:"thumbOrb1 8s ease-in-out infinite alternate"}}/>
                <div style={{position:"absolute",width:220,height:220,borderRadius:"50%",filter:"blur(50px)",opacity:0.40,background:"radial-gradient(circle,rgba(240,192,64,0.8)0%,transparent 70%)",bottom:-30,right:-30,animation:"thumbOrb2 10s ease-in-out infinite alternate"}}/>
                <div style={{position:"relative",zIndex:2,display:"flex",flexDirection:"column",alignItems:"center",gap:"1rem"}}>
                  <a href="https://www.youtube.com/@peacefulprofitmonk" target="_blank" rel="noreferrer">
                    <div className="play-pulse" style={{width:72,height:72,borderRadius:"50%",background:"rgba(255,68,68,0.92)",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"}}>
                      <div style={{width:0,height:0,borderTop:"14px solid transparent",borderBottom:"14px solid transparent",borderLeft:"24px solid #fff",marginLeft:5}}/>
                    </div>
                  </a>
                  <span className="font-display" style={{fontStyle:"italic",fontSize:"1rem",color:"rgba(255,255,255,0.7)",textAlign:"center",position:"relative",zIndex:2}}>ध्यान · धन · साधना</span>
                </div>
              </div>
              <div style={{padding:"1.4rem 1.8rem",display:"flex",alignItems:"center",gap:"1rem",borderTop:"1px solid rgba(255,255,255,0.08)"}}>
                <div style={{width:46,height:46,borderRadius:"50%",background:"linear-gradient(135deg,var(--p600),var(--rose))",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.2rem",color:"#fff",flexShrink:0,boxShadow:"0 0 0 2px rgba(255,255,255,0.15)"}}>ॐ</div>
                <div>
                  <span style={{fontSize:"0.88rem",fontWeight:600,color:"#fff",display:"block",lineHeight:1.2}}>Peaceful Profit Monk</span>
                  <span style={{fontSize:"0.7rem",color:"rgba(255,255,255,0.45)",display:"block",marginTop:"0.15rem"}}>@peacefulprofitmonk</span>
                </div>
                <div style={{marginLeft:"auto",display:"flex",alignItems:"center",gap:"0.4rem",background:"rgba(255,68,68,0.18)",border:"1px solid rgba(255,68,68,0.35)",borderRadius:100,padding:"0.3rem 0.75rem"}}>
                  <div className="live-blink" style={{width:6,height:6,borderRadius:"50%",background:"#ff4444",boxShadow:"0 0 6px rgba(255,68,68,0.9)"}}/>
                  <span style={{fontSize:"0.6rem",fontWeight:700,letterSpacing:"0.15em",textTransform:"uppercase",color:"rgba(255,120,120,0.9)"}}>Daily</span>
                </div>
              </div>
              <div style={{padding:"0 1.8rem 1.8rem",display:"flex",flexDirection:"column",gap:"0.7rem"}}>
                {sessions.map(({icon,title,tag})=>(
                  <a key={title} href="https://www.youtube.com/@peacefulprofitmonk" target="_blank" rel="noreferrer" className="yt-sess">
                    <span style={{fontSize:"1rem",width:32,textAlign:"center",flexShrink:0}}>{icon}</span>
                    <div>
                      <span style={{fontSize:"0.78rem",fontWeight:500,color:"rgba(255,255,255,0.78)",display:"block",lineHeight:1.3}}>{title}</span>
                      <span style={{fontSize:"0.62rem",color:"rgba(196,181,253,0.6)",display:"block",marginTop:"0.1rem"}}>{tag}</span>
                    </div>
                    <span style={{marginLeft:"auto",color:"rgba(255,255,255,0.25)",fontSize:"0.75rem"}}>›</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   SECTION: Contact
───────────────────────────────────────────── */
function Contact() {
  const links = [
    {href:"tel:+919427611171",icon:"📞",cls:"ci-v",bg:"linear-gradient(135deg,var(--p700),var(--p400))",shadow:"rgba(107,53,200,0.4)",label:"Phone",val:"+91 94276 11171"},
    {href:"https://linkedin.com/in/mishrilal-suriya-79361564",icon:"💼",cls:"ci-g",bg:"linear-gradient(135deg,#c9960a,var(--gold))",shadow:"rgba(240,192,64,0.4)",label:"LinkedIn",val:"mishrilal-suriya"},
    {href:"https://www.youtube.com/@peacefulprofitmonk",icon:"▶",cls:"ci-c",bg:"linear-gradient(135deg,var(--coral),#f5a090)",shadow:"rgba(240,112,112,0.4)",label:"YouTube",val:"@PeacefulProfitMonk"},
    {href:null,icon:"📍",cls:"ci-r",bg:"linear-gradient(135deg,var(--rose),#f0a8f8)",shadow:"rgba(232,121,249,0.4)",label:"Location",val:"Vadodara, Gujarat, India"},
  ];
  return (
    <section id="contact" style={{padding:"7rem 0",position:"relative",zIndex:1}}>
      <div style={{maxWidth:1160,margin:"0 auto",padding:"0 2.5rem"}}>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"5rem",alignItems:"start"}}>
          <div className="reveal">
            <span style={{display:"block",fontSize:"0.65rem",fontWeight:600,letterSpacing:"0.3em",textTransform:"uppercase",color:"var(--p600)"}}>Connect</span>
            <div style={{width:36,height:"2.5px",background:"linear-gradient(90deg,var(--p500),var(--rose))",borderRadius:2,margin:"0.85rem 0"}}/>
            <h2 className="font-display" style={{fontSize:"clamp(2.4rem,4.2vw,3.6rem)",fontWeight:700,lineHeight:1.12,color:"var(--ink)"}}>Begin Your<br/><em style={{fontStyle:"italic",fontWeight:400,color:"var(--p600)"}}>Journey Today</em></h2>
            <p style={{fontSize:"0.98rem",lineHeight:1.88,color:"var(--muted)",margin:"1.1rem 0 1.8rem",fontWeight:300}}>Reach out for consulting, ZED training, or to join the daily Dhyan &amp; Swadhyaya sessions. Every journey toward peaceful profit begins with a single, conscious step.</p>
            <div style={{padding:"1.4rem 1.6rem",background:"rgba(255,255,255,0.44)",backdropFilter:"blur(16px)",borderLeft:"3px solid var(--gold)",borderRadius:"0 12px 12px 0",fontFamily:"'DM Sans',sans-serif",fontSize:"0.97rem",lineHeight:2.1,color:"var(--ink2)"}}>
              किसी को भी स्वाध्याय सुनकर जीवन में 4R — सम्पत्ति, सम्मान, सम्बन्ध, समाधि — सुलभ हो जाता है।
            </div>
          </div>
          <div className="reveal" style={{display:"flex",flexDirection:"column",gap:"1rem",transitionDelay:"0.15s"}}>
            {links.map(({href,icon,bg,shadow,label,val})=>{
              const inner = (
                <>
                  <div style={{width:44,height:44,borderRadius:10,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.1rem",flexShrink:0,background:bg,boxShadow:`0 4px 14px ${shadow}`}}>{icon}</div>
                  <div>
                    <span style={{fontSize:"0.6rem",fontWeight:700,letterSpacing:"0.2em",textTransform:"uppercase",color:"var(--p500)",display:"block",marginBottom:"0.2rem"}}>{label}</span>
                    <span className="font-display" style={{fontSize:"1rem",fontWeight:600,color:"var(--ink)"}}>{val}</span>
                  </div>
                </>
              );
              return href ? (
                <a key={label} href={href} target={href.startsWith("http")?"_blank":undefined} rel="noreferrer" className="c-link">{inner}</a>
              ) : (
                <div key={label} className="c-link" style={{cursor:"default"}}>{inner}</div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   SECTION: Footer
───────────────────────────────────────────── */
function Footer() {
  return (
    <footer style={{background:"var(--p900)",padding:"2.2rem 0",position:"relative",zIndex:1}}>
      <div style={{maxWidth:1160,margin:"0 auto",padding:"0 2.5rem",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <span className="font-display" style={{fontSize:"1.1rem",fontWeight:600,color:"rgba(255,255,255,0.5)"}}>M L Suriya</span>
        <span className="om-pulse" style={{fontSize:"1.4rem",background:"linear-gradient(135deg,var(--p400),var(--gold),var(--rose))",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"}}>ॐ</span>
        <span style={{fontSize:"0.6rem",fontWeight:500,letterSpacing:"0.12em",textTransform:"uppercase",color:"rgba(255,255,255,0.22)"}}>Here Quality Excellence Pvt. Ltd. · Vadodara · India</span>
      </div>
    </footer>
  );
}

/* ─────────────────────────────────────────────
   ROOT APP
───────────────────────────────────────────── */
export default function App() {
  useReveal();

  useEffect(() => {
    if (window.location.hash !== "#courses-card") return;

    const scrollToCoursesCard = () => {
      const el = document.getElementById("courses-card");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    window.requestAnimationFrame(scrollToCoursesCard);
    const t = window.setTimeout(scrollToCoursesCard, 180);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <div style={{position:"relative"}}>
      {/* Aura background */}
      <div style={{position:"fixed",inset:0,zIndex:0,overflow:"hidden",pointerEvents:"none"}}>
        <div className="aura-orb aura-orb-1"/>
        <div className="aura-orb aura-orb-2"/>
        <div className="aura-orb aura-orb-3"/>
        <div className="aura-orb aura-orb-4"/>
      </div>
      <div style={{position:"relative",zIndex:1}}>
        <Navbar/>
        <Hero/>
        <Marquee/>
        <About/>
        <div style={{height:1,background:"linear-gradient(90deg,transparent,var(--p400),var(--rose),transparent)",opacity:0.35,position:"relative",zIndex:1}}/>
        <Framework/>
        <div style={{height:1,background:"linear-gradient(90deg,transparent,var(--p400),var(--rose),transparent)",opacity:0.35,position:"relative",zIndex:1}}/>
        <Philosophy/>
        <Services/>
        <StudentReading/>
        <FeedbackImpact/>
        <YouTube/>
        <div style={{height:1,background:"linear-gradient(90deg,transparent,var(--p400),var(--rose),transparent)",opacity:0.35,position:"relative",zIndex:1}}/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  );
}