document.addEventListener("DOMContentLoaded", () => {
    applyConfigColors();
    createChatbot();
});


function applyConfigColors() {
    if (!window.CONFIG || !CONFIG.colors) return;

    const root = document.documentElement;

    if (CONFIG.colors.background) {
        root.style.setProperty("--bg", CONFIG.colors.background);
    }

    if (CONFIG.colors.card) {
        root.style.setProperty("--card", CONFIG.colors.card);
    }

    if (CONFIG.colors.accent) {
        root.style.setProperty("--accent", CONFIG.colors.accent);
    }

    if (CONFIG.colors.accentTwo) {
        root.style.setProperty("--accent-two", CONFIG.colors.accentTwo);
    }

    if (CONFIG.colors.text) {
        root.style.setProperty("--text", CONFIG.colors.text);
    }

    if (CONFIG.colors.muted) {
        root.style.setProperty("--muted", CONFIG.colors.muted);
    }
}


function getOrCreateId(key, prefix) {
    let value = localStorage.getItem(key);

    if (!value) {
        value =
            prefix +
            "_" +
            Date.now() +
            "_" +
            Math.random().toString(36).substring(2, 10);

        localStorage.setItem(key, value);
    }

    return value;
}


const CFG = window.CONFIG;

function createChatbot() {
    window.CONFIG = {
   ...
};

    const chatButton = document.createElement("button");
    chatButton.id = "fsai-chat-button";
    chatButton.innerHTML = "💬";
    chatButton.setAttribute("aria-label", "Open FSAI Assistant");

    document.body.appendChild(chatButton);


    const chatBox = document.createElement("div");
    chatBox.id = "fsai-chat-box";

    chatBox.innerHTML = `
        <div class="fsai-header">
            <span>${CONFIG.chatbot.name || "FSAI Assistant"}</span>
            <span id="fsai-close">×</span>
        </div>

        <div id="fsai-messages"></div>

        <div class="fsai-input-area">
            <input
                id="fsai-input"
                placeholder="Ask about AI automation..."
                autocomplete="off"
            >

            <button id="fsai-send">
                Send
            </button>
        </div>
    `;

    document.body.appendChild(chatBox);


    const messages = document.getElementById("fsai-messages");

    const savedMessages = JSON.parse(
        localStorage.getItem("fsai_chat_messages") || "[]"
    );

    if (savedMessages.length > 0) {
        savedMessages.forEach((item) => {
            addMessage(item.text, item.type, false);
        });
    } else {
        addMessage(
            CONFIG.chatbot.welcomeMessage ||
            "👋 Welcome to Flow Strategic AI. I'm the FSAI Assistant.",
            "bot-message"
        );
    }


    chatButton.addEventListener("click", openFSAIChat);

    document
        .getElementById("fsai-close")
        .addEventListener("click", closeFSAIChat);

    document
        .getElementById("fsai-send")
        .addEventListener("click", sendMessage);

    document
        .getElementById("fsai-input")
        .addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                sendMessage();
            }
        });


    window.openFSAIChat = openFSAIChat;
    window.closeFSAIChat = closeFSAIChat;


    function openFSAIChat() {
        chatBox.style.display = "flex";

        setTimeout(() => {
            document.getElementById("fsai-input").focus();
        }, 100);
    }


    function closeFSAIChat() {
        chatBox.style.display = "none";
    }


    async function sendMessage() {
        const input = document.getElementById("fsai-input");
        const message = input.value.trim();

        if (!message) return;

        addMessage(message, "user-message");

        input.value = "";

        addMessage("Thinking...", "bot-message", false, "thinking-message");

        const sessionId = getOrCreateId("fsai_session_id", "session");
        const visitorId = getOrCreateId("fsai_visitor_id", "visitor");

        const payload = {
            channel: "website_chat",
            session_id: sessionId,
            visitor_id: visitorId,
            name: "",
            email: "",
            message: message,
            page_url: window.location.href,
            referrer: document.referrer || "",
            user_agent: navigator.userAgent,
            timestamp: new Date().toISOString()
        };

        try {
            const response = await fetch(CONFIG.chatbot.webhook, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            });

            let data;

            const contentType = response.headers.get("content-type") || "";

            if (contentType.includes("application/json")) {
                data = await response.json();
            } else {
                const text = await response.text();
                data = {
                    reply: text
                };
            }

            removeThinking();

            const reply =
                data.reply ||
                data.message ||
                "Thanks. Your message was received successfully.";

            addMessage(reply, "bot-message");

        } catch (error) {
            console.error("FSAI Assistant Error:", error);

            removeThinking();

            addMessage(
                CONFIG.chatbot.fallbackMessage ||
                "Sorry, I could not connect right now. Please contact Flow Strategic AI by email.",
                "bot-message"
            );
        }
    }


    function addMessage(text, type, save = true, extraClass = "") {
        const div = document.createElement("div");

        div.className = `${type} ${extraClass}`.trim();
        div.innerText = text;

        messages.appendChild(div);

        messages.scrollTop = messages.scrollHeight;

        if (save && extraClass !== "thinking-message") {
            saveMessage(text, type);
        }
    }


    function removeThinking() {
        const thinking = document.querySelector(".thinking-message");

        if (thinking) {
            thinking.remove();
        }
    }


    function saveMessage(text, type) {
        const current = JSON.parse(
            localStorage.getItem("fsai_chat_messages") || "[]"
        );

        current.push({
            text,
            type
        });

        const trimmed = current.slice(-20);

        localStorage.setItem(
            "fsai_chat_messages",
            JSON.stringify(trimmed)
        );
    }
}
