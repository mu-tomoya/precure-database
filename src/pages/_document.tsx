import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ja">
      <Head>
        <meta name="google-site-verification" content="Q3p-7FTQZhTsVUYwomMTrjXSBYb6_eJrcIWpTROve4c" />
        <meta property="og:url" content="https://precure-database.vercel.app" />
        <meta property="og:site_name" content="プリキュアデータベース" />
        <meta property="og:image" content="https://precure-database.vercel.app/ogp.png" />
        <meta property="og:type" content="website" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@mu_tomoya" />
        <meta name="twitter:image" content="https://precure-database.vercel.app/ogp.png" />
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/yakuhanjp@3.4.1/dist/css/yakuhanjp.min.css" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="font-body text-black min-h-screen">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
