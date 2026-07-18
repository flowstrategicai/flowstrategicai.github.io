document.addEventListener("DOMContentLoaded", () => {
  injectBaseContent();
  renderStats();
  renderServices();
  renderVideos();
  renderCourse();
  renderContactCards();
  buildChat();
  initAgentDemo();
  initReveal();
  initHeader();
  initMenu();
});

function injectBaseContent(){
  document.getElementById("hero-title").textContent = CONFIG.heroTitle;
  document.getElementById("hero-subtitle").textContent = CONFIG.heroSubtitle;
  document.getElementById("about-text").textContent = CONFIG.aboutText;
  document.getElementById("year").textContent = new Date().getFullYear();
}

function renderStats(){
  const statsEl = document.getElementById("stats");
  statsEl.innerHTML = "";
  CONFIG.stats.forEach(s => {
    statsEl.insertAdjacentHTML("beforeend", `
      <div class="stat-box reveal">
        <div class="stat-num">${escapeHTML(s.number)}</div>
        <div class="stat-label">${escapeHTML(s.label)}</div>
      </div>
    `);
  });
}

function renderServices(){
  const wrap = document.getElementById("service-cards");
  wrap.innerHTML = "";

  CONFIG.services.forEach(service => {
    const bullets = service.bullets.map(b => `<li>${escapeHTML(b)}</li>`).join("");
    const tags = service.tags.map(t => `<span>${escapeHTML(t)}</span>`).join("");
    const live = service.live ? `<span class="card-live">● ${escapeHTML(service.cta)}</span>` : "";

    wrap.insertAdjacentHTML("beforeend", `
      <a class="card reveal" href="${service.href}" aria-label="${escapeHTML(service.title)}">
        <div class="card-top">
          <span class="card-icon">${service.icon}</span>
          <span class="card-impact">${escapeHTML(service.impact)}</span>
        </div>
        <h3>${escapeHTML(service.title)}</h3>
        <p>${escapeHTML(service.description)}</p>
        <ul>${bullets}</ul>
        <div class="card-tags">${tags}</div>
        ${live || `
          <div class="card-cta">
            <span>${escapeHTML(service.cta)}</span>
            <span>→</span>
          </div>
        `}
      </a>
    `);
  });
}

function renderVideos(){
  const vEl = document.getElementById("videos");
  vEl.innerHTML = "";

  CONFIG.demos.forEach(v => {
    vEl.insertAdjacentHTML("beforeend", `
      <div class="video-wrap reveal">
        <div class="video-frame">
          <iframe
            src="https://www.youtube.com/embed/${encodeURIComponent(v.id)}"
            title="${escapeHTML(v.title)}"
            allowfullscreen
            loading="lazy"
            referrerpolicy="strict-origin-when-cross-origin"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
          </iframe>
        </div>
        <div class="video-title">${escapeHTML(v.title)}</div>
      </div>
    `);
  });
}

function renderCourse(){
  const grid = document.getElementById("course-grid");
  grid.innerHTML = "";

  CONFIG.courseModules.forEach(m => {
    grid.insertAdjacentHTML("beforeend", `
      <div class="course-card reveal">
        <h4>${escapeHTML(m.title)}</h4>
        <p>${escapeHTML(m.goal)}</p>
        <div class="deliverable">Deliverable: ${escapeHTML(m.deliverable)}</div>
      </div>
    `);
  });
}

function renderContactCards(){
  const c = CONFIG.socials;
  const contactData = [
    { i:"📧", l:"Email", v:CONFIG.email, h:`mailto:${CONFIG.email}` },
    { i:"💬", l:"WhatsApp", v:"Chat Now", h:c.whatsapp },
    { i:"▶️", l:"YouTube", v:"Watch Demos", h:c.youtube },
    { i:"💼", l:"LinkedIn", v:"Connect", h:c.linkedin },
    { i:"📸", l:"Instagram", v:"Follow", h:c.instagram },
    { i:"📚", l:"Resources", v:"AI Employee Course", h:c.resources },
    { i:"𝕏", l:"Twitter/X", v:"Follow", h:c.twitter },
    { i:"📘", l:"Facebook", v:"Follow", h:c.facebook }
  ];

  const cg = document.getElementById("contact-grid");
  cg.innerHTML = "";

  contactData.forEach(x => {
    const target = x.h.startsWith("#") || x.h.startsWith("mailto:") ? "" : `target="_blank" rel="noopener"`;
    cg.insertAdjacentHTML("beforeend", `
      <a class="contact-card reveal" href="${x.h}" ${target}>
        <span class="ci">${x.i}</span>
        <span class="cl">${escapeHTML(x.l)}</span>
        <span class="cv">${escapeHTML(x.v)}</span>
      </a>
    `);
  });
}

function initHeader(){
  const header = document.getElementById("header");
  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 40);
  }, { passive:true });
}

function initMenu(){
  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("nav");

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function initReveal(){
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if(e.isIntersecting){
        e.target.classList.add("visible");
        obs.unobserve(e.target);
      }
    });
  }, { threshold:.12 });

  document.querySelectorAll(".card, .video-wrap, .tech-card, .process-step, .stat-box, .contact-card, .course-card, .reveal")
    .forEach(el => {
      el.classList.add("reveal");
      obs.observe(el);
    });
}

function initAgentDemo(){
  if(!CONFIG.agentDemo.enabled) return;

  const promptEl = document.getElementById("agent-prompt");
  const btn = document.getElementById("agent-submit");
  const status = document.getElementById("agent-status");
  const result = document.getElementById("agent-result");
  const suggestionsWrap = document.getElementById("agent-suggestions");

  if(suggestionsWrap && Array.isArray(CONFIG.agentDemo.suggestions)){
    suggestionsWrap.innerHTML = "";
    CONFIG.agentDemo.suggestions.forEach(suggestion => {
      const chip = document.createElement("button");
      chip.type = "button";
      chip.textContent = suggestion;
      chip.addEventListener("click", () => {
        promptEl.value = suggestion;
        promptEl.focus();
      });
      suggestionsWrap.appendChild(chip);
    });
  }

  const used = localStorage.getItem(CONFIG.agentDemo.oneUseStorageKey) === "true";

  if(used){
    lockAgentDemo(status, result, btn);
  }

  btn.addEventListener("click", async () => {
    const alreadyUsed = localStorage.getItem(CONFIG.agentDemo.oneUseStorageKey) === "true";

    if(alreadyUsed){
      lockAgentDemo(status, result, btn);
      return;
    }

    const prompt = promptEl.value.trim();

    if(!prompt){
      status.className = "agent-status bad";
      status.textContent = "Please enter a prompt first.";
      return;
    }

    if(!CONFIG.agentDemo.webhook || CONFIG.agentDemo.webhook.includes("PASTE_YOUR")){
      status.className = "agent-status bad";
      status.textContent = "Demo webhook is not connected yet. Paste your Make.com webhook URL into CONFIG.agentDemo.webhook in config.js.";
      return;
    }

    btn.disabled = true;
    btn.textContent = "Running premium analysis...";
    status.className = "agent-status";
    result.style.display = "none";
    result.innerHTML = "";

    const startedAt = Date.now();

    const updateStatus = () => {
      const elapsedSeconds = Math.floor((Date.now() - startedAt) / 1000);
      const mins = Math.floor(elapsedSeconds / 60);
      const secs = elapsedSeconds % 60;
      const elapsed = mins > 0 ? `${mins}m ${secs}s` : `${secs}s`;

      status.textContent = `The Apex Executive AI Strategy Engine is working. Elapsed: ${elapsed}. This can take up to 10 minutes because deeper research, reasoning, tool use, and premium-quality analysis take longer. Please keep this tab open.`;
    };

    updateStatus();
    const statusTimer = setInterval(updateStatus, 1000);

    const payload = {
      prompt,
      message: prompt,
      value: prompt,
      user_context: "Website visitor using Flow Strategic AI one-free-test Apex Executive AI Strategy Engine demo.",
      output_format: "Premium practical answer in Markdown with clear sections, prioritized recommendations, and next steps.",
      research_mode: "Use tools when useful. Prioritize depth, accuracy, and business value.",
      conversation_id: getOrCreateId("fsai_agent_conversation", "conversation"),
      session_id: getSessionId(),
      visitor_id: getOrCreateId("fsai_visitor", "visitor"),
      page_url: window.location.href,
      user_agent: navigator.userAgent,
      referrer: document.referrer,
      timestamp: new Date().toISOString()
    };

    const AGENT_DEMO_TIMEOUT_MS = 660000;
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), AGENT_DEMO_TIMEOUT_MS);

    try{
      const res = await fetch(CONFIG.agentDemo.webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        signal: controller.signal
      });

      clearTimeout(timeout);
      clearInterval(statusTimer);

      const raw = await res.text();

      if(!res.ok) throw new Error(`Webhook ${res.status}: ${raw}`);

      const reply = parseWebhookReply(raw);
      const finalText = reply || raw || "The agent responded, but no readable text was returned.";

      localStorage.setItem(CONFIG.agentDemo.oneUseStorageKey, "true");

      status.className = "agent-status good";
      status.textContent = "Premium AI test complete. Want this built into your business? Contact Flow Strategic AI below.";

      result.style.display = "block";
      result.innerHTML = renderMarkdownSafe(finalText);

      btn.textContent = "Free Test Used";
      btn.disabled = true;
    }catch(err){
      clearTimeout(timeout);
      clearInterval(statusTimer);

      console.error("Apex Executive AI Strategy Engine demo error:", err);

      status.className = "agent-status bad";

      status.textContent = err.name === "AbortError"
        ? "The AI system reached the maximum live demo processing window before a final response was returned. Your free test has not been used. You can try again with a narrower prompt or contact Flow Strategic AI for a full premium implementation."
        : "The demo could not connect right now. Your free test has not been used. Please try again or contact Flow Strategic AI.";

      btn.disabled = false;
      btn.textContent = "Run Free Premium AI Test";
    }
  });
}

function lockAgentDemo(status, result, btn){
  status.className = "agent-status good";
  status.textContent = CONFIG.agentDemo.usedMessage;
  result.style.display = "block";
  result.innerHTML = renderMarkdownSafe(
    "**Next step:** Contact Flow Strategic AI to build a custom AI strategy engine, automation workflow, CRM system, support assistant, content engine, lead generation system, or Make.com automation around your exact business."
  );
  btn.disabled = true;
  btn.textContent = "Free Test Used";
}

let SESSION_ID = "session_" + Date.now() + "_" + Math.random().toString(36).slice(2);

function getSessionId(){
  return SESSION_ID;
}

function getOrCreateId(key, prefix){
  let existing = localStorage.getItem(key);
  if(!existing){
    existing = prefix + "_" + Date.now() + "_" + Math.random().toString(36).slice(2);
    localStorage.setItem(key, existing);
  }
  return existing;
}

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
        <div>${escapeHTML(CONFIG.chatbot.name)}</div>
        <div class="status">Online</div>
      </div>
      <span class="fsai-close" onclick="closeChat()" aria-label="Close chat">×</span>
    </div>
    <div id="fsai-messages"></div>
    <div class="fsai-suggestions" id="fsai-suggestions"></div>
    <div class="fsai-input-area">
      <input id="fsai-input" placeholder="Ask about our AI systems..." autocomplete="off" />
      <button id="fsai-send" type="button">Send</button>
    </div>
  `;
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
    b.type = "button";
    b.textContent = s;
    b.onclick = () => {
      document.getElementById("fsai-input").value = s;
      sendMessage();
    };
    sug.appendChild(b);
  });
}

function openChat(){
  const box = document.getElementById("fsai-chat-box");
  if(box) box.style.display = "flex";
}

function closeChat(){
  const box = document.getElementById("fsai-chat-box");
  if(box) box.style.display = "none";
}

function addMessage(text, cls){
  const m = document.getElementById("fsai-messages");
  if(!m) return;

  const d = document.createElement("div");
  d.className = cls;

  if(cls === "bot-message"){
    d.innerHTML = renderMarkdownSafe(text);
  }else{
    d.textContent = text;
  }

  m.appendChild(d);
  m.scrollTop = m.scrollHeight;
}

function showTyping(){
  const m = document.getElementById("fsai-messages");
  if(!m) return;

  const t = document.createElement("div");
  t.className = "typing";
  t.id = "typing";
  t.innerHTML = "<span></span><span></span><span></span>";
  m.appendChild(t);
  m.scrollTop = m.scrollHeight;
}

function hideTyping(){
  const t = document.getElementById("typing");
  if(t) t.remove();
}

async function sendMessage(){
  const input = document.getElementById("fsai-input");
  const sendBtn = document.getElementById("fsai-send");
  const msg = input.value.trim();

  if(!msg) return;

  const sug = document.getElementById("fsai-suggestions");
  if(sug) sug.style.display = "none";

  addMessage(msg, "user-message");
  input.value = "";
  input.disabled = true;
  sendBtn.disabled = true;
  sendBtn.textContent = "...";
  showTyping();

  const payload = {
    channel: "website_chat",
    session_id: getSessionId(),
    visitor_id: getOrCreateId("fsai_visitor", "visitor"),
    name: "",
    email: "",
    message: msg,
    prompt: msg,
    value: msg,
    page_url: window.location.href,
    user_agent: navigator.userAgent,
    referrer: document.referrer,
    timestamp: new Date().toISOString()
  };

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 90000);

  try{
    const res = await fetch(CONFIG.chatbot.webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: controller.signal
    });

    clearTimeout(timeout);
    const raw = await res.text();

    if(!res.ok) throw new Error(`Webhook ${res.status}: ${raw}`);

    const reply = parseWebhookReply(raw);

    hideTyping();
    addMessage(reply || "Thanks — I received your message but could not generate a full reply. Please try again.", "bot-message");
  }catch(err){
    clearTimeout(timeout);
    hideTyping();
    console.error("FSAI chat error:", err);

    addMessage(
      err.name === "AbortError"
        ? "The assistant is taking longer than usual. Please try again, or email " + CONFIG.email + "."
        : "I'm having trouble connecting right now. Please email " + CONFIG.email + ".",
      "bot-message"
    );
  }finally{
    input.disabled = false;
    sendBtn.disabled = false;
    sendBtn.textContent = "Send";
    input.focus();
  }
}

function parseWebhookReply(raw){
  if(raw == null) return "";

  const text = String(raw);

  try{
    const data = JSON.parse(text);

    if(typeof data === "string") return data;
    if(data.reply) return String(data.reply);
    if(data.response) return String(data.response);
    if(data.message) return String(data.message);
    if(data.text) return String(data.text);
    if(data.answer) return String(data.answer);
    if(data.output) return String(data.output);
    if(data.result) return String(data.result);

    return JSON.stringify(data, null, 2);
  }catch(e){
    return text;
  }
}

function renderMarkdownSafe(markdownText){
  const text = String(markdownText ?? "");

  if(window.marked && typeof window.marked.parse === "function"){
    marked.setOptions({
      breaks: true,
      gfm: true
    });

    const dirty = marked.parse(text);

    if(window.DOMPurify){
      return DOMPurify.sanitize(dirty, {
        ADD_ATTR: ["target", "rel"]
      });
    }

    return dirty;
  }

  return escapeHTML(text).replace(/\n/g, "<br>");
}

function escapeHTML(value){
  return String(value ?? "")
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;")
    .replaceAll("'","&#039;");
}
