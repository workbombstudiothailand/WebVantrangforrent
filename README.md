This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## production

Good news! After inspecting your build output, I found that static HTML files (such as index.html and _not-found.html) are being generated in the directory:
.next/server/app/
This means your Next.js static export is working, but the output is placed in .next/server/app/ instead of .next/output/ (which is a change in Next.js 15+ for app directory projects).
What to do next:
Use the contents of .next/server/app/ (including index.html, _not-found.html, and any other HTML/assets) for deployment.
Upload these files (and any required static assets from .next/static/ and your public/ directory) to your hosting's public_html folder.
Summary of deployment steps:
Copy everything from .next/server/app/ to your hosting's public_html/.
Also copy the contents of .next/static/ and your public/ directory to public_html/ as needed.
Your site should now work as a static site on your shared hosting.