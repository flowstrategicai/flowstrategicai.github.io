/*
========================================================
FLOW STRATEGIC AI — MASTER CONFIGURATION
========================================================
This is the ONLY file you edit to customize the site.
To reuse for a client: change values below, swap logo,
update webhook. No HTML/CSS/JS editing required.
========================================================
*/

const CONFIG = {

  // ===== BRAND =====
  companyName: "Flow Strategic AI",
  shortName: "FSAI",
  logo: "assets/logo.png",

  heroTitle: "Autonomous AI Systems That Run Your Business",
  heroSubtitle: "I design AI agents and Make.com workflows that generate leads, automate operations, and scale businesses — with minimal human input.",

  aboutText: "I design and build autonomous AI systems that help businesses generate leads, automate repetitive operations, improve customer support, and scale without increasing manual workload. Every system is built with governance, reliability, and business outcomes as the priority — not automation for its own sake.",

  // ===== CONTACT =====
  email: "flowstrategicai@gmail.com",

  socials: {
    whatsapp: "https://wa.me/254723025978",
    youtube: "https://youtube.com/@flowstrategicAI",
    linkedin: "https://www.linkedin.com/in/flowstrategicai/",
    twitter: "https://x.com/FlowStrategicAI",
    facebook: "https://facebook.com/flowstrategicai"
    instagram: "https://www.instagram.com/flowstrategicai_official/"
  },

  // ===== CHATBOT =====
  chatbot: {
    enabled: true,
    name: "FSAI Assistant",
    welcomeMessage: "👋 Welcome to Flow Strategic AI.\n\nI'm the FSAI Assistant. I can answer questions about our AI automation systems, recommend the right solution for your business, and help you get started with your project.\n\nWhat would you like to automate?",
    webhook: "https://hook.eu1.make.com/3yzv81aurdt9on9uclfelz382cfu4obb",
    suggestions: [
      "AI Lead Generation",
      "Customer Support AI",
      "CRM Automation",
      "Content Automation"
    ]
  },

  // ===== YOUTUBE DEMO IDs =====
  demos: {
    leadGeneration: "kKB_HY7aGY0",
    leadQualification: "YiVzjhvPb1c",
    contentEngine: "szXMjJKdp0g",
    youtubeDistribution: "D0PS_5BHlME"
  },

  // ===== STATS =====
  stats: [
    { number: "12+", label: "AI Systems Built" },
    { number: "30+", label: "Workflow Modules" },
    { number: "15+", label: "API Integrations" },
    { number: "24/7", label: "Autonomous Operation" }
  ]

};
