This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Setup

1. yarn create-next-app next-i18next-poc
2. yarn add next-i18next
3. setup `next-id8next.config.js`
4. add translations in `public/locales`
5. consume with `useTranslation` hook from `next-i18next` package

## current-features

1. default sub-path routing via [NextJS i18n](https://nextjs.org/docs/advanced-features/i18n-routing#sub-path-routing)
2. default automatic language(locale) detection via [NextJS](https://nextjs.org/docs/advanced-features/i18n-routing#automatic-locale-detection)
3. scalable Language Translation from [next-i18next](https://github.com/isaachinman/next-i18next)

## upcoming features

1. fetch and consume crowdin translations(in json format) from Crowdin via API/CDN
