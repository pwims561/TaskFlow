# 🗂️ TaskFlow
**A Tiered Planner Web Application**  
Built by **Team #10** — Kennesaw State University  
*(Project Manager: Princess Wims)*

## 🌟 Overview
TaskFlow is a web-based planner application designed to help users organize tasks efficiently by priority level and deadline urgency. It introduces a three-tier task system (Low, Medium, High) and a “What’s Next?” suggestion engine to guide users toward their most important tasks.

## ⚙️ Tech Stack
- **Frontend:** React, Next.js  
- **Backend:** Supabase (Auth, Postgres, Edge Functions)  
- **Hosting:** Vercel  
- **Collaboration:** GitHub, Figma, GroupMe  
- **Testing:** Jest / Playwright (planned)

## 🧩 Major Features (MVP)
✅ CRUD planners & tasks  
✅ Priority tiers (Low / Med / High) w/ color coding  
✅ Deadlines, notes, categories  
✅ Completed Tasks Sidebar  
✅ “What’s Next?” suggestion (weighted score)  
✅ Dark/Light mode  
✅ Help button  
✅ Auth via Supabase  

## 👥 Team Members
| Name | Role | Key Skills |
|------|------|------------|
| **Princess Wims** | Project Manager / Lead | Agile PM, coordination, GitHub, documentation |
| **Cole Williams** | Frontend 1 (UI/UX & App Logic) | React, Next.js, Figma, CSS |
| **Michael Youmans** | Frontend 2 (Features & Integration) | React components, state management, API integration |
| **Michael Woodall** | Backend 1 (Authentication & API) | Supabase Auth, Postgres, API development |
| **Julian Williams** | Backend 2 (Data & Logic, Security) | SQL, Edge Functions, validation, security |
| **Aaron Yang** | QA / Tester | Unit testing, integration, debugging, responsiveness |

## 🧠 Core Logic Highlight
```js

git clone https://github.com/pwims561/TaskFlow.git
cd TaskFlow
npm install
npm run dev


---

### ✅ Option 2 — Edit Locally (in your computer)
If you prefer doing it in Command Prompt:
```cmd
notepad README.md
git add README.md
git commit -m "Updated README.md with full TaskFlow project details"
git push

attention_score = priority_value / time_until_deadline

