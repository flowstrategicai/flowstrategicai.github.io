/* ========= SAFE DOM HELPERS ========= */
function $(id) {
  return document.getElementById(id);
}

function setText(id, value) {
  const el = $(id);
  if (el && value) el.textContent = value;
}

/* ========= INIT ========= */
document.addEventListener("DOMContentLoaded", () => {
  setText("hero-title", CONFIG.heroTitle);
  setText("hero-subtitle", CONFIG.heroSubtitle);
  setText("about-text", CONFIG.aboutText);
  setText("year", new Date().getFullYear());

  renderStats();
  renderSystems();
  renderVideos();
  renderContact();

  buildChat();
  initReveal();
  initHeader();
  initMenu();
});

/* ========= STATS ========= */
function renderStats() {
  const statsEl = $("stats");
  if (!statsEl || !CONFIG.stats) return;

  statsEl.innerHTML = CONFIG.stats.map(s => `
    <div class="stat-box reveal">
      <div class="stat-num">${s.number}</div>
      <div class="stat-label">${s.label}</div>
    </div>
  `).join("");
}

/* ========= PROJECT CARDS ========= */
function renderSystems() {
  const el = $("systems-cards");
  if (!el || typeof PROJECTS === "undefined") return;

  el.innerHTML = PROJECTS.map(project => `
    <article class="card reveal" data-cat="${project.category}">
      <div class="card-top">
        <span class="card-icon">${project.icon}</span>
        <span class="card-rating">${project.rating}</span>
      </div>

      <div class="card-category">${project.category}</div>
      <h3>${project.title}</h3>
      <p>${project.summary}</p>

      <ul>
        ${project.features.slice(0, 5).map(x => `<li>${x}</li>`).join("")}
      </ul>

      <div class="card-tags">
        ${project.stack.slice(0, 4).map(x => `<span>${x}</span>`).join("")}
      </div>

      <div class="card-actions">
        <a class="card-link" href="project.html?id=${project.id}">View full system →</a>
        <a class="card-link muted-link" href="category.html?category=${slugifyCategory(project.category)}">${project.category}</a>
      </div>
    </article>
  `).join("");
}

/* ========= VIDEOS ========= */
function renderVideos() {
  const vEl = $("videos");
  if (!vEl || !CONFIG.demos) return;

  const vids = [
    { id: CONFIG.demos.leadGeneration, title: "🚀 Autonomous AI Lead Generation" },
    { id: CONFIG.demos.leadQualification, title: "🧠 AI Lead Qualification System" },
    { id: CONFIG.demos.contentEngine, title: "📢 Autonomous AI Content Engine" },
    { id: CONFIG.demos.youtubeDistribution, title: "🔁 YouTube → LinkedIn Distribution" }
  ].filter(v => v.id);

  vEl.innerHTML = vids.map(v => `
    <div class="video-wrap reveal">
      <iframe
        src="https://www.youtube.com/embed/${v.id}"
        title="${v.title}"
        allowfullscreen
        loading="lazy">
      </iframe>
      <div class="video-title">${v.title}</div>
    </div>
  `).join("");
}

/* ========= CONTACT ========= */
function renderContact() {
  const cg = $("contact-grid");
  if (!cg) return;

  const c = CONFIG.socials || {};
  const contactData = [
    { i: "📧", l: "Email", v: CONFIG.email, h: `mailto:${CONFIG.email}` },
    { i: "💬", l: "WhatsApp", v: "Chat Now", h: c.whatsapp },
    { i: "▶️", l: "YouTube", v: "Flow Strategic AI", h: c.youtube },
    { i: "💼", l: "LinkedIn", v: "Connect", h: c.linkedin },
    { i: "𝕏", l: "Twitter/X", v: "Follow", h: c.twitter },
    { i: "📘", l: "Facebook", v: "Follow", h: c.facebook },
    { i: "📸", l: "Instagram", v: "Follow", h: c.instagram }
  ].filter(x => x.h);

  cg.innerHTML = contactData.map(x => {
    const isExternal = x.h.startsWith("http");
    return `
      <a class="contact-card reveal" href="${x.h}" ${isExternal ? 'target="_blank" rel="noopener noreferrer"' : ""}>
        <span class="ci">${x.i}</span>
        <span class="cl">${x.l}</span>
        <span class="cv">${x.v}</span>
      </a>
    `;
  }).join("");
}

/* ========= HEADER SCROLL ========= */
function initHeader() {
  const header = $("header");
  if (!header) return;

  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 40);
  });
}

/* ========= MOBILE MENU ========= */
function initMenu() {
  const t = $("menu-toggle");
  const n = $("nav");
  if (!t || !n) return;

  t.addEventListener("click", () => {
    const isOpen = n.classList.toggle("open");
    t.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  n.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => n.classList.remove("open"));
  });
}

/* ========= SCROLL REVEAL ========= */
function initReveal() {
  const els = document.querySelectorAll(".card, .video-wrap, .tech-card, .process-step, .stat-box, .contact-card, .service-card, .proof-item, .reveal");
  if (!els.length) return;

  if (!("IntersectionObserver" in window)) {
    els.forEach(el => el.classList.add("visible"));
    return;
  }

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  els.forEach(el => {
    el.classList.add("reveal");
    obs.observe(el);
  });
}

/* ========= CHATBOT ========= */
let SESSION_ID = "session_" + Date.now();
let VISITOR_ID = localStorage.getItem("fsai_visitor") || "visitor_" + Date.now();
localStorage.setItem("fsai_visitor", VISITOR_ID);

function buildChat() {
  if (!CONFIG.chatbot || !CONFIG.chatbot.enabled) return;
  if ($("fsai-chat-button")) return;

  const btn = document.createElement("button");
  btn.id = "fsai-chat-button";
  btn.innerHTML = "💬";
  btn.setAttribute("aria-label", "Open chat");
  document.body.appendChild(btn);

  const box = document.createElement("div");
  box.id = "fsai-chat-box";
  box.innerHTML = `
    <div class="fsai-header">
      <div>
        <div>${CONFIG.chatbot.name}</div>
        <div class="status">Online</div>
      </div>
      <button class="fsai-close" onclick="closeChat()" aria-label="Close chat">×</button>
    </div>
    <div id="fsai-messages"></div>
    <div class="fsai-suggestions" id="fsai-suggestions"></div>
    <div class="fsai-input-area">
      <input id="fsai-input" placeholder="Ask about AI automation..." autocomplete="off">
      <button id="fsai-send">Send</button>
    </div>
  `;
  document.body.appendChild(box);

  btn.onclick = openChat;

  const send = $("fsai-send");
  const input = $("fsai-input");

  if (send) send.onclick = sendMessage;
  if (input) {
    input.addEventListener("keypress", e => {
      if (e.key === "Enter") sendMessage();
    });
  }

  addMessage(CONFIG.chatbot.welcomeMessage, "bot-message");

  const sug = $("fsai-suggestions");
  if (sug && CONFIG.chatbot.suggestions) {
    CONFIG.chatbot.suggestions.forEach(s => {
      const b = document.createElement("button");
      b.textContent = s;
      b.onclick = () => {
        const input = $("fsai-input");
        if (input) {
          input.value = s;
          sendMessage();
        }
      };
      sug.appendChild(b);
    });
  }
}

function openChat() {
  const box = $("fsai-chat-box");
  if (box) box.style.display = "flex";

  const input = $("fsai-input");
  if (input) setTimeout(() => input.focus(), 100);
}

function closeChat() {
  const box = $("fsai-chat-box");
  if (box) box.style.display = "none";
}

function addMessage(text, cls) {
  const m = $("fsai-messages");
  if (!m) return;

  const d = document.createElement("div");
  d.className = cls;
  d.textContent = text;
  m.appendChild(d);
  m.scrollTop = m.scrollHeight;
}

function showTyping() {
  const m = $("fsai-messages");
  if (!m) return;

  const t = document.createElement("div");
  t.className = "typing";
  t.id = "typing";
  t.innerHTML = "<span></span><span></span><span></span>";
  m.appendChild(t);
  m.scrollTop = m.scrollHeight;
}

function hideTyping() {
  const t = $("typing");
  if (t) t.remove();
}

async function sendMessage() {
  const input = $("fsai-input");
  const sendBtn = $("fsai-send");
  if (!input) return;

  const msg = input.value.trim();
  if (!msg) return;

  const sug = $("fsai-suggestions");
  if (sug) sug.style.display = "none";

  addMessage(msg, "user-message");
  input.value = "";
  input.disabled = true;

  if (sendBtn) {
    sendBtn.disabled = true;
    sendBtn.textContent = "...";
  }

  showTyping();

  const payload = {
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
  };

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 90000);

  try {
    const res = await fetch(CONFIG.chatbot.webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: controller.signal
    });

    clearTimeout(timeout);

    const raw = await res.text();
    if (!res.ok) throw new Error(`Webhook ${res.status}: ${raw}`);

    let reply = "";

    try {
      const data = JSON.parse(raw);
      reply = data.reply || data.response || data.message || data.text || "";
    } catch (e) {
      const m = raw.match(/"reply"\s*:\s*"([\s\S]*?)"\s*[,}]/);
      reply = m
        ? m[1]
            .replace(/\\"/g, '"')
            .replace(/\\n/g, "\n")
            .replace(/\\r/g, "\r")
            .replace(/\\\\/g, "\\")
        : raw;
    }

    reply = String(reply || "").trim();

    if (!reply) {
      reply = "Thanks — I received your message. Please share what you want to automate, or email " + CONFIG.email + ".";
    }

    hideTyping();
    addMessage(reply, "bot-message");

  } catch (err) {
    clearTimeout(timeout);
    hideTyping();
    console.error("FSAI chat error:", err);

    addMessage(
      err.name === "AbortError"
        ? "The assistant is taking longer than usual. Please try again, or email " + CONFIG.email + "."
        : "I'm having trouble connecting right now. Please email " + CONFIG.email + ".",
      "bot-message"
    );
  } finally {
    input.disabled = false;

    if (sendBtn) {
      sendBtn.disabled = false;
      sendBtn.textContent = "Send";
    }

    input.focus();
  }
}
