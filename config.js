const CONFIG = {
companyName: "Flow Strategic AI",
shortName: "FSAI",
logo: "assets/logo.png",
siteUrl: "https://flowstrategicai.github.io",

heroTitle: "AI Automation Systems That Generate Leads, Save Time & Run Business Workflows",
heroSubtitle: "I build Make.com AI agents, lead generation engines, CRM automations, content systems, customer support assistants, and universal AI workflows that help businesses replace manual work with reliable automated systems.",

aboutText: "Flow Strategic AI designs and builds practical AI automation systems for small businesses, coaches, consultants, teachers, agencies, creators, and online entrepreneurs. I specialize in Make.com workflows, AI agents, lead generation systems, CRM automation, customer support assistants, content engines, and universal AI workflows built for real business outcomes — more leads, faster responses, cleaner operations, stronger content, and less repetitive work.",

email: "flowstrategicai@gmail.com",

socials: {
whatsapp: "https://wa.me/254723025978",
youtube: "https://youtube.com/@flowstrategicAI",
linkedin: "https://www.linkedin.com/in/flowstrategicai/",
twitter: "https://x.com/FlowStrategicAI",
facebook: "https://facebook.com/flowstrategicai",
instagram: "https://www.instagram.com/flowstrategicai_official/"
},

chatbot: {
enabled: true,
name: "FSAI Assistant",
welcomeMessage: "👋 Welcome to Flow Strategic AI.\n\nI am the live FSAI Assistant chatbot on this site — a working example of an AI customer-service assistant.\n\nI can help you choose the right automation system for your business: lead generation, CRM automation, customer support AI, content automation, Make.com debugging, or a custom workflow.\n\nWhat would you like to automate?",
webhook: "https://hook.eu1.make.com/3yzv81aurdt9on9uclfelz382cfu4obb",
suggestions: [
"I need more leads",
"I want to automate my CRM",
"I need an AI customer support bot",
"I want content automation",
"I need help debugging Make.com"
]
},

universalAgent: {
enabled: true,
name: "Universal AI Agent",
webhook: "PASTE_YOUR_NEW_UNIVERSAL_AI_AGENT_WEBHOOK_URL_HERE",
maxPromptChars: 3000,
localTrialKey: "fsai_universal_agent_trial_used_v1",
buyLink: "mailto:flowstrategicai@gmail.com?subject=I%20Want%20to%20Buy%20the%20Universal%20AI%20Agent",
placeholder: "Example: Audit my business workflow and tell me what I should automate first.",
emptyPromptMessage: "Please enter a prompt before running your free test.",
usedMessage: "You have already used your free AI agent test in this browser. To keep using this premium assistant, please buy/request access or contact Flow Strategic AI.",
notConfiguredMessage: "The Universal AI Agent webhook is not connected yet. Import the Make.com blueprint, copy the new webhook URL, and paste it into CONFIG.universalAgent.webhook in config.js."
},

demos: [
{
title: "🚀 Autonomous AI Lead Generation",
youtubeId: "kKB_HY7aGY0",
description: "See how an automated lead generation engine discovers prospects and prepares outreach."
},
{
title: "🧠 AI Lead Qualification System",
youtubeId: "YiVzjhvPb1c",
description: "See how AI scores and routes leads from form submissions."
},
{
title: "📢 Autonomous AI Content Engine",
youtubeId: "szXMjJKdp0g",
description: "See how AI can research and prepare multi-platform content."
},
{
title: "🔁 YouTube to LinkedIn Distribution",
youtubeId: "D0PS_5BHlME",
description: "See how one video can be repurposed into LinkedIn content."
}
],

resources: [
{
type: "Checklist",
title: "AI Automation Opportunity Audit",
description: "Identify repetitive tasks, estimate time savings, and choose your highest-value workflow.",
link: "mailto:flowstrategicai@gmail.com?subject=Send%20Me%20the%20AI%20Automation%20Audit%20Checklist"
},
{
type: "Template",
title: "AI Employee Build Sheet",
description: "Plan your AI research, sales, support, marketing, or admin employee before building.",
link: "mailto:flowstrategicai@gmail.com?subject=Send%20Me%20the%20AI%20Employee%20Build%20Sheet"
},
{
type: "Consultation",
title: "Workflow Automation Review",
description: "Send your current process and get guidance on what can be automated first.",
link: "mailto:flowstrategicai@gmail.com?subject=I%20Want%20a%20Workflow%20Automation%20Review"
}
],

course: {
enabled: true,
status: "Premium Course Coming Soon",
title: "AI Employee Builder Accelerator",
subtitle: "A premium high-ticket course designed to help business owners build practical AI employees for research, marketing, sales, support, admin, and workflow automation.",
headline: "Build Your Own AI Automation System",
description: "Learn how to identify automation opportunities, build AI employees, document processes, and measure time saved across your business.",
buyLink: "mailto:flowstrategicai@gmail.com?subject=AI%20Employee%20Builder%20Accelerator%20Access",
modules: [
{
title: "Module 1 — AI Automation Opportunity Audit",
goal: "Help the learner identify what to automate.",
lessons: [
"What AI automation means in plain English",
"AI assistants vs AI agents vs AI employees",
"How to find repetitive business tasks",
"How to estimate time savings",
"Choosing your first automation workflow"
],
deliverable: "AI Automation Audit Checklist"
},
{
title: "Module 2 — Build Your AI Research Employee",
goal: "Create a reusable research workflow.",
lessons: [
"Set up a research brief",
"Use AI to summarize webpages, documents, and notes",
"Build competitor research prompts",
"Create a market research report workflow",
"Final project: AI competitor research assistant"
],
deliverable: "Research assistant template"
},
{
title: "Module 3 — Build Your AI Marketing Employee",
goal: "Create marketing drafts and campaign assets faster.",
lessons: [
"Define customer personas",
"Generate content ideas",
"Build a weekly content calendar",
"Draft posts and emails",
"Final project: AI marketing assistant"
],
deliverable: "Content calendar generator"
},
{
title: "Module 4 — Build Your AI Sales Employee",
goal: "Create a sales support workflow.",
lessons: [
"Define ideal customer profile",
"Research prospects manually using free tools",
"Generate personalized outreach drafts",
"Create follow-up sequences",
"Final project: AI sales follow-up assistant"
],
deliverable: "Sales outreach prompt pack"
},
{
title: "Module 5 — Build Your AI Customer Support Employee",
goal: "Create a support response system.",
lessons: [
"Build a simple FAQ knowledge base",
"Turn FAQs into response templates",
"Draft support replies with AI",
"Create escalation rules",
"Final project: AI support assistant"
],
deliverable: "Customer support response library"
},
{
title: "Module 6 — Build Your AI Admin Employee",
goal: "Reduce repetitive admin work.",
lessons: [
"Meeting summary workflow",
"SOP creation workflow",
"Task extraction workflow",
"Simple reporting workflow",
"Final project: AI admin assistant"
],
deliverable: "SOP and meeting notes templates"
},
{
title: "Module 7 — Build Your Own AI Automation System",
goal: "Help the learner customize the system.",
lessons: [
"Pick your highest-value workflow",
"Combine tools and templates",
"Document your process",
"Measure time saved",
"Maintenance and update checklist"
],
deliverable: "AI Employee Build Sheet"
}
]
},

stats: [
{ number: "12+", label: "AI Automation Systems Built" },
{ number: "30+", label: "Workflow Modules Designed" },
{ number: "15+", label: "API & App Integrations" },
{ number: "24/7", label: "Autonomous Workflow Capability" }
]
};
