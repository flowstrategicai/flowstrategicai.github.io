const CONFIG = {
  companyName: "Flow Strategic AI",
  email: "flowstrategicai@gmail.com",
  heroTitle: "Autonomous AI Systems That Run Your Business",
  heroSubtitle: "I design AI agents and Make.com workflows that generate leads, automate operations, and scale businesses — with minimal human input.",

  chatbot: {
    enabled: true,
    name: "FSAI Assistant",
    welcomeMessage: "👋 Welcome to Flow Strategic AI.\n\nI'm the FSAI Assistant. Ask me about our AI automation systems, or tell me what you'd like to automate.",
    webhook: "https://hook.eu1.make.com/1gbvkovboen1vv62mn5ajztnvvywtv6p",
    suggestions: ["AI Lead Generation", "Customer Support AI", "CRM Automation", "Content Automation"]
  },

  stats: [
    { number: "12+", label: "AI Systems Built" },
    { number: "30+", label: "Workflow Modules" },
    { number: "15+", label: "API Integrations" },
    { number: "24/7", label: "Autonomous Operation" }
  ],

  projects: [
    {
      id: "b2b-lead-engine", icon: "🚀", category: "Sales AI",
      title: "Autonomous B2B Lead Generation Engine",
      shortDesc: "A multi-agent AI system that discovers companies, scores buying signals, finds decision-makers, and executes automated cold outreach.",
      demo: "kKB_HY7aGY0",
      tags: ["Make.com","GPT-5.5","Apify","Apollo","Exa","Tavily"],
      hero: "An end-to-end, multi-agent Make.com system that hunts pain-signals, qualifies fit, finds the true decision-maker, and sends hyper-personalized outreach — like a strategic human SDR, but autonomous.",
      features: ["LinkedIn + Meta ad buying-signal discovery","Aggressive ICP filtering & 0–100 opportunity scoring","Waterfall email enrichment (Apollo, crawlers, Exa, Tavily)","Email confidence scoring & safe-send routing","AI founder-to-founder cold copy under 90 words","Auto CRM logging + staged follow-up sequences"],
      modules: [
        { h:"Signal Radar (Scout)", p:"Scrapes LinkedIn job signals, dedupes, hard-rejects bad fits, scores on 5 criteria, pushes 55+ scores to CRM." },
        { h:"Closer Auto-Send (Dealmaker)", p:"Pulls top leads, runs the enrichment waterfall, grades email confidence, drafts & sends outreach, stages follow-ups." }
      ],
      outcomes: ["Fully automated pipeline","AI-personalized outreach at scale","No manual prospecting","Domain-safe guardrails"]
    },
    {
      id: "revenue-engine", icon: "🌐", category: "Revenue Intelligence",
      title: "Hybrid Signal-to-Offer Revenue Engine",
      shortDesc: "An autonomous revenue-intelligence system that detects public intent signals, scores opportunities, and generates custom offers.",
      demo: "",
      tags: ["Make.com","GPT-5.5","Tavily","Exa","Google Sheets"],
      hero: "Monitors public intent signals, scores buying-window urgency, generates custom offers & landing copy, and alerts your team in real time.",
      features: ["Public intent-signal monitoring (forums, launches, job posts)","Weighted AI scoring (intent, urgency, fit, budget, evidence)","Hot (85+) / Warm (75+) opportunity routing","Auto offer + landing-page copy + LinkedIn DM generation","HTML executive email alerts","Full audit-trail run logging"],
      modules: [
        { h:"Config & State Manager", p:"Central command: volume caps, scoring thresholds, compliance restrictions, offer ladder." },
        { h:"Reasoning Engine", p:"Multi-engine search, evidence defense, dedupe, weighted scoring, offer architecture mapping." }
      ],
      outcomes: ["Precision targeting","Instant asset creation","100% compliant public data","Real-time team alerts"]
    },
    {
      id: "ai-support", icon: "🤖", category: "Customer Experience", live: true,
      title: "AI Customer Support & RAG Assistant",
      shortDesc: "A reusable, true-RAG support assistant with semantic retrieval, memory, deflection analytics, and human escalation.",
      demo: "",
      tags: ["Make.com","AI Agent","RAG","Gmail","Sheets"],
      hero: "A premium true-RAG AI support assistant: semantic knowledge retrieval, conversation memory, multilingual replies, deflection & CSAT analytics, a self-improving knowledge base, and smart human escalation.",
      features: ["Semantic knowledge-base (vector) retrieval","Multilingual auto-detect & reply","Conversation memory & returning-visitor context","Deflection + CSAT ROI analytics","Self-improving knowledge-gap logging","Smart human escalation & team alerts"],
      modules: [
        { h:"RAG Retrieval Layer", p:"Searches uploaded docs semantically before answering — never hallucinates business facts." },
        { h:"Support Orchestrator", p:"Classifies intent, resolves or escalates, logs deflection/CSAT, improves the KB over time." }
      ],
      outcomes: ["Instant 24/7 answers","Lower cost per ticket","Continuous KB improvement","Swappable across clients"]
    },
    {
      id: "lead-qualification", icon: "🧠", category: "Sales Operations",
      title: "AI Lead Qualification System",
      shortDesc: "Scores & prioritizes leads with personalized auto-replies. Google Forms → Sheets → AI → CRM.",
      demo: "YiVzjhvPb1c",
      tags: ["Make.com","Gemini","Forms","Gmail","Sheets"],
      hero: "Automatically qualifies and scores leads HOT/WARM/COLD, sends tailored replies, and streamlines the sales workflow.",
      features: ["AI lead-scoring engine","HOT / WARM / COLD classification","Personalized automated email replies","New-lead alert notifications","Google Sheets CRM logging"],
      modules: [
        { h:"Capture & Alert", p:"Form submission triggers an instant owner alert." },
        { h:"Score & Route", p:"AI analyzes answers, tags priority, logs to CRM, sends a tailored reply." }
      ],
      outcomes: ["Faster sales response","Better prioritization","Higher conversion"]
    },
    {
      id: "content-engine", icon: "📢", category: "Marketing AI",
      title: "Autonomous AI Content Engine",
      shortDesc: "Researches trends, writes AI copy, generates visuals, and auto-distributes across platforms.",
      demo: "szXMjJKdp0g",
      tags: ["Make.com","GPT","DALL·E","Social APIs"],
      hero: "A complete content automation system: mines trends, writes platform-specific copy, generates AI visuals, and auto-publishes across LinkedIn, Instagram & Facebook.",
      features: ["Trend research & signal mining","Multi-platform AI copywriting","AI image-prompt & visual generation","Auto-scheduling & publishing","Content calendar logging"],
      modules: [
        { h:"Research & Write", p:"Scrapes trends, drafts platform-tailored posts, hooks & captions." },
        { h:"Visualize & Publish", p:"Generates images, schedules and auto-posts across channels." }
      ],
      outcomes: ["Consistent presence","Zero manual creation","Automated inbound"]
    },
    {
      id: "yt-linkedin", icon: "🔁", category: "Content Automation",
      title: "YouTube → LinkedIn Distribution",
      shortDesc: "Turns one video into 10+ professional LinkedIn posts automatically.",
      demo: "D0PS_5BHlME",
      tags: ["Make.com","AI","YouTube","LinkedIn"],
      hero: "Detects new YouTube uploads, extracts transcripts, and uses AI to generate multiple post angles — then stores and auto-schedules them to LinkedIn.",
      features: ["Automatic transcript extraction","Multiple AI post angles per video","Content database storage","Scheduled distribution"],
      modules: [
        { h:"Detect & Extract", p:"Watches uploads, pulls transcripts." },
        { h:"Generate & Schedule", p:"Creates multi-angle posts, stores & schedules." }
      ],
      outcomes: ["1 video → 10+ posts","Continuous growth","Content leverage"]
    },
    {
      id: "inbound-social", icon: "📡", category: "Revenue Intelligence",
      title: "Hybrid Inbound Social Revenue Engine",
      shortDesc: "80/20 engine: authority content generation + deep buying-signal intelligence.",
      demo: "",
      tags: ["Make.com","GPT-5.5","Tavily","Exa","DALL·E","Sheets"],
      hero: "An enterprise RevOps + content engine: 80% inbound authority content, 20% deep-web opportunity intelligence — a 24/7 client-acquisition flywheel.",
      features: ["Public buying-signal listening","5-dimension lead scoring","Problem-to-offer service mapping","Multi-channel content factory (X, LinkedIn, FB, IG)","AI image generation for IG","Warm/Hot opportunity routing & alerts"],
      modules: [
        { h:"Intelligence Track", p:"Dedupes, scores intent, creates warm/hot opportunities." },
        { h:"Content Track", p:"Generates & auto-posts platform-specific content." }
      ],
      outcomes: ["Authority + pipeline","No payroll overhead","24/7 flywheel"]
    },
    {
      id: "crm-capture", icon: "📋", category: "CRM Automation",
      title: "CRM & Lead Capture Automation",
      shortDesc: "The reliable automation backbone: Forms → Sheets → Email, with auto-replies and follow-ups.",
      demo: "",
      tags: ["Make.com","Google Forms","Sheets","Gmail"],
      hero: "Captures form submissions, stores them in a Sheets CRM, sends notifications & auto-replies, and triggers follow-up workflows.",
      features: ["Form-submission capture","Google Sheets CRM storage","Automated notifications","Auto thank-you replies","Follow-up workflow triggers"],
      modules: [
        { h:"Capture & Store", p:"Form → structured Sheets CRM." },
        { h:"Notify & Reply", p:"Alerts seller, auto-replies to submitter." }
      ],
      outcomes: ["Zero manual entry","Faster handling","Clean CRM"]
    }
  ]
};
