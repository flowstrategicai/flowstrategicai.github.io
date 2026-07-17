const PROJECTS = [
{
id: "universal-autonomous-ai-agent",
title: "Universal Autonomous AI Agent",
category: "AI Agents",
icon: "🧬",
rating: "★★★★★",
summary: "A universal Make.com-powered AI assistant that can help with business strategy, research, automation planning, workflow debugging, content, analysis, decision support, and critical assistance from one simple prompt.",
outcome: [
"One free no-login website test",
"Universal AI assistance for many use cases",
"Premium response structure with practical next steps",
"Upgradeable into a custom business AI employee"
],
features: [
"Public website webhook intake",
"Universal autonomous AI agent prompt",
"Premium structured answers",
"Business, automation, research, content, and debugging support",
"High-stakes safety disclaimers when needed",
"Website localStorage one-test limit",
"Buy/request access CTA after free test",
"Make.com blueprint included"
],
stack: ["Make.com", "AI Agent", "Webhooks", "Website Demo", "Prompt Engineering"],
demo: "",
pageHeadline: "A universal AI assistant visitors can test once for free before buying or requesting a custom build.",
businessImpact: "This system turns the website into a live proof-of-work asset. Visitors can experience a premium AI agent directly on the site, then request a paid build, custom deployment, or ongoing automation support.",
trialCTA: true,
content: `
Overview

The Universal Autonomous AI Agent is designed as a public-facing AI workflow that accepts a visitor prompt from the website, sends it to a Make.com AI Agent scenario, and returns a premium response directly on the page.

  <h2>Why It Sells</h2>
  <ul>
    <li>Visitors do not only read about AI automation — they experience it live.</li>
    <li>The one-free-test offer creates low-friction trust while still protecting the value of the product.</li>
    <li>The call-to-action after the free test naturally moves visitors toward buying, requesting a custom system, or contacting Flow Strategic AI.</li>
  </ul>

  <h2>Best Use Cases</h2>
  <ul>
    <li>Business workflow audits</li>
    <li>Automation opportunity discovery</li>
    <li>Make.com scenario planning and debugging guidance</li>
    <li>Marketing, sales, admin, support, and research assistance</li>
    <li>Premium AI assistant demos for clients</li>
  </ul>

  <h2>Important Limitation</h2>
  <p>The website limit is a browser-based localStorage limit. It is useful for casual public demos, but serious cost control should be enforced server-side using a Make.com datastore, rate limit, CAPTCHA, or backend proxy.</p>
`

},
{
id: "autonomous-b2b-lead-generation",
title: "Autonomous B2B Lead Generation Engine",
category: "Sales AI",
icon: "🚀",
rating: "★★★★★",
summary: "An end-to-end AI outbound system that discovers companies, detects buying signals, enriches decision-maker data, writes personalized outreach, and manages CRM tracking automatically.",
outcome: [
"Automated lead acquisition",
"AI-personalized outreach at scale",
"Reduced manual prospecting",
"Predictable outbound pipeline"
],
features: [
"LinkedIn job signal discovery",
"Meta ad signal discovery",
"Google Maps/business scraping",
"Email extraction and verification",
"Founder/decision-maker enrichment",
"Personalized cold email generation",
"Google Sheets or Supabase CRM tracking",
"Gmail draft or auto-send routing"
],
stack: ["Make.com", "AI Agents", "Apify", "Apollo", "Exa", "Tavily", "Gmail", "Google Sheets"],
demo: "https://www.youtube.com/embed/kKB_HY7aGY0",
pageHeadline: "Autonomous outbound pipeline powered by AI signal detection and Make.com orchestration.",
businessImpact: "This system replaces manual prospecting with a controlled AI workflow that finds, qualifies, researches, and prepares outreach for high-fit business prospects."
},
{
id: "hybrid-signal-to-offer-revenue-engine",
title: "Hybrid Signal-to-Offer Revenue Engine",
category: "Revenue Intelligence",
icon: "🌐",
rating: "★★★★★",
summary: "A revenue-intelligence engine that monitors public buying signals, scores opportunities, creates custom offer bundles, and alerts the team in real time.",
outcome: [
"Detects active buying windows",
"Creates contextual sales assets",
"Prioritizes high-fit opportunities",
"Reduces manual research time"
],
features: [
"Public intent-signal monitoring",
"Tavily and Exa search orchestration",
"Deduplication against existing database",
"Weighted opportunity scoring",
"Custom offer bundle generation",
"Landing page copy generation",
"Executive Gmail alerts",
"Run-log audit trail"
],
stack: ["Make.com", "AI Agents", "Tavily", "Exa", "Google Sheets", "Gmail"],
demo: "",
pageHeadline: "AI-powered market signal detection that turns online pain signals into actionable revenue opportunities.",
businessImpact: "This system helps teams find prospects when they are actively showing signs of operational pain, instead of relying only on static cold lists."
},
{
id: "ai-customer-support-rag-system",
title: "AI Customer Support & FAQ Automation",
category: "Customer Support",
icon: "🤖",
rating: "★★★★★",
summary: "A reusable AI support assistant that answers customer questions, searches an approved knowledge base, remembers conversation context, logs interactions, qualifies visitors, and escalates complex issues.",
outcome: [
"24/7 customer support",
"Reduced repetitive questions",
"Consistent knowledge-base answers",
"Human escalation when needed"
],
features: [
"Website chat widget",
"Make.com webhook integration",
"Knowledge-base search",
"Conversation memory",
"Lead qualification",
"Gmail escalation alerts",
"Google Sheets support logs",
"Client-swappable configuration"
],
stack: ["Make.com", "AI Agent", "Google Sheets", "Gmail", "Webhooks"],
demo: "",
pageHeadline: "A practical customer-support AI assistant grounded in approved business knowledge.",
businessImpact: "This system gives businesses a practical AI support layer that can answer common questions instantly and route sensitive or complex issues to humans."
},
{
id: "ai-lead-qualification-system",
title: "AI Lead Qualification System",
category: "Sales Operations",
icon: "🧠",
rating: "★★★★☆",
summary: "An AI workflow that analyzes form submissions, scores leads, sends personalized replies, and logs everything into a CRM.",
outcome: [
"Faster response time",
"Better lead prioritization",
"Reduced manual review",
"Cleaner CRM records"
],
features: [
"Google Forms trigger",
"AI response analysis",
"HOT/WARM/COLD classification",
"Personalized email replies",
"Owner notification",
"Google Sheets CRM logging"
],
stack: ["Make.com", "Gemini", "Google Forms", "Google Sheets", "Gmail"],
demo: "https://www.youtube.com/embed/YiVzjhvPb1c",
pageHeadline: "AI-powered form intake and lead qualification workflow.",
businessImpact: "This system helps sales teams prioritize prospects and respond faster without manually reading every form submission."
},
{
id: "autonomous-ai-content-engine",
title: "Autonomous AI Content Engine",
category: "Marketing AI",
icon: "📢",
rating: "★★★★☆",
summary: "A multi-platform content automation system that researches topics, generates posts, creates visual prompts, and prepares content for distribution.",
outcome: [
"Consistent online presence",
"Reduced content workload",
"Faster campaign production",
"More content from fewer inputs"
],
features: [
"Trend research",
"AI post generation",
"LinkedIn/Facebook/Instagram copy",
"Image prompt generation",
"Content calendar logging",
"Auto-scheduling support"
],
stack: ["Make.com", "AI Copywriting", "Gemini", "DALL·E", "Social APIs", "Google Sheets"],
demo: "https://www.youtube.com/embed/szXMjJKdp0g",
pageHeadline: "AI content operations engine for consistent multi-platform publishing.",
businessImpact: "This system helps businesses maintain a stronger content presence without manually writing every post."
},
{
id: "youtube-to-linkedin-distribution",
title: "YouTube to LinkedIn Distribution System",
category: "Content Automation",
icon: "🔁",
rating: "★★★☆☆",
summary: "A repurposing workflow that transforms a YouTube video into multiple LinkedIn post angles using AI transcript analysis.",
outcome: [
"One video becomes many posts",
"More leverage from long-form content",
"Reduced manual repurposing",
"Consistent LinkedIn distribution"
],
features: [
"YouTube upload detection",
"Transcript extraction",
"AI content angle generation",
"LinkedIn post drafting",
"Database storage",
"Scheduling support"
],
stack: ["Make.com", "AI", "YouTube", "LinkedIn", "Google Sheets"],
demo: "https://www.youtube.com/embed/D0PS_5BHlME",
pageHeadline: "Turn long-form YouTube videos into professional LinkedIn content automatically.",
businessImpact: "This system helps creators and businesses multiply the value of each video without manually rewriting content."
},
{
id: "crm-lead-capture-automation",
title: "CRM & Lead Capture Automation",
category: "CRM Automation",
icon: "📋",
rating: "★★★★☆",
summary: "A practical automation backbone that captures form submissions, stores data in Google Sheets, sends notifications, and triggers follow-up workflows.",
outcome: [
"Zero manual data entry",
"Faster lead handling",
"Cleaner records",
"Automated notifications"
],
features: [
"Google Forms intake",
"Google Sheets CRM storage",
"Automated Gmail notifications",
"Auto-reply email support",
"Follow-up workflow triggers",
"Simple reporting foundation"
],
stack: ["Make.com", "Google Forms", "Google Sheets", "Gmail"],
demo: "",
pageHeadline: "Simple, reliable CRM automation for form submissions and lead capture.",
businessImpact: "This system creates a clean operational foundation for businesses that need better intake, tracking, and response workflows."
},
{
id: "hybrid-inbound-social-revenue-engine",
title: "Hybrid Inbound Social Revenue Engine",
category: "Inbound Marketing",
icon: "📡",
rating: "★★★★★",
summary: "An advanced inbound engine that combines public buying-signal intelligence with multi-channel content generation.",
outcome: [
"24/7 market listening",
"Automated social content ideas",
"Warm opportunity detection",
"Authority-building content flywheel"
],
features: [
"Public signal monitoring",
"Intent scoring",
"Opportunity creation",
"Offer mapping",
"X/LinkedIn/Facebook/Instagram content generation",
"Image prompt generation",
"Content calendar logging",
"Internal alerts"
],
stack: ["Make.com", "AI Agents", "Tavily", "Exa", "Google Sheets", "Gmail", "DALL·E"],
demo: "",
pageHeadline: "A combined inbound content and market-intelligence engine for B2B growth.",
businessImpact: "This system helps technical agencies stay visible online while also identifying high-intent market opportunities."
}
];

const CATEGORIES = [
{
id: "ai-agents",
name: "AI Agents",
description: "Universal AI assistants, AI employees, autonomous workflows, and public-facing AI agent demos."
},
{
id: "sales-ai",
name: "Sales AI",
description: "AI systems for outbound prospecting, signal detection, enrichment, outreach, and revenue operations."
},
{
id: "customer-support",
name: "Customer Support",
description: "AI support assistants, FAQ bots, escalation workflows, and customer service automation."
},
{
id: "marketing-ai",
name: "Marketing AI",
description: "AI content engines, social media workflows, and inbound content automation systems."
},
{
id: "crm-automation",
name: "CRM Automation",
description: "Lead capture, form processing, CRM logging, notifications, and follow-up workflow automation."
},
{
id: "revenue-intelligence",
name: "Revenue Intelligence",
description: "Systems that detect market signals, score opportunities, and generate offer assets."
},
{
id: "content-automation",
name: "Content Automation",
description: "Repurposing systems that turn long-form content into platform-ready assets."
},
{
id: "inbound-marketing",
name: "Inbound Marketing",
description: "Automated inbound engines that combine market listening and authority-building content."
},
{
id: "sales-operations",
name: "Sales Operations",
description: "Lead qualification, sales response automation, and pipeline support workflows."
}
];

function slugifyCategory(name) {
return String(name || "")
.toLowerCase()
.trim()
.replace(/&/g, "and")
.replace(/[1]+/g, "-")
.replace(/(^-|-$)/g, "");
}

script.js

function $(id) {
return document.getElementById(id);
}

function setText(id, value) {
const el = $(id);
if (el && value !== undefined && value !== null) el.textContent = value;
}

function escapeHtml(value) {
return String(value ?? "")
.replace(/&/g, "&")
.replace(/</g, "<")
.replace(/>/g, ">")
.replace(/"/g, """)
.replace(/'/g, "'");
}

function isConfiguredWebhook(url) {
return Boolean(url && /^https?:///i.test(url) && !String(url).includes("PASTE_YOUR"));
}

function safeLocalGet(key) {
try {
return localStorage.getItem(key);
} catch (e) {
return null;
}
}

function safeLocalSet(key, value) {
try {
localStorage.setItem(key, value);
return true;
} catch (e) {
return false;
}
}

document.addEventListener("DOMContentLoaded", () => {
setText("hero-title", CONFIG.heroTitle);
setText("hero-subtitle", CONFIG.heroSubtitle);
setText("about-text", CONFIG.aboutText);
setText("year", new Date().getFullYear());

renderStats();
renderSystems();
renderVideos();
renderResources();
renderCourse();

buildChat();
initUniversalAgentDemo();
initReveal();
initHeader();
initMenu();
});

function renderStats() {
const statsEl = $("stats");
if (!statsEl || !CONFIG.stats) return;

statsEl.innerHTML = CONFIG.stats.map(s =>     <div class="stat-box reveal">       <div class="stat-num">${escapeHtml(s.number)}</div>       <div class="stat-label">${escapeHtml(s.label)}</div>     </div>  ).join("");
}

function renderSystems() {
const el = $("systems-cards");
if (!el || typeof PROJECTS === "undefined") return;

el.innerHTML = PROJECTS.map(project => {
const projectUrl = project.html?id=${encodeURIComponent(project.id)};
const categoryUrl = category.html?category=${encodeURIComponent(slugifyCategory(project.category))};
const freeDemo = project.trialCTA ? <div class="card-live">● Live free test available</div> : "";

return `
  <article class="card reveal" data-cat="${escapeHtml(project.category)}">
    <div class="card-top">
      <span class="card-icon">${escapeHtml(project.icon)}</span>
      <span class="card-rating">${escapeHtml(project.rating)}</span>
    </div>

    <div class="card-category">${escapeHtml(project.category)}</div>
    <h3>${escapeHtml(project.title)}</h3>
    <p>${escapeHtml(project.summary)}</p>

    <ul>
      ${project.features.slice(0, 5).map(x => `<li>${escapeHtml(x)}</li>`).join("")}
    </ul>

    <div class="card-tags">
      ${project.stack.slice(0, 4).map(x => `<span>${escapeHtml(x)}</span>`).join("")}
    </div>

    ${freeDemo}

    <div class="card-actions">
      <a class="card-link" href="${project.trialCTA ? "#agent-demo" : projectUrl}">${project.trialCTA ? "Try free once →" : "View full system →"}</a>
      <a class="card-link muted-link" href="${categoryUrl}">${escapeHtml(project.category)}</a>
    </div>
  </article>
`;

}).join("");
}

function renderVideos() {
const vEl = $("videos");
if (!vEl || !CONFIG.demos) return;

const vids = CONFIG.demos.filter(v => v.youtubeId);

if (!vids.length) {
vEl.innerHTML = <div class="empty-state reveal">Future live demo videos will appear here after you add YouTube IDs in config.js.</div>;
return;
}

vEl.innerHTML = vids.map(v =>     <div class="video-wrap reveal">       <iframe         src="https://www.youtube.com/embed/${encodeURIComponent(v.youtubeId)}"         title="${escapeHtml(v.title)}"         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"         allowfullscreen         loading="lazy">       </iframe>       <div class="video-title">${escapeHtml(v.title)}</div>     </div>  ).join("");
}

function renderResources() {
const el = $("resources-grid");
if (!el || !CONFIG.resources) return;

if (!CONFIG.resources.length) {
el.innerHTML = <div class="empty-state reveal">Future resources will appear here after you add them in config.js.</div>;
return;
}

el.innerHTML = CONFIG.resources.map(r => {
const external = String(r.link || "").startsWith("http");
return       <article class="resource-card reveal">         <div class="resource-type">${escapeHtml(r.type)}</div>         <h3>${escapeHtml(r.title)}</h3>         <p>${escapeHtml(r.description)}</p>         <a class="mini-cta" href="${escapeHtml(r.link)}" ${external ? 'target="_blank" rel="noopener noreferrer"' : ""}>Get resource</a>       </article>    ;
}).join("");
}

function renderCourse() {
if (!CONFIG.course || !CONFIG.course.enabled) return;

setText("course-title", CONFIG.course.title);
setText("course-subtitle", CONFIG.course.subtitle);
setText("course-status", CONFIG.course.status);
setText("course-headline", CONFIG.course.headline);
setText("course-description", CONFIG.course.description);

const buy = $("course-buy-link");
if (buy && CONFIG.course.buyLink) buy.href = CONFIG.course.buyLink;

const el = $("course-modules");
if (!el || !CONFIG.course.modules) return;

el.innerHTML = CONFIG.course.modules.map(m =>     <article class="course-module reveal">       <h3>${escapeHtml(m.title)}</h3>       <p><strong>Goal:</strong> ${escapeHtml(m.goal)}</p>       <ul>         ${m.lessons.map(l =>
${escapeHtml(l)}
).join("")}       </ul>       <span class="deliverable">Deliverable: ${escapeHtml(m.deliverable)}</span>     </article>   ).join("");
}

function renderContact() {
const cg = $("contact-grid");
if (!cg) return;

const c = CONFIG.socials || {};
const contactData = [
{ i: "📧", l: "Email", v: CONFIG.email, h: mailto:${CONFIG.email} },
{ i: "💬", l: "WhatsApp", v: "Chat Now", h: c.whatsapp },
{ i: "▶️", l: "YouTube", v: "Flow Strategic AI", h: c.youtube },
{ i: "💼", l: "LinkedIn", v: "Connect", h: c.linkedin },
{ i: "𝕏", l: "Twitter/X", v: "Follow", h: c.twitter },
{ i: "📘", l: "Facebook", v: "Follow", h: c.facebook },
{ i: "📸", l: "Instagram", v: "Follow", h: c.instagram }
].filter(x => x.h);

cg.innerHTML = contactData.map(x => {
const isExternal = String(x.h).startsWith("http");
return       <a class="contact-card reveal" href="${escapeHtml(x.h)}" ${isExternal ? 'target="_blank" rel="noopener noreferrer"' : ""}>         <span class="ci">${escapeHtml(x.i)}</span>         <span class="cl">${escapeHtml(x.l)}</span>         <span class="cv">${escapeHtml(x.v)}</span>       </a>    ;
}).join("");
}

document.addEventListener("DOMContentLoaded", renderContact);

function initHeader() {
const header = $("header");
if (!header) return;

const update = () => header.classList.toggle("scrolled", window.scrollY > 40);
update();
window.addEventListener("scroll", update, { passive: true });
}

function initMenu() {
const t =

("nav");
if (!t || !n) return;

t.addEventListener("click", () => {
const isOpen = n.classList.toggle("open");
t.setAttribute("aria-expanded", isOpen ? "true" : "false");
t.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
});

n.querySelectorAll("a").forEach(a => {
a.addEventListener("click", () => {
n.classList.remove("open");
t.setAttribute("aria-expanded", "false");
t.setAttribute("aria-label", "Open menu");
});
});

window.addEventListener("resize", () => {
if (window.innerWidth > 900) {
n.classList.remove("open");
t.setAttribute("aria-expanded", "false");
}
});
}

function initReveal() {
const els = document.querySelectorAll(".card, .video-wrap, .tech-card, .process-step, .stat-box, .contact-card, .service-card, .proof-item, .resource-card, .course-module, .trial-card, .cta-panel, .course-panel, .reveal");
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
}, { threshold: 0.1 });

els.forEach(el => {
el.classList.add("reveal");
obs.observe(el);
});
}

let SESSION_ID = "session_" + Date.now();
let VISITOR_ID = safeLocalGet("fsai_visitor") || "visitor_" + Date.now();
safeLocalSet("fsai_visitor", VISITOR_ID);

function initUniversalAgentDemo() {
if (!CONFIG.universalAgent || !CONFIG.universalAgent.enabled) return;

const input =
("universal-agent-submit");
const buy =

("universal-agent-status");
const output = $("universal-agent-output");

if (!input || !btn || !status || !output) return;

input.placeholder = CONFIG.universalAgent.placeholder || input.placeholder;
input.maxLength = CONFIG.universalAgent.maxPromptChars || 3000;

if (buy && CONFIG.universalAgent.buyLink) buy.href = CONFIG.universalAgent.buyLink;

const used = safeLocalGet(CONFIG.universalAgent.localTrialKey) === "true";
if (used) {
status.textContent = CONFIG.universalAgent.usedMessage;
status.className = "agent-status warning";
output.textContent = "Your free test has already been used in this browser. Click Buy / Request Build to continue.";
btn.textContent = "Free Test Used";
}

btn.addEventListener("click", sendUniversalAgentPrompt);
}

async function sendUniversalAgentPrompt() {
const cfg = CONFIG.universalAgent;
const input =
("universal-agent-submit");
const status =

("universal-agent-output");

if (!input || !btn || !status || !output) return;

if (safeLocalGet(cfg.localTrialKey) === "true") {
status.textContent = cfg.usedMessage;
status.className = "agent-status warning";
output.textContent = "Your free test has already been used in this browser. Click Buy / Request Build to continue.";
return;
}

if (!isConfiguredWebhook(cfg.webhook)) {
status.textContent = cfg.notConfiguredMessage;
status.className = "agent-status error";
output.textContent = "Setup needed: import the Make.com blueprint, copy the new webhook URL, then paste it into CONFIG.universalAgent.webhook in config.js.";
return;
}

const prompt = input.value.trim();

if (!prompt) {
status.textContent = cfg.emptyPromptMessage;
status.className = "agent-status warning";
input.focus();
return;
}

if (prompt.length > (cfg.maxPromptChars || 3000)) {
status.textContent = "Your prompt is too long. Please shorten it and try again.";
status.className = "agent-status warning";
return;
}

btn.disabled = true;
btn.textContent = "Running...";
status.textContent = "Thinking. Your AI agent is preparing a premium response...";
status.className = "agent-status";
output.textContent = "Please wait...";

const payload = {
value: prompt,
prompt: prompt,
user_prompt: prompt,
message: prompt,
channel: "website_universal_agent_trial",
session_id: SESSION_ID,
visitor_id: VISITOR_ID,
page_url: window.location.href,
referrer: document.referrer,
user_agent: navigator.userAgent,
output_format: "plain_text",
user_context: "Public website visitor using the one-free-test Universal AI Agent demo. Return a useful premium answer and invite them to buy/request a custom system at the end when appropriate.",
timestamp: new Date().toISOString()
};

const controller = new AbortController();
const timeout = setTimeout(() => controller.abort(), 120000);

try {
const res = await fetch(cfg.webhook, {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify(payload),
signal: controller.signal
});

clearTimeout(timeout);

const raw = await res.text();

if (!res.ok) {
  throw new Error(`Webhook ${res.status}: ${raw}`);
}

let reply = "";
try {
  const data = JSON.parse(raw);
  reply = data.reply || data.response || data.message || data.text || data.answer || "";
} catch (e) {
  reply = raw;
}

reply = String(reply || "").trim();

if (!reply) {
  reply = "The AI agent received your request but returned an empty response. Please contact Flow Strategic AI to continue.";
}

safeLocalSet(cfg.localTrialKey, "true");

status.textContent = "Free test complete. To keep using this assistant, buy/request access.";
status.className = "agent-status success";
output.textContent = reply + "\n\n—\nWant this AI agent customized for your business? Click Buy / Request Build or email " + CONFIG.email + ".";
btn.textContent = "Free Test Used";

} catch (err) {
clearTimeout(timeout);
console.error("Universal AI Agent error:", err);

status.textContent = err.name === "AbortError"
  ? "The AI agent took too long to respond. Please try again or contact Flow Strategic AI."
  : "Connection issue. Confirm the Make.com scenario is ON and the webhook URL is correct.";

status.className = "agent-status error";
output.textContent = "Error details: " + (err.message || "Unknown error");

btn.disabled = false;
btn.textContent = "Run Free Test";
return;

}

btn.disabled = true;
}

function buildChat() {
if (!CONFIG.chatbot || !CONFIG.chatbot.enabled) return;
if ($("fsai-chat-button")) return;

const btn = document.createElement("button");
btn.id = "fsai-chat-button";
btn.innerHTML = "💬";
btn.setAttribute("aria-label", "Open FSAI Assistant chat");
document.body.appendChild(btn);

const box = document.createElement("div");
box.id = "fsai-chat-box";
box.innerHTML =     <div class="fsai-header">       <div>         <div>${escapeHtml(CONFIG.chatbot.name)}</div>         <div class="status">Online on this site</div>       </div>       <button class="fsai-close" onclick="closeChat()" aria-label="Close chat">×</button>     </div>     <div id="fsai-messages"></div>     <div class="fsai-suggestions" id="fsai-suggestions"></div>     <div class="fsai-input-area">       <input id="fsai-input" placeholder="Ask about AI automation..." autocomplete="off">       <button id="fsai-send">Send</button>     </div>  ;
document.body.appendChild(box);

btn.onclick = openChat;

const send =

("fsai-input");

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
t.innerHTML = "";
m.appendChild(t);
m.scrollTop = m.scrollHeight;
}

function hideTyping() {
const t = $("typing");
if (t) t.remove();
}

async function sendMessage() {
const input =

("fsai-send");
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
value: msg,
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
  reply = data.reply || data.response || data.message || data.text || data.answer || "";
} catch (e) {
  reply = raw;
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
