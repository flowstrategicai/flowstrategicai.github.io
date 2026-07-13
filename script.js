/* ========= INJECT CONFIG-DRIVEN CONTENT ========= */
document.addEventListener("DOMContentLoaded", () => {

  // Hero
  document.getElementById("hero-title").textContent = CONFIG.heroTitle;
  document.getElementById("hero-subtitle").textContent = CONFIG.heroSubtitle;
  document.getElementById("about-text").textContent = CONFIG.aboutText;
  document.getElementById("year").textContent = new Date().getFullYear();

  // Stats
  const statsEl = document.getElementById("stats");
  CONFIG.stats.forEach(s => {
    statsEl.innerHTML += `<div class="stat-box reveal"><div class="stat-num">${s.number}</div><div class="stat-label">${s.label}</div></div>`;
  });

  // Videos
  const vids = [
    { id: CONFIG.demos.leadGeneration, title: "🚀 Autonomous AI Lead Generation" },
    { id: CONFIG.demos.leadQualification, title: "🧠 AI Lead Qualification System" },
    { id: CONFIG.demos.contentEngine, title: "📢 Autonomous AI Content Engine" },
    { id: CONFIG.demos.youtubeDistribution, title: "🔁 YouTube → LinkedIn Distribution" }
  ];
  const vEl = document.getElementById("videos");
  vids.forEach(v => {
    vEl.innerHTML += `
      <div class="video-wrap reveal">
        <iframe src="https://www.youtube.com/embed/${v.id}" allowfullscreen loading="lazy"></iframe>
        <div class="video-title">${v.title}</div>
      </div>`;
  });

  // Contact cards
  const c = CONFIG.socials;
  const contactData = [
    { i:"📧", l:"Email", v:CONFIG.email, h:`mailto:${CONFIG.email}` },
    { i:"💬", l:"WhatsApp", v:"Chat Now", h:c.whatsapp },
    { i:"▶️", l:"YouTube", v:"Flow Strategic AI", h:c.youtube },
    { i:"💼", l:"LinkedIn", v:"Connect", h:c.linkedin },
    { i:"𝕏", l:"Twitter/X", v:"Follow", h:c.twitter },
    { i:"📘", l:"Facebook", v:"Follow", h:c.facebook }
  ];
  const cg = document.getElementById("contact-grid");
  contactData.forEach(x => {
    cg.innerHTML += `<a class="contact-card reveal" href="${x.h}" target="_blank">
      <span class="ci">${x.i}</span><span class="cl">${x.l}</span><span class="cv">${x.v}</span></a>`;
  });

  buildChat();
  initReveal();
  initHeader();
  initMenu();
});

/* ========= HEADER SCROLL ========= */
function initHeader(){
  window.addEventListener("scroll", () => {
    document.getElementById("header").classList.toggle("scrolled", window.scrollY > 40);
  });
}

/* ========= MOBILE MENU ========= */
function initMenu(){
  const t = document.getElementById("menu-toggle");
  const n = document.getElementById("nav");
  t.addEventListener("click", () => n.classList.toggle("open"));
  n.querySelectorAll("a").forEach(a => a.addEventListener("click", () => n.classList.remove("open")));
}

/* ========= SCROLL REVEAL ========= */
function initReveal(){
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add("visible"); obs.unobserve(e.target);} });
  }, { threshold: .12 });
  document.querySelectorAll(".card, .video-wrap, .tech-card, .process-step, .stat-box, .contact-card, .reveal")
    .forEach(el => { el.classList.add("reveal"); obs.observe(el); });
}

/* ========= CHATBOT ========= */
let SESSION_ID = "session_" + Date.now();
let VISITOR_ID = localStorage.getItem("fsai_visitor") || "visitor_" + Date.now();
localStorage.setItem("fsai_visitor", VISITOR_ID);

function buildChat(){
  if(!CONFIG.chatbot.enabled) return;

  const btn = document.createElement("button");
  btn.id = "fsai-chat-button";
  btn.innerHTML = "💬";
  btn.setAttribute("aria-label","Open chat");
  document.body.appendChild(btn);

  const box = document.createElement("div");
  box.id = "fsai-chat-box";
  box.innerHTML = `
    <div class="fsai-header">
      <div>
        <div>${CONFIG.chatbot.name}</div>
        <div class="status">Online</div>
      </div>
      <span class="fsai-close" onclick="closeChat()">×</span>
    </div>
    <div id="fsai-messages"></div>
    <div class="fsai-suggestions" id="fsai-suggestions"></div>
    <div class="fsai-input-area">
      <input id="fsai-input" placeholder="Ask about our AI systems..." autocomplete="off">
      <button id="fsai-send">Send</button>
    </div>`;
  document.body.appendChild(box);

  btn.onclick = openChat;
  document.getElementById("fsai-send").onclick = sendMessage;
  document.getElementById("fsai-input").addEventListener("keypress", e => {
    if(e.key === "Enter") sendMessage();
  });

  addMessage(CONFIG.chatbot.welcomeMessage, "bot-message");

  const sug = document.getElementById("fsai-suggestions");
  CONFIG.chatbot.suggestions.forEach(s => {
    const b = document.createElement("button");
    b.textContent = s;
    b.onclick = () => { document.getElementById("fsai-input").value = s; sendMessage(); };
    sug.appendChild(b);
  });
}

function openChat(){ document.getElementById("fsai-chat-box").style.display = "flex"; }
function closeChat(){ document.getElementById("fsai-chat-box").style.display = "none"; }

function addMessage(text, cls){
  const m = document.getElementById("fsai-messages");
  const d = document.createElement("div");
  d.className = cls;
  d.textContent = text;
  m.appendChild(d);
  m.scrollTop = m.scrollHeight;
}

function showTyping(){
  const m = document.getElementById("fsai-messages");
  const t = document.createElement("div");
  t.className = "typing"; t.id = "typing";
  t.innerHTML = "<span></span><span></span><span></span>";
  m.appendChild(t);
  m.scrollTop = m.scrollHeight;
}
function hideTyping(){ const t = document.getElementById("typing"); if(t) t.remove(); }

async function sendMessage(){
  const input = document.getElementById("fsai-input");
  const msg = input.value.trim();
  if(!msg) return;

  const sug = document.getElementById("fsai-suggestions");
  if(sug) sug.style.display = "none";

  addMessage(msg, "user-message");
  input.value = "";
  showTyping();

  try {
    const res = await fetch(CONFIG.chatbot.webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        channel: "website_chat",
        session_id: SESSION_ID,
        visitor_id: VISITOR_ID,
        name: "",
        email: "",
        message: msg,
        page_url: window.location.href,
        user_agent: navigator.userAgent,
        referrer: document.referrer,
        timestamp: new Date().toISOString()
      })
    });

    hideTyping();
    const data = await res.json();
    addMessage(data.reply || "Thanks! We'll get back to you shortly.", "bot-message");
  } catch(err){
    hideTyping();
    addMessage("I'm having trouble connecting right now. Please email " + CONFIG.email, "bot-message");
  }
}
