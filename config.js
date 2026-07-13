/*
========================================================

FLOW STRATEGIC AI WEBSITE CONFIGURATION

Edit this file when you want to change:
- Company name
- Logo
- Email
- Social links
- Make.com webhook
- Chatbot name/message
- YouTube demos

You should not need to edit script.js for normal changes.

========================================================
*/

const CONFIG = {
    companyName: "Flow Strategic AI",
    shortName: "FSAI",
    website: "https://flowstrategicai.github.io",
    logo: "assets/logo.png",

    tagline:
        "Autonomous AI Systems That Generate Leads, Automate Operations, And Scale Businesses.",

    description:
        "Flow Strategic AI builds autonomous AI agents, Make.com automation systems, AI lead generation engines, CRM automation, content systems, and AI customer support workflows.",

    contact: {
        email: "flowstrategicai@gmail.com",
        whatsappNumber: "254723025978",
        whatsappLink: "https://wa.me/254723025978",
        youtube: "https://www.youtube.com/@flowstrategicAI",
        linkedin: "https://linkedin.com/flowstrategicai",
        twitter: "https://x.com/flowstrategicai",
        facebook: "https://facebook.com/flowstrategicai"
    },

    chatbot: {
        enabled: true,

        name: "FSAI Assistant",

        welcomeMessage:
            "👋 Welcome to Flow Strategic AI.\n\nI'm the FSAI Assistant. I can answer questions about our AI automation systems, recommend the right solution for your business, and help you get started with your project.",

        webhook:
            "https://hook.eu1.make.com/1gbvkovboen1vv62mn5ajztnvvywtv6p",

        fallbackMessage:
            "Sorry, I could not connect right now. Please email us at flowstrategicai@gmail.com or message us on WhatsApp."
    },

    demos: {
        leadGeneration: "kKB_HY7aGY0",
        leadQualification: "YiVzjhvPb1c",
        contentEngine: "szXMjJKdp0g",
        youtubeDistribution: "D0PS_5BHlME"
    },

    colors: {
        background: "#050505",
        card: "#111111",
        accent: "#00E5FF",
        accentTwo: "#0066FF",
        text: "#FFFFFF",
        muted: "#A8A8B3"
    }
};
