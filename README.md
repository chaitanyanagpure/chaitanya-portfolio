# Chaitanya Nagpure | AI & ML Engineer Portfolio

A premium, interactive, and fully responsive personal portfolio website showcasing AI/ML engineering specialties, production-ready system architectures, verified certification matrices, and detailed case studies. Built with **Next.js 15**, **React 19**, **Tailwind CSS v4**, and **Framer Motion**.

---

## 🚀 Key Features

*   **Apple-Inspired Dark Aesthetic**: Modern graphite theme with translucent glassmorphism panels, backdrop blurs, and animated mesh background gradients.
*   **Tactile Spring Physics**: High-performance interactive transitions (using `framer-motion` spring mechanics) triggered on badge hovers (desktop) and card taps (mobile).
*   **Production AI Project Showcase**: Category-based dynamic project grids with deep-dive case study modals, inline system architectures, and Google Drive CDN image rendering.
*   **Verified Certification Matrix**: Dynamic course credentials preview grid featuring verified logo initial fallbacks and direct verification links.
*   **SMTP Contact Form Integration**: Secure backend email submission pipeline (SMTP) utilizing **Nodemailer** to forward inquiries instantly to your email inbox.
*   **Fully Mobile Responsive**: Extensively optimized responsive viewports (from 320px iPhone SE to 4K desktops) with zero horizontal overflows or rendering lag.
*   **Performance Engineered**: Scroll event throttling using `requestAnimationFrame`, passive event listeners, and mobile GPU memory optimizations (blur filter reductions).

---

## 🛠️ Technology Stack

*   **Framework**: Next.js 15 (App Router)
*   **Library**: React 19
*   **Styling**: Tailwind CSS v4
*   **Animations**: Framer Motion
*   **Iconography**: Lucide React
*   **Mail Transfer**: Nodemailer (SMTP Gateway)
*   **Language**: TypeScript

---

## 💻 Local Installation & Setup

1.  **Clone the Repository**:
    ```bash
    git clone https://github.com/your-username/my-portfolio.git
    cd my-portfolio
    ```

2.  **Install Dependencies**:
    ```bash
    npm install
    ```

3.  **Configure Environment Variables**:
    Create a `.env` file in the root directory by duplicating the example configuration:
    ```bash
    cp .env.example .env
    ```
    Open `.env` and fill in your SMTP credentials:
    ```text
    EMAIL_USER=your-email@gmail.com
    EMAIL_PASS=your-16-character-gmail-app-password
    EMAIL_TO=recipient-email@gmail.com
    ```

4.  **Run the Development Server**:
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) in your web browser.

5.  **Compile Production Build**:
    ```bash
    npm run build
    ```

---

## ⚙️ Customizing Portfolio Data

All project details, biography snippets, and timeline entries are completely static and can be customized by editing the files inside the `src/data/` directory:

*   **Personal Biography & Links**: Modify [personalInfo.ts](file:///Users/chaitanyakailasnagpure/Documents/My%20Portfolio/src/data/personalInfo.ts)
*   **AI/ML Projects & Diagrams**: Modify [projects.ts](file:///Users/chaitanyakailasnagpure/Documents/My%20Portfolio/src/data/projects.ts)
*   **Professional Work Experience**: Modify [experience.ts](file:///Users/chaitanyakailasnagpure/Documents/My%20Portfolio/src/data/experience.ts)
*   **Academic History**: Modify [education.ts](file:///Users/chaitanyakailasnagpure/Documents/My%20Portfolio/src/data/education.ts)
*   **Industry Certifications**: Modify [certifications.ts](file:///Users/chaitanyakailasnagpure/Documents/My%20Portfolio/src/data/certifications.ts)
*   **Skill Categories**: Modify [skills.ts](file:///Users/chaitanyakailasnagpure/Documents/My%20Portfolio/src/data/skills.ts)

---

## 🌐 Deployment (Vercel + GoDaddy Custom Domain)

### Step 1: Deploy on Vercel
1. Sign up on [Vercel](https://vercel.com) using your GitHub account.
2. Click **Add New** > **Project** and import your repository.
3. Add the keys from your `.env` file (`EMAIL_USER`, `EMAIL_PASS`, `EMAIL_TO`) inside Vercel's **Environment Variables** panel.
4. Click **Deploy**. Vercel will build your project and assign a preview subdomain.

### Step 2: Hook up your GoDaddy Domain
1. In your Vercel project dashboard, go to **Settings** > **Domains**.
2. Add your custom domain (e.g. `yourdomain.com`).
3. Log into GoDaddy, open your **DNS Management Console**, and configure these two settings:
    *   **A Record**: Set **Name** to `@` and **Value** to Vercel's IP address: `76.76.21.21`
    *   **CNAME Record**: Set **Name** to `www` and **Value** to Vercel's redirect target: `cname.vercel-dns.com`
4. Once Vercel detects DNS updates, it provision a free SSL certificate (HTTPS) and route traffic live.
