# Aryan Yadav — Universal Premium Portfolio

A personal portfolio website tailored for **Aryan Yadav** (AI/ML & GenAI Developer / Software Engineer), inspired by the editorial typography and aesthetic rhythm of [touquirakhtar.com](https://touquirakhtar.com/).

Features full integration of the autonomous **Swarmline** animation effect from [imperfec-t/swarmline](https://github.com/imperfec-t/swarmline), triggerable directly via the **"Motion"** button in the header.

---

## ⚡ Tech Stack

- **Framework:** React 19 + Vite 6
- **Animations & Icons:** Framer Motion 12 + Lucide React
- **Styling:** Semantic Vanilla CSS + CSS Design Tokens (`styles.css`)
- **Typography:** Google Fonts (`Anton` display, `Manrope` body, `Caveat` accent)
- **Special Feature:** [Swarmline](https://github.com/imperfec-t/swarmline) autonomous cursor rebuild animation

---

## 🚀 Quick Start

### 1. Development Server
```bash
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Production Build
```bash
npm run build
```
Generates static assets in `dist/`.

### 3. Preview Production Build
```bash
npm run preview
```

---

## 📁 How to Customize & Edit

All content is centralized in dedicated configuration files:

- **Personal Details & Socials:** Edit [`src/config/site.js`](./src/config/site.js) (name, headline, bio, contact links, appearance tokens).
- **Projects:** Add or edit projects in [`src/data/projects.js`](./src/data/projects.js). A commented starter template is provided.
- **Skills:** Modify technical categories in [`src/data/skills.js`](./src/data/skills.js).
- **Education & Milestones:** Update academic details in [`src/data/education.js`](./src/data/education.js).
- **Images & Media:** Place screenshots or covers in `public/assets/projects/`.

---

## 🐝 Swarmline Motion Feature

- Click the **"Motion"** pill button at the top right of the navigation bar (or press `Alt + Shift + L`).
- A swarm of AI cursors will autonomously scan the page, clear it to its backdrop color, and rebuild the interface live with rulers, size badges, typing indicators, and mallet audio!
- Clicking the button again or pressing `Esc` restores the live page immediately.
