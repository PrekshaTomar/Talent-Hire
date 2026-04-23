# TalentHire – Candidate Review Dashboard

Video Link- https://drive.google.com/file/d/1cChH3QSz1a-4d2NgMJ1h-OayT5dxhiP3/view?usp=drivesdk
Live - https://talenthiree.netlify.app/



TalentHire is a modern hiring dashboard built to help recruiters efficiently evaluate, compare, and shortlist candidates based on multiple performance metrics.

---

## Features

### Dashboard Overview
- Total Candidates
- Reviewed Candidates
- Shortlisted Candidates
- Pending Candidates
- Analytics charts (Average Scores + Priority Distribution)

---

### Candidate Management
- View all candidates in a structured table
- Search candidates by name
- Filter candidates by:
  - Assignment Score
  - Video Score
  - ATS Score
- Sort candidates by:
  - Priority
  - Assignment Score

---

### Priority Engine
Automatically calculates candidate priority using weighted scoring:

- 30% Assignment Score  
- 25% Video Score  
- 20% ATS Score  
- 15% GitHub Score  
- 10% Communication Score  

Priority Levels:
- P0 → Interview immediately  
- P1 → Strong shortlist  
- P2 → Review later  
- P3 → Reject  

---

### Candidate Detail Panel
- View detailed candidate scores
- Adjust scores using sliders
- Real-time priority update
- Evaluate video performance
- Add notes
- Shortlist candidates

---

### Candidate Comparison
- Select multiple candidates
- Compare scores side-by-side
- Helps in better decision making

---

### Shortlisting System
- Mark candidates as shortlisted
- View all shortlisted candidates separately
- Dashboard updates automatically

---

### Analytics
- Bar chart for average scores
- Pie chart for priority distribution

---

### Additional Features
- Dark Mode toggle
- Persistent data using LocalStorage
- Smooth UI interactions
- Responsive layout

---

## Tech Stack

- React.js (Frontend)
- Vite (Build Tool)
- Recharts (Data Visualization)
- CSS (Styling)

---


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
