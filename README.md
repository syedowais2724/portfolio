# Syed Owais — Portfolio

A personal portfolio for full-stack engineering, voice systems, AI agents, and mobile product work.

## Run locally

Use Node.js 22 and npm.

```sh
npm ci
npm run dev -- --port 3001
```

## Production build

```sh
npm run build
npm start
```

## Deploy on Vercel

Import `syedowais2724/portfolio` from GitHub. Use the detected Next.js preset, the repository root, and the standard `npm run build` command. Set `NEXT_PUBLIC_SITE_URL` to the final public URL for canonical links and the sitemap. A Git push alone does not publish a deployment.

## Personalize

- Identity, email, profile links and navigation: `src/lib/site.ts`
- Projects and case studies: `src/lib/projects.ts`
- Experience and education: `src/components/sections/AboutMe.tsx`
- Resume download: `public/owais_resume_v2.pdf`
- Illustrative project covers: `public/work/`

Project visuals are labelled illustrations, not screenshots of real customer data. The Double case study describes team contributions, not sole ownership. No unsupported project results or performance metrics have been added.

## Contact behaviour

The contact form opens an email draft in the visitor's email app. The visitor must review and send it there. It does not claim delivery, store messages, or need SMTP credentials. The unused template email endpoint and analytics dependencies were removed.

## Design credit

Adapted from [Aitezaz Sikandar's Portfolio](https://github.com/aitezazdev/Portfolio), used under the MIT licence. The original copyright and licence are preserved in `LICENSE`. Personal content is based on Syed Owais's supplied résumé.

No private API keys or environment files belong in this repository. Keep local test files and generated build output out of commits.
