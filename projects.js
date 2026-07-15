const PROJECTS = [
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
    .replace(/<sup id="fnref-a-z0-9" class="footnote-ref"><a href="#fn-a-z0-9" aria-label="Footnote 1">[1]</a></sup>+/g, "-")
    .replace(/(^-|-$)/g, "");
}
