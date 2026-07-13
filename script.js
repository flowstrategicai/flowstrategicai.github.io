/* ========= SPA ROUTER ========= */
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();
  initHeader(); initMenu(); buildChat();
  window.addEventListener("hashchange", router);
  router();
});

function router(){
  const hash = window.location.hash || "#/";
  const root = document.getElementById("app-root");
  if (hash.startsWith("#/project/")) renderProjectPage(hash.replace("#/project/",""), root);
  else if (hash.startsWith("#/category/")) renderCategoryPage(hash.replace("#/category/",""), root);
  else renderHomePage(root);
  setTimeout(initReveal, 80);
  if (!hash.includes("#systems") && !hash.includes("#how") && !hash.includes("#tech") && !hash.includes("#contact")) window.scrollTo(0,0);
}

/* ========= HOME ========= */
function renderHomePage(root){
  const cards = CONFIG.projects.map(p => `
    <div class="card reveal" onclick="location.hash='#/project/${p.id}'">
      <div class="card-top"><span class="card-icon">${p.icon}</span><span class="card-rating">★★★★★</span></div>
      <h3>${p.title}</h3>
      <p>${p.shortDesc}</p>
      <div class="card-tags">${p.tags.slice(0,4).map(t=>`<span>${t}</span>`).join("")}</div>
      ${p.live?'<div class="card-live">● Live on this site — try the chat widget</div>':''}
      <div class="card-cta">View full architecture →</div>
    </div>`).join("");

  const stats = CONFIG.stats.map(s=>`<div class="stat-box reveal"><div class="stat-num">${s.number}</div><div class="stat-label">${s.label}</div></div>`).join("");

  root.innerHTML = `
    <section class="hero">
      <div class="hero-glow"></div>
      <div class="hero-content">
        <div class="hero-badge">⚡ Autonomous AI Automation Studio</div>
        <h1>${CONFIG.heroTitle}</h1>
        <p>${CONFIG.heroSubtitle}</p>
        <div class="hero-buttons">
          <a href="#/#systems" class="btn-primary">Explore AI Systems</a>
          <button class="btn-secondary" onclick="openChat()">💬 Chat with FSAI Assistant</button>
        </div>
        <div class="hero-pills"><span>Sales AI</span><span>Lead Generation</span><span>Customer Support</span><span>CRM Automation</span><span>Content Systems</span></div>
      </div>
    </section>

    <section class="stats">${stats}</section>

    <section class="section" id="systems">
      <div class="section-head reveal">
        <span class="eyebrow">Production-Ready AI Systems</span>
        <h2>Featured AI Systems</h2>
        <p class="section-lead">Autonomous systems combining reasoning agents, workflow orchestration, and business logic — built for measurable outcomes. Click any system for full architecture.</p>
      </div>
      <div class="cards">${cards}</div>
    </section>

    <section class="section" id="how">
      <div class="section-head reveal"><span class="eyebrow">Architecture</span><h2>How The Systems Work</h2></div>
      <div class="process reveal">
        <div class="process-step"><span class="step-num">01</span><h4>Trigger</h4><p>Webhook, form, schedule, or signal event</p></div>
        <div class="process-arrow">→</div>
        <div class="process-step"><span class="step-num">02</span><h4>AI Reasoning</h4><p>Agent evaluates, scores & decides using tools</p></div>
        <div class="process-arrow">→</div>
        <div class="process-step"><span class="step-num">03</span><h4>Automation</h4><p>Make.com executes the workflow & integrations</p></div>
        <div class="process-arrow">→</div>
        <div class="process-step"><span class="step-num">04</span><h4>Business Result</h4><p>Leads, replies, CRM records & alerts</p></div>
      </div>
    </section>

    <section class="section" id="tech">
      <div class="section-head reveal"><span class="eyebrow">Technology</span><h2>Technology Stack</h2></div>
      <div class="tech-grid">
        ${["⚙️ Make.com","🤖 AI Agents","🧠 GPT Models","✨ Gemini","🔮 Claude","🕸️ Apify","🌐 Apollo","🔍 Tavily / Exa","☁️ Google Workspace","📧 Gmail API","🗄️ Supabase","🔗 Webhooks"].map(t=>{const[e,...n]=t.split(" ");return `<div class="tech-card"><span class="tech-emoji">${e}</span><span>${n.join(" ")}</span></div>`}).join("")}
      </div>
    </section>

    <section class="section contact" id="contact">
      <div class="section-head reveal">
        <span class="eyebrow">Get Started</span>
        <h2>Ready To Build Your AI System?</h2>
        <p class="section-lead">Tell us what you want to automate and we'll design the right AI workflow.</p>
      </div>
      <div style="text-align:center">
        <a class="btn-primary" href="mailto:${CONFIG.email}">📧 Email Flow Strategic AI</a>
        <button class="btn-secondary" onclick="openChat()">💬 Ask the AI Assistant</button>
      </div>
    </section>`;
}

/* ========= PROJECT PAGE ========= */
function renderProjectPage(id, root){
  const p = CONFIG.projects.find(x => x.id === id);
  if(!p){ location.hash = "#/"; return; }
  document.title = p.title + " | Flow Strategic AI";
  root.innerHTML = `
    <section class="project-page">
      <a href="#/" class="back-link">← Back to Portfolio</a>
      <div class="project-header reveal">
        <span class="hero-badge">${p.icon} <a href="#/category/${slug(p.category)}" style="color:var(--accent)">${p.category}</a></span>
        <h1>${p.title}</h1>
        <p class="project-subtitle">${p.hero}</p>
        <div class="card-tags">${p.tags.map(t=>`<span>${t}</span>`).join("")}</div>
      </div>

      ${p.demo?`<div class="reveal" style="margin:40px 0">
        <div class="video-wrap" style="max-width:820px;margin:0 auto;background:var(--card);border:1px solid var(--border);border-radius:18px;overflow:hidden">
          <iframe src="https://www.youtube.com/embed/${p.demo}" allowfullscreen loading="lazy" style="width:100%;height:440px;border:none;display:block"></iframe>
        </div></div>`:""}

      <div class="project-content reveal">
        <h2>What It Does</h2>
        <div class="feature-grid">${p.features.map(f=>`<div class="feature-item">✓ ${f}</div>`).join("")}</div>

        <h2>How It's Built</h2>
        <div class="module-grid">${p.modules.map((m,i)=>`<div class="module-card"><span class="module-num">${String(i+1).padStart(2,"0")}</span><h4>${m.h}</h4><p>${m.p}</p></div>`).join("")}</div>

        <h2>Business Outcomes</h2>
        <div class="outcome-grid">${p.outcomes.map(o=>`<div class="outcome-pill">✔ ${o}</div>`).join("")}</div>
      </div>

      <section class="section contact" style="padding:60px 0 0">
        <div class="section-head"><h2>Want a system like this?</h2><p class="section-lead">Let's design the right AI workflow for your business.</p></div>
        <div style="text-align:center">
          <a class="btn-primary" href="mailto:${CONFIG.email}">📧 Get Started</a>
          <button class="btn-secondary" onclick="openChat()">💬 Ask the AI Assistant</button>
        </div>
      </section>
    </section>`;
}

/* ========= CATEGORY PAGE ========= */
function renderCategoryPage(catSlug, root){
  const projects = CONFIG.projects.filter(p => slug(p.category) === catSlug);
  const name = projects.length ? projects[0].category : "Category";
  if(!projects.length){ location.hash = "#/"; return; }
  document.title = name + " | Flow Strategic AI";
  root.innerHTML = `
    <section class="section" style="padding-top:150px">
      <a href="#/" class="back-link">← Back to Portfolio</a>
      <div class="section-head"><span class="eyebrow">Category</span><h2>${name}</h2></div>
      <div class="cards">
        ${projects.map(p=>`
          <div class="card reveal" onclick="location.hash='#/project/${p.id}'">
            <div class="card-top"><span class="card-icon">${p.icon}</span><span class="card-rating">★★★★★</span></div>
            <h3>${p.title}</h3><p>${p.shortDesc}</p>
            <div class="card-tags">${p.tags.slice(0,4).map(t=>`<span>${t}</span>`).join("")}</div>
            <div class="card-cta">View full architecture →</div>
          </div>`).join("")}
      </div>
    </section>`;
}

function slug(s){ return s.toLowerCase().replace(/&/g,"and").replace(/<sup id="fnref-a-z0-9" class="footnote-ref"><a href="#fn-a-z0-9" aria-label="Footnote 1">[1]</a></sup>+/g,"-").replace(/(^-|-$)/g,""); }

/* ========= UI UTILITIES ========= */
function initHeader(){ window.addEventListener("scroll", () => document.getElementById("header").classList.toggle("scrolled", window.scrollY > 40)); }
function initMenu(){
  const t=document.getElementById("menu-toggle"), n=document.getElementById("nav");
  t.addEventListener("click", ()=>n.classList.toggle("open"));
  n.querySelectorAll("a").forEach(a=>a.addEventListener("click", ()=>n.classList.remove("open")));
}
function initReveal(){
  const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");obs.unobserve(e.target);}}),{threshold:.1});
  document.querySelectorAll(".reveal").forEach(el=>obs.observe(el));
}

/* ========= CHATBOT ========= */
let SESSION_ID = localStorage.getItem("fsai_session_id") || ("session_" + Date.now());
localStorage.setItem("fsai_session_id", SESSION_ID);
let VISITOR_ID = localStorage.getItem("fsai_visitor") || ("visitor_" + Date.now());
localStorage.setItem("fsai_visitor", VISITOR_ID);

function buildChat(){
  if(!CONFIG.chatbot.enabled || document.getElementById("fsai-chat-button")) return;
  const btn=document.createElement("button"); btn.id="fsai-chat-button"; btn.innerHTML="💬"; document.body.appendChild(btn);
  const box=document.createElement("div"); box.id="fsai-chat-box";
  box.innerHTML=`
    <div class="fsai-header">
      <div><div>${CONFIG.chatbot.name}</div><div class="status">Online</div></div>
      <span class="fsai-close" onclick="closeChat()">×</span>
    </div>
    <div id="fsai-messages"></div>
    <div class="fsai-suggestions" id="fsai-suggestions"></div>
    <div class="fsai-input-area">
      <input id="fsai-input" placeholder="Ask about our AI systems..." autocomplete="off">
      <button id="fsai-send">Send</button>
    </div>`;
  document.body.appendChild(box);

  btn.onclick=openChat;
  document.getElementById("fsai-send").onclick=sendMessage;
  document.getElementById("fsai-input").addEventListener("keypress", e=>{ if(e.key==="Enter") sendMessage(); });

  addMessage(CONFIG.chatbot.welcomeMessage, "bot-message");
  const sug=document.getElementById("fsai-suggestions");
  (CONFIG.chatbot.suggestions||[]).forEach(s=>{
    const b=document.createElement("button"); b.textContent=s;
    b.onclick=()=>{ document.getElementById("fsai-input").value=s; sendMessage(); };
    sug.appendChild(b);
  });
}

function openChat(){ document.getElementById("fsai-chat-box").style.display="flex"; }
function closeChat(){ document.getElementById("fsai-chat-box").style.display="none"; }

function addMessage(text, cls){
  const m=document.getElementById("fsai-messages");
  const d=document.createElement("div"); d.className=cls; d.textContent=text;
  m.appendChild(d); m.scrollTop=m.scrollHeight;
}
function showTyping(){
  const m=document.getElementById("fsai-messages");
  const t=document.createElement("div"); t.className="typing"; t.id="typing";
  t.innerHTML="<span></span><span></span><span></span>";
  m.appendChild(t); m.scrollTop=m.scrollHeight;
}
function hideTyping(){ const t=document.getElementById("typing"); if(t) t.remove(); }

async function sendMessage(){
  const input=document.getElementById("fsai-input");
  const sendBtn=document.getElementById("fsai-send");
  const msg=input.value.trim();
  if(!msg) return;

  const sug=document.getElementById("fsai-suggestions");
  if(sug) sug.style.display="none";

  addMessage(msg,"user-message");
  input.value=""; input.disabled=true;
  if(sendBtn){ sendBtn.disabled=true; sendBtn.textContent="..."; }
  showTyping();

  const payload={
    channel:"website_chat", session_id:SESSION_ID, visitor_id:VISITOR_ID,
    name:"", email:"", message:msg,
    page_url:window.location.href, user_agent:navigator.userAgent,
    referrer:document.referrer, timestamp:new Date().toISOString()
  };

  const controller=new AbortController();
  const timeout=setTimeout(()=>controller.abort(),90000);

  try{
    const res=await fetch(CONFIG.chatbot.webhook,{
      method:"POST", headers:{"Content-Type":"application/json"},
      body:JSON.stringify(payload), signal:controller.signal
    });
    clearTimeout(timeout);

    const raw=await res.text();
    if(!res.ok) throw new Error(`Webhook ${res.status}: ${raw}`);

    let reply="";
    try{
      const data=JSON.parse(raw);
      reply=data.reply||data.response||data.message||data.text||"";
    }catch(e){
      const mtch=raw.match(/"reply"\s*:\s*"([\s\S]*?)"\s*[,}]/);
      reply=mtch?mtch[1].replace(/\\"/g,'"').replace(/\\n/g,"\n").replace(/\\r/g,"\r").replace(/\\\\/g,"\\"):raw;
    }
    reply=String(reply||"").trim();
    if(!reply) reply="Thanks — I received your message but couldn't generate a full reply. Please try again.";

    hideTyping(); addMessage(reply,"bot-message");
  }catch(err){
    clearTimeout(timeout); hideTyping();
    console.error("FSAI chat error:",err);
    addMessage(
      err.name==="AbortError"
        ? "The assistant is taking longer than usual. Please try again, or email "+CONFIG.email+"."
        : "I'm having trouble connecting right now. Please email "+CONFIG.email+".",
      "bot-message"
    );
  }finally{
    input.disabled=false;
    if(sendBtn){ sendBtn.disabled=false; sendBtn.textContent="Send"; }
    input.focus();
  }
}
