const CONFIG = {
  companyName: "Flow Strategic AI",
  shortName: "FSAI",
  logo: "assets/logo.png",

  heroTitle: "Autonomous AI Systems That Run Your Business",
  heroSubtitle: "I design AI agents and Make.com workflows that generate leads, qualify prospects, automate support, organize CRM data, create content, and scale operations with minimal human input.",

  aboutText: "Flow Strategic AI designs and builds autonomous AI systems for small businesses, coaches, teachers, creators, consultants, agencies, SaaS founders, local service businesses, and online entrepreneurs. The goal is simple: replace repetitive manual work with self-operating systems that generate consistent leads, respond faster, reduce errors, and create measurable business leverage.",

  email: "flowstrategicai@gmail.com",

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
    welcomeMessage: "👋 Welcome to Flow Strategic AI.\n\nI'm the FSAI Assistant. I can answer questions about AI automation systems, recommend the right workflow for your business, and help you get started.\n\nWhat would you like to automate?",
    webhook: "https://hook.eu1.make.com/3yzv81aurdt9on9uclfelz382cfu4obb",
    suggestions: [
      "AI Lead Generation",
      "Customer Support AI",
      "CRM Automation",
      "Content Automation",
      "Custom Integration"
    ]
  },

  agentDemo: {
    enabled: true,
    webhook: "https://hook.eu1.make.com/w2z23nle79wfysy165ob5fvbrj253rre",
    oneUseStorageKey: "fsai_universal_agent_free_test_used",
    usedMessage: "Your free AI agent test has already been used on this browser. To build your own AI system or get premium implementation help, contact Flow Strategic AI below."
  },

  stats: [
    { number: "12+", label: "AI Systems Built" },
    { number: "30+", label: "Workflow Modules" },
    { number: "15+", label: "API Integrations" },
    { number: "24/7", label: "Autonomous Operation" }
  ],

  demos: [
    {
      id: "kKB_HY7aGY0",
      title: "🚀 Autonomous AI Lead Generation"
    },
    {
      id: "YiVzjhvPb1c",
      title: "🧠 AI Lead Qualification System"
    },
    {
      id: "szXMjJKdp0g",
      title: "📢 Autonomous AI Content Engine"
    },
    {
      id: "D0PS_5BHlME",
      title: "🔁 YouTube → LinkedIn Distribution"
    }
  ],

  services: [
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
      description: "If your workflow is unique, I can build the exact integration you need around your tools, CRM, forms, email, spreadsheets, AI models, webhooks, and APIs.",
      bullets: [
        "Custom Make.com integrations",
        "AI employees for repetitive workflows",
        "Internal tools and dashboards",
        "API-to-API automations",
        "Automations designed around your business"
      ],
      tags: ["Custom", "Make.com", "AI Agents", "APIs"],
      href: "#contact",
      cta: "Request a custom integration"
    },
    {
      icon: "🧪",
      impact: "Free Demo",
      title: "Universal Autonomous AI Agent",
      description: "A live portfolio demo powered by an autonomous AI agent built in Make.com. Visitors can test it once for free with no login, then request implementation.",
      bullets: [
        "Universal prompt assistance",
        "Research, planning, debugging, and strategy",
        "Make.com AI Agent architecture",
        "Tool-using agent design",
        "One free test on this site"
      ],
      tags: ["Make.com", "AI Agent", "Webhooks", "Live Demo"],
      href: "#agent-demo",
      cta: "Test it free once"
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
