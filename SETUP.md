# Flow Strategic AI Website Setup Guide

## 1. Change Company Information

Open:

config.js

Edit:

- companyName
- shortName
- email
- logo

---

## 2. Replace Logo

Upload:

assets/logo.png

---

## 3. Connect Chatbot

Open:

config.js

Replace:

chatbot.webhook

with your own Make.com webhook URL.

Example:

https://hook.eu1.make.com/your-webhook-id

---

## 4. Update Social Media

Inside config.js edit:

- YouTube
- LinkedIn
- Facebook
- Twitter/X
- WhatsApp

---

## 5. Replace Demo Videos

Inside config.js

Only replace the YouTube IDs.

---

## 6. Add Screenshots

Upload images into:

assets/screenshots/

---

## 7. Deploy

Commit changes to GitHub.

GitHub Pages updates automatically.

---

## 8. Build for a Client

Duplicate the repository.

Only edit:

- config.js
- assets/logo.png
- screenshots
- demo videos

No HTML changes are required.
