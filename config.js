const CONFIG = {
  companyName: "Flow Strategic AI",
  shortName: "FSAI",
  logo: "assets/logo.png",

  heroTitle: "Deep Research AI Systems That Find Decision-Grade Answers",
  heroSubtitle: "I design AI agents and Make.com workflows that perform deep research, analyze business context, verify information, generate implementation-ready recommendations, automate operations, and turn complex questions into clear strategic action.",

  aboutText: "Flow Strategic AI designs and builds deep research AI systems, executive analysis engines, and autonomous automation workflows for small businesses, coaches, teachers, creators, consultants, agencies, SaaS founders, local service businesses, and online entrepreneurs. The goal is simple: replace repetitive manual work and shallow decision-making with self-operating systems that research thoroughly, reason carefully, generate consistent leads, respond faster, reduce errors, and create measurable business leverage.",

  email: "flowstrategicai@gmail.com",

  supabase: {
    url: "https://glhoepoevinchtanikxo.supabase.co",
    anonKey: "sb_publishable_Wr_PAC1uuBOkZwdpHYNUYA_1-WONH_6"
  },

  socials: {
    whatsapp: "https://wa.me/254723025978",
    youtube: "https://www.youtube.com/@flowstrategicAI",
    linkedin: "https://www.linkedin.com/in/flowstrategicai/",
    instagram: "https://www.instagram.com/flowstrategicai_official/",
    twitter: "https://x.com/flowstrategicai",
    facebook: "https://facebook.com/flowstrategicai",
    resources: "#resources"
  },

  chatbot: {
    enabled: true,
    name: "FSAI Assistant",
    welcomeMessage: "👋 Welcome to Flow Strategic AI.\n\nI'm the FSAI Assistant. I can answer questions about AI automation systems, deep research engines, custom backend workflows, and how to get started.\n\nWhat would you like to automate or analyze?",
    webhook: "https://hook.eu1.make.com/3yzv81aurdt9on9uclfelz382cfu4obb",
    suggestions: [
      "Deep Research AI",
      "AI Lead Generation",
      "Customer Support AI",
      "CRM Automation",
      "Custom Integration"
    ]
  },

  agentDemo: {
    enabled: true,
    makeAsyncWebhook: "https://hook.eu1.make.com/n6h2frvlnti1ik3an4r3neyq2lvn8k89",
    usageStorageKey: "fsai_apex_strategy_engine_usage_v3",
    oneUseStorageKey: "fsai_universal_agent_free_test_used",
    conversationStorageKey: "fsai_apex_strategy_engine_conversation_v3",
    maxCompletedTurns: 2,
    maxLiveWaitMs: 900000,
    pollInitialDelayMs: 1400,
    pollMaxDelayMs: 15000,
    usedMessage: "Your free premium AI strategy demo is complete. Ready for a custom AI system? Contact Flow Strategic AI below for a paid subscription, a private deep research and analysis engine, or a done-for-you backend automation build that your business owns.",
    suggestions: [
      "What should I automate first for the highest ROI?",
      "Research my market and identify my best automation opportunity.",
      "Where is my business losing the most time and money?",
      "How can I scale without hiring more people?",
      "What AI systems should I build to grow my business?",
      "Analyze my workflow and tell me what backend automation I could charge clients for."
    ]
  },

  apexValue: [
    {
      icon: "🧠",
      title: "Deep Research & Analysis",
      text: "The Apex Engine is designed for serious research, strategy, automation planning, debugging, market analysis, sales systems, content systems, technical review, and operational decision support."
    },
    {
      icon: "🔍",
      title: "Answer Quality That Goes Beyond Generic AI",
      text: "The agent is prompted to verify key claims, compare sources, state assumptions, flag uncertainty, identify contradictions, and turn findings into practical recommendations a business owner can act on."
    },
    {
      icon: "🔁",
      title: "Async Reliability",
      text: "The website does not wait for a webhook response. It creates a job, Make processes it in the background, and the browser polls Supabase until completion — ideal for long-running research and analysis."
    },
    {
      icon: "🛡️",
      title: "Safer Response Writing",
      text: "Make writes final answers through a Supabase RPC using base64 transport, avoiding broken JSON when AI output contains quotes, Markdown, tables, citations, code blocks, or long strategic reports."
    },
    {
      icon: "⚙️",
      title: "Production Pattern",
      text: "The same architecture can power customer support AI, lead generation agents, research engines, proposal systems, internal copilots, CRM automation, reporting systems, and paid client portals."
    },
    {
      icon: "💼",
      title: "Commercially Valuable Output",
      text: "Answers are optimized for ROI, time savings, revenue growth, operational leverage, risk reduction, implementation steps, validation checks, and next-step momentum."
    },
    {
      icon: "🏗️",
      title: "DFY Backend Ownership",
      text: "Clients can pay for a private done-for-you version where the Supabase backend, Make.com workflows, AI Agent prompt, tools, and integrations are built around their exact business."
    },
    {
      icon: "🔐",
      title: "Subscription-Ready Demo Limit",
      text: "The two-turn demo creates a natural upgrade path: visitors experience the system, then contact Flow Strategic AI for subscription access, higher limits, private context, or a custom quote."
    }
  ],

  stats: [
    { number: "10+ min", label: "Deep Research Window" },
    { number: "2", label: "Free Premium Demo Turns" },
    { number: "$3k+", label: "Typical DFY Build Potential" },
    { number: "24/7", label: "Autonomous Operation" }
  ],

  demos: [
    { id: "kKB_HY7aGY0", title: "🚀 Autonomous AI Lead Generation" },
    { id: "YiVzjhvPb1c", title: "🧠 AI Lead Qualification System" },
    { id: "szXMjJKdp0g", title: "📢 Autonomous AI Content Engine" },
    { id: "D0PS_5BHlME", title: "🔁 YouTube → LinkedIn Distribution" }
  ],

  services: [
    {
      icon: "🧪",
      impact: "Premium Demo",
      title: "Apex Executive AI Strategy Engine",
      description: "A live premium portfolio demo powered by an autonomous AI research, strategy, and automation advisor built in Make.com. It is built for deep analysis, high-value research, source-aware answers, ROI reasoning, and implementation-ready recommendations.",
      bullets: [
        "Deep research and executive-level analysis",
        "High-ROI automation opportunity discovery",
        "Business strategy, research, debugging, and workflow planning",
        "Tool-using Make.com AI Agent architecture",
        "Two-turn premium demo for clarification and follow-up",
        "Upgrade path for subscription access or private DFY backend ownership"
      ],
      tags: ["Make.com", "AI Agent", "Deep Research", "Strategy", "Supabase"],
      href: "#agent-demo",
      cta: "Test the premium AI advisor"
    },
    {
      icon: "🔍",
      impact: "Research Engine",
      title: "Custom Deep Research & Analysis Agent",
      description: "A private AI research system that can investigate markets, competitors, products, regulations, technical docs, customer sentiment, sales angles, business bottlenecks, and automation opportunities.",
      bullets: [
        "Multi-source research and source-quality thinking",
        "Market, competitor, and offer analysis",
        "Technical documentation and API research",
        "Executive summaries and recommendation reports",
        "Private business context and reusable research workflows"
      ],
      tags: ["Research", "Tavily", "Exa", "Apify", "AI Agent"],
      href: "#contact",
      cta: "Build my research engine"
    },
    {
      icon: "🚀",
      impact: "Revenue System",
      title: "Autonomous B2B Lead Generation Engine",
      description: "A multi-agent outbound system that discovers real businesses, identifies buying signals, enriches contacts, writes personalized outreach, and logs every lead into CRM.",
      bullets: [
        "Google Maps, LinkedIn, Meta, and public signal discovery",
        "AI prospect qualification and opportunity scoring",
        "Founder or decision-maker enrichment",
        "AI-personalized cold outreach and follow-ups",
        "CRM logging, deduplication, and Gmail execution"
      ],
      tags: ["Make.com", "AI Agent", "Apify", "Apollo", "Gmail"],
      href: "#contact",
      cta: "Build my lead engine"
    },
    {
      icon: "🌐",
      impact: "High Intent",
      title: "Hybrid Signal-to-Offer Revenue Engine",
      description: "A revenue-intelligence engine that monitors public market signals, scores buying-window intent, maps problems to offers, generates pitch assets, and alerts your team.",
      bullets: [
        "Public intent-signal monitoring",
        "Weighted AI buying-window scoring",
        "Problem-to-offer matching",
        "Landing page, pitch, email, and DM asset generation",
        "Executive Gmail alerts and CRM tracking"
      ],
      tags: ["Make.com", "Tavily", "Exa", "Sheets", "Gmail"],
      href: "#contact",
      cta: "Find ready-to-buy prospects"
    },
    {
      icon: "🤖",
      impact: "Live Proof",
      title: "AI Customer Support & FAQ Automation",
      description: "A premium website support assistant that answers questions, qualifies visitors, remembers context, searches knowledge, and escalates important leads.",
      bullets: [
        "AI FAQ and knowledge base responses",
        "Conversation memory and context",
        "HOT / WARM / COLD visitor qualification",
        "CRM logging and human escalation",
        "Website chat widget integration"
      ],
      tags: ["Make.com", "AI Agent", "Gmail", "Sheets", "Chatbot"],
      href: "javascript:openChat()",
      cta: "Live on this site — try the chat widget",
      live: true
    },
    {
      icon: "🧠",
      impact: "Sales Ops",
      title: "AI Lead Scoring & Qualification System",
      description: "A lead qualification workflow that captures form submissions, analyzes answers, scores prospects, sends personalized replies, and updates CRM automatically.",
      bullets: [
        "Google Forms to Sheets automation",
        "AI lead scoring and fit analysis",
        "HOT / WARM / COLD classification",
        "Personalized email auto-replies",
        "Sales team alerts and CRM tracking"
      ],
      tags: ["Make.com", "Gemini", "Google Forms", "Sheets", "Gmail"],
      href: "#contact",
      cta: "Automate lead qualification"
    },
    {
      icon: "📢",
      impact: "Inbound Engine",
      title: "Autonomous AI Content Engine",
      description: "A multi-platform content automation system that researches trends, generates posts, creates captions and hooks, and supports consistent inbound marketing.",
      bullets: [
        "Trend research and signal mining",
        "LinkedIn, Instagram, Facebook, and X content",
        "AI image prompt generation",
        "Content calendar creation",
        "Scheduling and publishing workflows"
      ],
      tags: ["Make.com", "GPT", "DALL·E", "Social APIs"],
      href: "#contact",
      cta: "Build my content engine"
    },
    {
      icon: "🔁",
      impact: "Content Leverage",
      title: "YouTube → LinkedIn Distribution System",
      description: "A repurposing workflow that turns one long-form video into multiple professional LinkedIn posts using transcript extraction and AI content angles.",
      bullets: [
        "New YouTube upload detection",
        "Transcript extraction",
        "Multiple LinkedIn post angles",
        "Content database storage",
        "Scheduled distribution"
      ],
      tags: ["Make.com", "AI", "YouTube", "LinkedIn"],
      href: "#contact",
      cta: "Repurpose my videos"
    },
    {
      icon: "📋",
      impact: "CRM Backbone",
      title: "CRM & Lead Capture Automation",
      description: "A simple but powerful automation backbone for forms, registrations, lead capture, internal reporting, email replies, and clean spreadsheet CRM tracking.",
      bullets: [
        "Google Forms to Google Sheets",
        "Automatic seller notifications",
        "Auto email responses",
        "Clean CRM logging",
        "Follow-up workflow triggers"
      ],
      tags: ["Google Forms", "Sheets", "Gmail", "Make.com"],
      href: "#contact",
      cta: "Set up my CRM flow"
    },
    {
      icon: "🛠️",
      impact: "Rescue Sprint",
      title: "Make.com Workflow Automation Build / Rescue",
      description: "For businesses with broken, slow, messy, or incomplete workflows. I diagnose issues, rebuild logic, improve reliability, and make the automation production-ready.",
      bullets: [
        "Scenario debugging and repair",
        "Webhook, router, filter, and mapping fixes",
        "API and JSON troubleshooting",
        "Error handling and logging",
        "Cleaner, safer workflow architecture"
      ],
      tags: ["Make.com", "API", "Webhooks", "Debugging"],
      href: "#contact",
      cta: "Fix my automation"
    },
    {
      icon: "🧩",
      impact: "Custom Build",
      title: "Custom AI Integrations & Automation Systems",
      description: "If your workflow is unique, I can build the exact integration you need around your tools, CRM, forms, email, spreadsheets, AI models, webhooks, APIs, and business logic.",
      bullets: [
        "Custom Make.com integrations",
        "AI employees for repetitive workflows",
        "Internal tools and dashboards",
        "API-to-API automations",
        "Automations designed around your business",
        "Custom automation built around your exact operations"
      ],
      tags: ["Custom", "Make.com", "AI Agents", "APIs"],
      href: "#contact",
      cta: "Request a custom integration"
    }
  ],

  courseModules: [
    {
      title: "Module 1 — AI Automation Opportunity Audit",
      goal: "Identify what to automate first.",
      deliverable: "AI Automation Audit Checklist"
    },
    {
      title: "Module 2 — Build Your AI Research Employee",
      goal: "Create a reusable research workflow for webpages, documents, notes, competitors, and market reports.",
      deliverable: "Research Assistant Template"
    },
    {
      title: "Module 3 — Build Your AI Marketing Employee",
      goal: "Define personas, generate ideas, build a content calendar, and draft posts and emails faster.",
      deliverable: "Content Calendar Generator"
    },
    {
      title: "Module 4 — Build Your AI Sales Employee",
      goal: "Research prospects manually using free tools, generate outreach drafts, and create follow-up sequences.",
      deliverable: "Sales Outreach Prompt Pack"
    },
    {
      title: "Module 5 — Build Your AI Customer Support Employee",
      goal: "Build a FAQ knowledge base, response templates, support replies, and escalation rules.",
      deliverable: "Customer Support Response Library"
    },
    {
      title: "Module 6 — Build Your AI Admin Employee",
      goal: "Reduce repetitive admin work with meeting summaries, SOPs, task extraction, and reporting workflows.",
      deliverable: "SOP and Meeting Notes Templates"
    },
    {
      title: "Module 7 — Build Your Own AI Automation System",
      goal: "Customize your highest-value workflow, combine tools, document the process, and measure time saved.",
      deliverable: "AI Employee Build Sheet"
    }
  ]
};
