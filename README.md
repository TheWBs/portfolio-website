# Jokūbas Griežė Portfolio Website

A recruiter-focused personal portfolio website for Jokūbas Griežė, built to show practical work across data analytics, BI, analytics engineering, and data engineering.

The site uses React + Vite because this folder had no existing website stack, and Vite produces a simple static build that is easy to run locally and deploy for free.

## What Is Included

- Homepage hero with CV, LinkedIn, GitHub, email, and phone contact links
- About, skills, projects, experience, education, and contact sections
- Case-study style project cards based on the CV, LinkedIn text, and public GitHub repositories
- Local copies of the CV and project screenshots under `public/assets`
- Basic SEO tags and Open Graph metadata
- Responsive layout for desktop and mobile

## Install Dependencies

```powershell
pnpm install
```

If `pnpm` is not available, install Node.js and run:

```powershell
npm install
```

## Run Locally

```powershell
pnpm dev
```

Open the URL shown in the terminal, usually:

```text
http://localhost:5173
```

## Build

```powershell
pnpm build
```

The production files will be created in `dist/`.

## Preview The Production Build

```powershell
pnpm preview
```

## Test Before Publishing

```powershell
pnpm lint
pnpm build
```

Then open the local dev or preview site and review:

- CV link opens correctly
- Email, phone, LinkedIn, and GitHub links work
- Project screenshots load
- Mobile layout looks good
- No private or client-confidential information is shown

## Files To Edit Later

- Main content and project data: `src/main.jsx`
- Visual styling: `src/styles.css`
- SEO title and meta description: `index.html`
- CV file: `public/assets/cv/jokubas-grieze-cv.pdf`
- Project screenshots: `public/assets/projects/`

## Free Deployment Options

This is a static site and can be hosted for free on GitHub Pages, Vercel, or Netlify.

### Deploy To GitHub Pages

This folder is not currently a Git repository, so first create a GitHub repository for the portfolio.

1. Create a new repository on GitHub, for example `portfolio`.
2. In this folder, initialize Git:

```powershell
git init
git add .
git commit -m "Build portfolio website"
git branch -M main
git remote add origin https://github.com/TheWBs/portfolio.git
git push -u origin main
```

3. The GitHub Actions workflow is already included at `.github/workflows/deploy.yml`.
4. In GitHub, open the repository settings.
5. Go to **Pages**.
6. Under **Build and deployment**, set **Source** to **GitHub Actions**.
7. Push to `main`. GitHub Actions will build and publish the site.

### Deploy To Vercel

1. Push this project to GitHub.
2. Go to [Vercel](https://vercel.com/).
3. Import the GitHub repository.
4. Use the default Vite settings:
   - Build command: `pnpm build`
   - Output directory: `dist`
5. Deploy.

### Deploy To Netlify

1. Push this project to GitHub.
2. Go to [Netlify](https://www.netlify.com/).
3. Import the GitHub repository.
4. Use:
   - Build command: `pnpm build`
   - Publish directory: `dist`
5. Deploy.

## Assumptions

- The site is in English.
- The phone number can be shown publicly because it was explicitly requested.
- The Prodivi internship is the only experience item from the CV.
- No completed certifications are listed because the provided files did not prove any.
- Project impact is stated only where supported by repository README content or the CV.
