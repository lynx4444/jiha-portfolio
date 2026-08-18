# ✨ Iqbal Najihah — Personal Portfolio Website

A warm, modern, and responsive single-page portfolio website for **Iqbal Najihah Binti Samsul Kamal** — Business Analyst / Requirement Engineer and final-year Computer Science (Data Science & Computational Intelligence) student at the International Islamic University Malaysia (IIUM).

---

## 🌸 Overview & Design Direction

The portfolio is crafted around an inviting **"simple & cute"** aesthetic with a soft ivory and warm beige foundation, paired with dusty rose highlights and muted sage accents:

- **Soft Ivory White** (`#FDFBF7`) — Main background
- **Warm Beige** (`#F3EDE4`) — Alternating section backgrounds
- **Warm Near-Black** (`#3A342C`) — High-contrast, gentle typography
- **Dusty Rose** (`#D8A7A0`) — Primary interactive buttons, badges, and key accents
- **Muted Sage** (`#A8B89F`) — Skill tags, secondary highlights, and leaf doodles
- **Typography** — Google Fonts pairing with rounded display faces (**Quicksand** & **Fredoka**) and clean, legible body text (**Nunito Sans**).
- **Subtle Micro-Interactions** — Custom hand-drawn SVG sparkles, squiggles, stars, and smooth scroll spy navigation.

---

## 📑 Portfolio Sections

1. **Hero** — Professional introduction, current role availability badge, location (*Klang, Selangor, Malaysia*), CGPA 3.79 highlight, and direct call-to-actions.
2. **About** — Narrative bridging business strategy and technical systems, outlining four core competency pillars (Requirement Engineering, Stakeholder Facilitation, Agile Backlog Delivery, Data & Technical Acumen).
3. **Experience** — Timeline spotlighting her **Requirement Engineer Internship** at **GovTech Malaysia (Nucleus Unit) — Ministry of Digital**, detailing BRS/SRS/SDS authoring, Jira/Plane sprint tracking, and interactive data visualization spikes.
4. **Featured Projects (Case Studies)** — 3 interactive project cards with deep-dive modals:
   - **IIUM Monitoring of Academic Programmes**: End-to-end requirement engineering digitizing manual workflows (30+ functional requirements elicited).
   - **NotaBee**: Prototyped in Figma with focus on note-taking usability and design systems.
   - **Multimedia Fake News Detection System**: Deep learning classification using PyTorch & Torchvision.
5. **Skills & Competencies** — Filterable tag/pill groups across *Business Analysis*, *Tools*, *Technical*, and *Soft Skills*.
6. **Education** — Academic journey at IIUM (Bachelor of Computer Science, CGPA 3.79 with Dean's List honors every semester, and CFS IIUM Foundation).
7. **Achievements & Involvement** — Academic recognition, International Robotic Competition Judge (2024 & 2025), committee leadership (SCITECH 10.0, I-HAX, Sports Carnival), and community volunteering.
8. **Contact & Footer** — 1-click email copy button with toast feedback (`baljiyahsk@gmail.com`), LinkedIn profile connection, and quick message inquiry form.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Bundler & Dev Server**: [Vite](https://vite.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: [Google Fonts](https://fonts.google.com/) (Quicksand, Fredoka, Nunito Sans)

---

## 📁 Project Structure

```text
jiha-portfolio/
├── public/               # Static assets & favicon
├── src/
│   ├── components/
│   │   ├── About.jsx        # About section & core competency pillars
│   │   ├── Achievements.jsx # Awards, judging & committee involvement
│   │   ├── Contact.jsx      # Direct email, copy tool, LinkedIn & inquiry form
│   │   ├── Doodles.jsx      # Custom hand-drawn SVG sparkles, squiggles & stars
│   │   ├── Education.jsx    # Degree, Foundation & Dean's List accolades
│   │   ├── Experience.jsx   # GovTech Malaysia / Ministry of Digital timeline
│   │   ├── Footer.jsx       # Footer credits & back-to-top button
│   │   ├── Hero.jsx         # Hero introduction & action buttons
│   │   ├── Navbar.jsx       # Sticky glassmorphism nav with mobile drawer
│   │   ├── Projects.jsx     # Case studies grid with interactive detail modals
│   │   └── Skills.jsx       # Category-filtered skill tags
│   ├── App.jsx              # Main layout assembler
│   ├── index.css            # Tailwind directives, theme variables & utilities
│   └── main.jsx             # React DOM entry point
├── index.html            # HTML shell with Google Fonts & SEO metadata
├── package.json          # Dependencies & npm scripts
├── vite.config.js        # Vite configuration with React and Tailwind plugins
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18.0.0 or higher)
- npm (v9.0.0 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/lynx4444/jiha-portfolio.git
   cd jiha-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. Build for production:
   ```bash
   npm run build
   ```

5. Preview production build locally:
   ```bash
   npm run preview
   ```

---

## 📬 Contact & Connect

- **Email**: [baljiyahsk@gmail.com](mailto:baljiyahsk@gmail.com)
- **LinkedIn**: [linkedin.com/in/jiha-kamal-b8452226a](https://linkedin.com/in/jiha-kamal-b8452226a)
- **Location**: Klang, Selangor, Malaysia