document.addEventListener("DOMContentLoaded", () => {
  injectBaseContent();
  renderStats();
  renderApexValue();
  renderQualityProof();
  renderPricing();
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
    statsEl.insertAdjacentHTML("beforeend", `<div class="stat-box reveal"><div class="stat-num">${escapeHTML(s.number)}</div><div class="stat-label">${escapeHTML(s.label)}</div></div>`);
  });
}

function renderApexValue(){
  const grid = document.getElementById("value-grid");
  if(!grid || !Array.isArray(CONFIG.apexValue)) return;
  grid.innerHTML = "";
  CONFIG.apexValue.forEach(item => {
    grid.insertAdjacentHTML("beforeend", `<div class="value-card reveal"><div class="value-icon">${escapeHTML(item.icon)}</div><h3>${escapeHTML(item.title)}</h3><p>${escapeHTML(item.text)}</p></div>`);
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
      <a class="card reveal" href="${escapeAttribute(service.href)}" aria-label="${escapeAttribute(service.title)}">
        <div class="card-top"><span class="card-icon">${escapeHTML(service.icon)}</span><span class="card-impact">${escapeHTML(service.impact)}</span></div>
        <h3>${escapeHTML(service.title)}</h3>
        <p>${escapeHTML(service.description)}</p>
        <ul>${bullets}</ul>
        <div class="card-tags">${tags}</div>
        ${live || `<div class="card-cta"><span>${escapeHTML(service.cta)}</span><span>→</span></div>`}
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
          <iframe src="https://www.youtube.com/embed/${encodeURIComponent(v.id)}" title="${escapeAttribute(v.title)}" allowfullscreen loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
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
    grid.insertAdjacentHTML("beforeend", `<div class="course-card reveal"><h4>${escapeHTML(m.title)}</h4><p>${escapeHTML(m.goal)}</p><div class="deliverable">Deliverable: ${escapeHTML(m.deliverable)}</div></div>`);
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
    cg.insertAdjacentHTML("beforeend", `<a class="contact-card reveal" href="${escapeAttribute(x.h)}" ${target}><span class="ci">${escapeHTML(x.i)}</span><span class="cl">${escapeHTML(x.l)}</span><span class="cv">${escapeHTML(x.v)}</span></a>`);
  });
}

  function renderQualityProof(){
  const grid = document.getElementById("quality-grid");
  if(!grid || !Array.isArray(CONFIG.qualityProof)) return;
  grid.innerHTML = "";
  CONFIG.qualityProof.forEach(item => {
    grid.insertAdjacentHTML("beforeend", `<div class="quality-card reveal"><span class="qi">${escapeHTML(item.icon)}</span><h3>${escapeHTML(item.title)}</h3><p>${escapeHTML(item.text)}</p></div>`);
  });
}

function renderPricing(){
  const grid = document.getElementById("pricing-grid");
  if(!grid || !Array.isArray(CONFIG.pricingPlans)) return;
  grid.innerHTML = "";
  CONFIG.pricingPlans.forEach(plan => {
    const bullets = plan.bullets.map(b => `<li>${escapeHTML(b)}</li>`).join("");
    grid.insertAdjacentHTML("beforeend", `
      <div class="pricing-card reveal ${plan.featured ? "featured" : ""}">
        <span class="pricing-tag">${escapeHTML(plan.tag)}</span>
        <h3>${escapeHTML(plan.title)}</h3>
        <div class="pricing-price">${escapeHTML(plan.price)}</div>
        <p>${escapeHTML(plan.subtitle)}</p>
        <ul>${bullets}</ul>
        <a href="#contact" class="btn-primary">Discuss This Option</a>
      </div>
    `);
  });
}

function initHeader(){
  const header = document.getElementById("header");
  window.addEventListener("scroll", () => header.classList.toggle("scrolled", window.scrollY > 40), { passive:true });
}

function initMenu(){
  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("nav");
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
  nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  }));
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
  document.querySelectorAll(".card,.video-wrap,.tech-card,.process-step,.stat-box,.contact-card,.course-card,.value-card,.reveal").forEach(el => {
    el.classList.add("reveal");
    obs.observe(el);
  });
}

let SESSION_ID = sessionStorage.getItem("fsai_session_id");
if(!SESSION_ID){
  SESSION_ID = cryptoRandomId("session");
  sessionStorage.setItem("fsai_session_id", SESSION_ID);
}

let activeAgentPoll = null;
let activeAgentJobId = null;
let activeAgentSubmit = false;

function initAgentDemo(){
  if(!CONFIG.agentDemo.enabled) return;

  const promptEl = document.getElementById("agent-prompt");
  const btn = document.getElementById("agent-submit");
  const status = document.getElementById("agent-status");
  const result = document.getElementById("agent-result");
  const suggestionsWrap = document.getElementById("agent-suggestions");

  restoreAgentConversation();
  renderAgentSuggestions(suggestionsWrap, promptEl);
  refreshAgentDemoLockState(status, result, btn, promptEl);

  btn.addEventListener("click", async () => {
    if(activeAgentSubmit || activeAgentJobId){
      setStatus(status, "warn", "A premium AI request is already running. Please wait for the current response.");
      return;
    }

    const usage = getAgentUsage();
    if(usage.completedTurns >= CONFIG.agentDemo.maxCompletedTurns){
      lockAgentDemo(status, result, btn, promptEl);
      return;
    }

    const prompt = promptEl.value.trim();
    if(!prompt){
      setStatus(status, "bad", "Please enter a prompt first.");
      return;
    }

    if(isSupabaseMissing()){
      setStatus(status, "bad", "Supabase is not configured yet. Add your Supabase anon key in config.js.");
      return;
    }

    if(!CONFIG.agentDemo.makeAsyncWebhook || CONFIG.agentDemo.makeAsyncWebhook.includes("PASTE_YOUR")){
      setStatus(status, "bad", "Make.com webhook is not connected yet. Add your Make.com webhook URL in config.js.");
      return;
    }

    activeAgentSubmit = true;
    btn.disabled = true;
    btn.textContent = "Submitting...";
    result.style.display = "none";
    result.innerHTML = "";

    const conversationId = getOrCreateUUID("fsai_agent_conversation_uuid");
    const visitorId = getOrCreateUUID("fsai_visitor_uuid");
    const sessionId = getSessionId();
    const turnNumber = usage.completedTurns + 1;
    const conversationHistory = getAgentConversation();
    const previousAgentResponse = getPreviousAgentResponse(conversationHistory);
    const startedAtIso = new Date().toISOString();

    saveAgentConversationTurn({
      prompt,
      response: "",
      status: "queued",
      turn_number: turnNumber,
      created_at: startedAtIso
    });

    try{
      const createdJob = await createSupabaseJob({
        prompt,
        conversation_id: conversationId,
        visitor_id: visitorId,
        session_id: sessionId,
        turn_number: turnNumber
      });

      const jobId = createdJob.id;
      activeAgentJobId = jobId;
      updateLastAgentConversationTurn({ id: jobId, status: "queued" });
      updateDebug({ jobId, status: "queued", turnNumber });

      status.className = "agent-status";
      status.innerHTML = `<span class="agent-loader"><span></span><span></span><span></span></span> Thinking... The Apex Executive AI Strategy Engine is starting your premium research job.`;

      await triggerMakeAsync({
        job_id: jobId,
        prompt,
        message: prompt,
        value: prompt,
        text: prompt,
        user_context: "Website visitor using Flow Strategic AI Apex Executive AI Strategy Engine premium two-turn demo.",
        output_format: "Premium practical Markdown answer with clear sections, prioritized recommendations, ROI logic, implementation steps, and next actions.",
        research_mode: "Use tools aggressively when useful. Prioritize depth, accuracy, source quality, and business value.",
        conversation_id: conversationId,
        session_id: sessionId,
        visitor_id: visitorId,
        turn_number: turnNumber,
        previous_agent_response: previousAgentResponse,
        conversation_history: JSON.stringify(conversationHistory, null, 2),
        page_url: window.location.href,
        user_agent: navigator.userAgent,
        referrer: document.referrer,
        timestamp: startedAtIso
      });

      await pollSupabaseJob({
        jobId,
        visitorId,
        sessionId,
        statusEl: status,
        resultEl: result,
        buttonEl: btn,
        promptEl,
        turnNumber,
        startedAt: Date.now()
      });
    }catch(err){
      console.error("Apex Executive AI Strategy Engine submit error:", err);
      const msg = cleanErrorMessage(err.message || "The demo could not start. Your free turn has not been used. Please try again.");
      setStatus(status, "bad", msg);
      updateLastAgentConversationTurn({ status: "failed", error: msg });
      btn.disabled = false;
      btn.textContent = usage.completedTurns === 1 ? "Send Follow-Up" : "Run Free Premium AI Test";
    }finally{
      activeAgentSubmit = false;
      activeAgentJobId = null;
    }
  });
}

function renderAgentSuggestions(suggestionsWrap, promptEl){
  if(!suggestionsWrap || !Array.isArray(CONFIG.agentDemo.suggestions)) return;
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

async function createSupabaseJob(payload){
  const data = await supabaseRpc("create_ai_job", {
    p_prompt: payload.prompt,
    p_conversation_id: payload.conversation_id,
    p_visitor_id: payload.visitor_id,
    p_session_id: payload.session_id,
    p_turn_number: payload.turn_number
  });
  if(!data || !data.id) throw new Error("Supabase did not return a job ID.");
  return data;
}

async function triggerMakeAsync(payload){
  try{
    await fetch(CONFIG.agentDemo.makeAsyncWebhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      keepalive: false
    });
  }catch(err){
    console.warn("Make webhook trigger did not return cleanly. Polling will continue if Make received the job.", err);
  }
}

async function pollSupabaseJob({ jobId, visitorId, sessionId, statusEl, resultEl, buttonEl, promptEl, turnNumber, startedAt }){
  if(activeAgentPoll) clearTimeout(activeAgentPoll);

  let attempt = 0;
  let delay = CONFIG.agentDemo.pollInitialDelayMs || 1400;
  const maxDelay = CONFIG.agentDemo.pollMaxDelayMs || 15000;
  const maxWait = CONFIG.agentDemo.maxLiveWaitMs || 900000;

  return new Promise((resolve, reject) => {
    const tick = async () => {
      attempt += 1;
      try{
        if(Date.now() - startedAt > maxWait){
          activeAgentPoll = null;
          buttonEl.disabled = false;
          buttonEl.textContent = "Run Free Premium AI Test";
          reject(new Error("The premium AI job exceeded the live browser waiting window. Your completed turn has not been counted. Please try a narrower prompt or contact Flow Strategic AI."));
          return;
        }

        const elapsedSeconds = Math.floor((Date.now() - startedAt) / 1000);
        const mins = Math.floor(elapsedSeconds / 60);
        const secs = elapsedSeconds % 60;
        const elapsed = mins > 0 ? `${mins}m ${secs}s` : `${secs}s`;

        statusEl.className = "agent-status";
        statusEl.innerHTML = `<span class="agent-loader"><span></span><span></span><span></span></span> Thinking... Elapsed: ${escapeHTML(elapsed)}. Deep tool-using responses can take 10+ minutes.`;

        const job = await supabaseRpc("get_ai_job", {
          p_job_id: jobId,
          p_visitor_id: visitorId,
          p_session_id: sessionId
        });

        if(!job || job.found === false) throw new Error("The job could not be found. Please try again.");

        updateDebug({
          jobId,
          status: job.status,
          turnNumber,
          updatedAt: job.updated_at,
          processingStartedAt: job.processing_started_at,
          completedAt: job.completed_at
        });

        updateLastAgentConversationTurn({ id: jobId, status: job.status });

        if(job.status === "completed"){
          const finalText = parseWebhookReply(job.response || "");

          if(isAcceptedOnly(finalText)){
            setStatus(statusEl, "bad", "Make.com returned only “Accepted” instead of the final AI response. This did not count as a completed demo turn.");
            resultEl.style.display = "block";
            resultEl.innerHTML = renderMarkdownSafe("**No completed AI answer was received.** Please submit your prompt again.");
            updateLastAgentConversationTurn({ id: jobId, status: "failed", error: "Accepted response ignored." });
            buttonEl.disabled = false;
            buttonEl.textContent = "Run Free Premium AI Test";
            activeAgentPoll = null;
            resolve(job);
            return;
          }

          updateLastAgentConversationTurn({
            id: jobId,
            response: finalText,
            status: "completed",
            completed_at: job.completed_at || new Date().toISOString()
          });

          incrementCompletedTurns();

          resultEl.style.display = "block";
          resultEl.innerHTML = renderMarkdownSafe(finalText);
          renderAgentThread();

          const usage = getAgentUsage();

          if(usage.completedTurns >= CONFIG.agentDemo.maxCompletedTurns){
            setStatus(statusEl, "good", CONFIG.agentDemo.usedMessage);
            buttonEl.disabled = true;
            buttonEl.textContent = "Premium Demo Complete";
            promptEl.disabled = true;
          }else{
            setStatus(statusEl, "good", "Premium AI response complete. You have one follow-up available — answer the AI’s clarifying question or ask for a deeper recommendation.");
            buttonEl.disabled = false;
            buttonEl.textContent = "Send Follow-Up";
            promptEl.disabled = false;
            promptEl.value = "";
            promptEl.placeholder = "Answer the AI’s clarifying question or ask one follow-up.";
            promptEl.focus();
          }

          activeAgentPoll = null;
          resolve(job);
          return;
        }

        if(job.status === "failed" || job.status === "expired"){
          const errorText = job.error || "The AI job failed before completion.";
          setStatus(statusEl, "bad", errorText);
          resultEl.style.display = "block";
          resultEl.innerHTML = renderMarkdownSafe(`**The premium AI job did not complete.**\n\n${errorText}\n\nYour completed demo turn has not been counted. You can try again.`);
          updateLastAgentConversationTurn({ id: jobId, status: job.status, error: errorText });
          buttonEl.disabled = false;
          buttonEl.textContent = "Run Free Premium AI Test";
          activeAgentPoll = null;
          resolve(job);
          return;
        }

        delay = Math.min(maxDelay, Math.round(delay * 1.28));
        activeAgentPoll = setTimeout(tick, delay);
      }catch(err){
        console.warn("Polling error:", err);
        if(attempt <= 5){
          delay = Math.min(maxDelay, Math.round(delay * 1.8));
          activeAgentPoll = setTimeout(tick, delay);
          return;
        }
        activeAgentPoll = null;
        buttonEl.disabled = false;
        buttonEl.textContent = "Run Free Premium AI Test";
        reject(err);
      }
    };
    tick();
  });
}

async function supabaseRpc(functionName, body){
  const url = `${CONFIG.supabase.url.replace(/\/$/,"")}/rest/v1/rpc/${encodeURIComponent(functionName)}`;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "apikey": CONFIG.supabase.anonKey,
      "Authorization": `Bearer ${CONFIG.supabase.anonKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });

  const text = await res.text();

  if(!res.ok){
    let message = text;
    try{
      const parsed = JSON.parse(text);
      message = parsed.message || parsed.error || text;
    }catch(e){}
    throw new Error(message);
  }

  if(!text) return null;
  try{ return JSON.parse(text); }catch(e){ return text; }
}

function updateDebug(info){
  const el = document.getElementById("agent-debug");
  if(!el) return;
  const rows = [];
  if(info.jobId) rows.push(`Job: ${info.jobId}`);
  if(info.status) rows.push(`Status: ${info.status}`);
  if(info.turnNumber) rows.push(`Turn: ${info.turnNumber}`);
  if(info.processingStartedAt) rows.push(`Started: ${new Date(info.processingStartedAt).toLocaleString()}`);
  if(info.completedAt) rows.push(`Completed: ${new Date(info.completedAt).toLocaleString()}`);
  if(info.updatedAt) rows.push(`Updated: ${new Date(info.updatedAt).toLocaleString()}`);
  el.textContent = rows.join(" • ");
}

function refreshAgentDemoLockState(status, result, btn, promptEl){
  const usage = getAgentUsage();
  if(usage.completedTurns >= CONFIG.agentDemo.maxCompletedTurns){
    lockAgentDemo(status, result, btn, promptEl);
    return;
  }
  if(usage.completedTurns === 1){
    setStatus(status, "good", "You have one follow-up available. Use it to answer a clarifying question or ask for a deeper recommendation.");
    btn.textContent = "Send Follow-Up";
  }
}

function lockAgentDemo(status, result, btn, promptEl){
  setStatus(status, "good", CONFIG.agentDemo.usedMessage);
  result.style.display = "block";
  result.innerHTML = renderMarkdownSafe(`
## Your Free Deep Research Demo Is Complete

You have used the two completed premium demo turns.

### Continue In One Of Two Ways

**1. Subscription Access**  
Use the Apex Executive AI Strategy Engine for ongoing research, strategy, automation planning, business analysis, content planning, technical debugging, and decision support.

**2. Done-For-You Private Automation Build**  
Flow Strategic AI can build a private version of this backend for your business or your client. This can include your own Supabase database, Make.com scenario, AI Agent prompt, tools, workflows, CRM integrations, support logic, lead systems, and reporting.

### Request A Quote

Contact Flow Strategic AI and explain:

- your business type,
- what you want to automate,
- your current tools,
- where you lose the most time,
- whether you want subscription access or a private build,
- whether the system is for you or for a client.

[Contact Flow Strategic AI](#contact)
  `);
  btn.disabled = true;
  btn.textContent = "Premium Demo Complete";
  promptEl.disabled = true;
}

function getAgentUsage(){
  const defaults = { completedTurns: 0, lastUpdated: null };
  try{
    const stored = JSON.parse(localStorage.getItem(CONFIG.agentDemo.usageStorageKey) || "null");
    if(stored && typeof stored.completedTurns === "number"){
      return {
        completedTurns: Math.max(0, Math.min(CONFIG.agentDemo.maxCompletedTurns, stored.completedTurns)),
        lastUpdated: stored.lastUpdated || null
      };
    }
  }catch(e){}
  const legacyUsed = localStorage.getItem(CONFIG.agentDemo.oneUseStorageKey) === "true";
  if(legacyUsed){
    const migrated = { completedTurns: 1, lastUpdated: new Date().toISOString() };
    localStorage.setItem(CONFIG.agentDemo.usageStorageKey, JSON.stringify(migrated));
    return migrated;
  }
  return defaults;
}

function incrementCompletedTurns(){
  const usage = getAgentUsage();
  const next = {
    completedTurns: Math.max(0, Math.min(CONFIG.agentDemo.maxCompletedTurns, usage.completedTurns + 1)),
    lastUpdated: new Date().toISOString()
  };
  localStorage.setItem(CONFIG.agentDemo.usageStorageKey, JSON.stringify(next));
  if(next.completedTurns >= 1) localStorage.setItem(CONFIG.agentDemo.oneUseStorageKey, "true");
  return next;
}

function getAgentConversation(){
  try{
    const parsed = JSON.parse(sessionStorage.getItem(CONFIG.agentDemo.conversationStorageKey) || "[]");
    return Array.isArray(parsed) ? parsed : [];
  }catch(e){ return []; }
}

function saveAgentConversation(conversation){
  sessionStorage.setItem(CONFIG.agentDemo.conversationStorageKey, JSON.stringify(conversation));
}

function saveAgentConversationTurn(turn){
  const conversation = getAgentConversation();
  conversation.push(turn);
  saveAgentConversation(conversation);
  renderAgentThread();
}

function updateLastAgentConversationTurn(updates){
  const conversation = getAgentConversation();
  if(conversation.length === 0) return;
  conversation[conversation.length - 1] = { ...conversation[conversation.length - 1], ...updates };
  saveAgentConversation(conversation);
  renderAgentThread();
}

function getPreviousAgentResponse(conversation){
  const completed = conversation.filter(item => item && item.status === "completed" && item.response);
  return completed.length ? completed[completed.length - 1].response || "" : "";
}

function restoreAgentConversation(){
  renderAgentThread();
}

function renderAgentThread(){
  const thread = document.getElementById("agent-thread");
  if(!thread) return;
  const conversation = getAgentConversation();
  thread.innerHTML = "";
  conversation.forEach(turn => {
    const userHtml = escapeHTML(turn.prompt || "");
    const aiHtml = turn.status === "completed"
      ? renderMarkdownSafe(turn.response || "")
      : turn.status === "failed" || turn.status === "expired"
        ? renderMarkdownSafe(`**Not completed:** ${turn.error || "The job failed."}`)
        : `<span class="agent-loader"><span></span><span></span><span></span></span> Thinking...`;
    thread.insertAdjacentHTML("beforeend", `<div class="agent-turn"><div class="agent-turn-user">Turn ${escapeHTML(turn.turn_number || "")}: ${userHtml}</div><div class="agent-turn-ai">${aiHtml}</div></div>`);
  });
}

function setStatus(el, cls, text){
  el.className = `agent-status ${cls || ""}`.trim();
  el.textContent = text;
}

function isAcceptedOnly(value){
  return String(value || "").trim().toLowerCase() === "accepted";
}

function isSupabaseMissing(){
  return !CONFIG.supabase ||
    !CONFIG.supabase.url ||
    !CONFIG.supabase.anonKey ||
    CONFIG.supabase.url.includes("YOUR_SUPABASE") ||
    CONFIG.supabase.anonKey.includes("PASTE_YOUR") ||
    CONFIG.supabase.anonKey.includes("YOUR_SUPABASE");
}

function getSessionId(){
  return SESSION_ID;
}

function getOrCreateUUID(key){
  let existing = localStorage.getItem(key);
  if(existing && isUuid(existing)) return existing;
  existing = crypto.randomUUID();
  localStorage.setItem(key, existing);
  return existing;
}

function cryptoRandomId(prefix){
  if(window.crypto && typeof window.crypto.randomUUID === "function") return `${prefix}_${crypto.randomUUID()}`;
  return `${prefix}_${Date.now()}_${Math.random().toString(36).slice(2)}`;
}

function isUuid(value){
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(String(value));
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
      <div><div>${escapeHTML(CONFIG.chatbot.name)}</div><div class="status">Online</div></div>
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
  d.innerHTML = cls === "bot-message" ? renderMarkdownSafe(text) : escapeHTML(text);
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
    visitor_id: getOrCreateUUID("fsai_visitor_uuid"),
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
  const timeout = setTimeout(() => controller.abort(), 120000);

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
    addMessage(err.name === "AbortError" ? "The assistant is taking longer than usual. Please try again, or email " + CONFIG.email + "." : "I'm having trouble connecting right now. Please email " + CONFIG.email + ".", "bot-message");
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
    marked.setOptions({ breaks: true, gfm: true });
    const dirty = marked.parse(text);
    if(window.DOMPurify){
      return DOMPurify.sanitize(dirty, { ADD_ATTR: ["target", "rel"] });
    }
    return dirty;
  }
  return escapeHTML(text).replace(/\n/g, "<br>");
}

function cleanErrorMessage(value){
  const text = String(value || "").trim();
  if(!text) return "Something went wrong. Please try again.";
  return text
    .replace(/^Error:\s*/i, "")
    .replace(/JSON object requested, multiple \(or no\) rows returned/gi, "A request is already running or could not be found.");
}

function escapeHTML(value){
  return String(value ?? "")
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;")
    .replaceAll("'","&#039;");
}

function escapeAttribute(value){
  return escapeHTML(value).replaceAll("`", "&#096;");
}
