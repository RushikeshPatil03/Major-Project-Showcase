# SmartAttend: Project Showcase Website

Official public showcase website for our academic engineering major project:

> **SmartAttend: A Spatio-Temporal Multi-Factor Verification Framework for Secure Attendance Management**
>
> *Ballari Institute of Technology & Management (BITM), Ballari*  
> *Affiliated to Visvesvaraya Technological University (VTU), Belagavi*  
> *Department of Computer Science & Engineering (Data Science)*  
> *B.E. Final Year Project Exhibition (Academic Year 2025–2026)*

---

## 🌐 Public Deployment & Exhibition QR Code

- **Live Showcase URL:** [https://rushikeshpatil03.github.io/Major-Project-Showcase/](https://rushikeshpatil03.github.io/Major-Project-Showcase/)
- **Live Application Demo:** [https://smartattend.app](https://smartattend.app)
- **Project Walkthrough Video:** [https://youtu.be/MfGXQ6VCg54](https://youtu.be/MfGXQ6VCg54)
- **Research Paper (Google Drive):** [https://drive.google.com/file/d/1km5R-ymdWRwbTcEPnHTCaTiA5yW3ny3A/view?usp=sharing](https://drive.google.com/file/d/1km5R-ymdWRwbTcEPnHTCaTiA5yW3ny3A/view?usp=sharing)
- **Main Application Source Repo:** [https://github.com/RushikeshPatil03/smartattend](https://github.com/RushikeshPatil03/smartattend)
- **Showcase Source Repo:** [https://github.com/RushikeshPatil03/Major-Project-Showcase](https://github.com/RushikeshPatil03/Major-Project-Showcase)

Visitors scanning the QR code on our **5×3 ft exhibition banner** land directly on this website on their mobile devices to explore the architecture, read the research paper, watch the walkthrough, and launch the live application.

---

## 🚀 Quick Start (Local Development)

### 1. Prerequisites
- **Node.js** v18+ or v20+ (tested on Node v20 & v24)
- **npm** v9+

### 2. Installation
```bash
# Clone the showcase repository
git clone https://github.com/RushikeshPatil03/Major-Project-Showcase.git
cd Major-Project-Showcase

# Install dependencies
npm install
```

### 3. Local Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 4. Build for Production
```bash
npm run build
```
The optimized, static single-page bundle will be generated in the `dist/` directory.

### 5. Local Production Preview
```bash
npm run preview
```

---

## ⚙️ Configuration & Content Management

All editable links, team details, research paper paths, and performance metrics are centralized in a single configuration file:

📁 **`src/data/projectConfig.ts`**

### Modifying Key Project Information
To update links or details, open `src/data/projectConfig.ts`:
- **Live Demo Link:** `links.liveDemo`
- **YouTube Video:** `links.youtubeVideoId` (set to your YouTube video ID, e.g. `"dQw4w9WgXcQ"`)
- **Research Paper PDF:** `links.researchPaperPdf` (points to `public/assets/SmartAttend_Research_Paper.pdf`)
- **Team Profiles:** `team` array (update names, USNs, LinkedIn URLs, GitHub URLs, or photos)

### Team Profiles & Portraits
All 4 authentic team portraits are configured in `public/assets/team/`:
- `rushikesh.jpg` — Rushikesh Patil (Team Leader, USN: 3BR23CD077)
- `pramod.jpeg` — S G Pramod (Team Member, USN: 3BR23CD079)
- `shivamani.jpeg` — Shivamani B (Team Member, USN: 3BR23CD089)
- `aravind.jpeg` — Srirama Aravind (Team Member, USN: 3BR23CD092)

---

## 🚢 GitHub Pages Deployment Guide

This project includes an automated GitHub Actions deployment workflow at:
📁 **`.github/workflows/deploy.yml`**

### Setting Up GitHub Pages in Your Repository
1. Push your repository to GitHub:
   ```bash
   git add .
   git commit -m "Initial commit of SmartAttend exhibition showcase"
   git branch -M main
   git remote add origin https://github.com/RushikeshPatil03/Major-Project-Showcase.git
   git push -u origin main
   ```
2. In your GitHub repository:
   - Go to **Settings** &rarr; **Pages** (under Code and automation).
   - Under **Build and deployment**:
     - **Source:** Select **`GitHub Actions`** (do not select "Deploy from a branch").
3. The workflow will automatically trigger on every push to the `main` branch, build the static site with Vite, and publish it to:  
   👉 **`https://rushikeshpatil03.github.io/Major-Project-Showcase/`**

---

## 📱 Exhibition Banner QR Code Guidelines

The showcase includes a built-in banner QR tool accessible from the navigation bar.

### Printing Specifications for 5 ft × 3 ft Banner (60" × 36")
- **Target URL:** `https://rushikeshpatil03.github.io/Major-Project-Showcase/`
- **Minimum Printed Dimensions:** At least **3.5" × 3.5"** (9 cm × 9 cm) to ensure instantaneous scanning from a standing distance of 1.5 to 2.5 meters.
- **Quiet Zone:** Ensure at least **1.5 inches** of clear white border space around the dark QR matrix.
- **Contrast:** High-contrast dark navy (`#0B1120`) or black on pure white (`#FFFFFF`). Never invert QR colors or place the QR over busy background gradients.
- **Pre-Print Verification:** Scan the test print with both an iOS Camera app and an Android Google Lens/camera scanner under varied ambient light conditions before final banner printing.

---

## 📋 Customization Checklist

- [x] Verified exact project title and academic subtitles
- [x] Verified institutional details: BITM Ballari, VTU Belagavi, CSE (Data Science)
- [x] Verified live application demo URL (`https://smartattend.app`)
- [x] Verified main Git source repository (`https://github.com/RushikeshPatil03/smartattend`)
- [x] Linked official Google Drive research paper and bundled backup PDF
- [x] Embedded verified YouTube project walkthrough video (`https://youtu.be/MfGXQ6VCg54`)
- [x] Configured official team LinkedIn profiles for all 4 team members
- [x] Configured authentic team portraits for Rushikesh, Pramod, Shivamani, and Aravind
- [x] Updated USNs (Rushikesh: 3BR23CD077, Pramod: 3BR23CD079, Shivamani: 3BR23CD089, Aravind: 3BR23CD092)
- [x] Configured Team Leader and Team Member roles
- [x] Removed redundant project website screenshots (all diagrams available in paper)
- [x] Deployed and active on GitHub Pages
- [x] Scannable banner QR code verified (`https://rushikeshpatil03.github.io/Major-Project-Showcase/`)

---

## 🏛️ Academic Leadership & Mentorship

- **Project Guide:** Ms. Varsha K, Assistant Professor, Dept. of CSE (Data Science), BITM
- **Project Coordinator:** Dr. Jagadish RM, Professor, Dept. of CSE (Data Science), BITM
- **Department:** Department of Computer Science & Engineering (Data Science)
- **Institution:** Ballari Institute of Technology & Management (BITM), Ballari
