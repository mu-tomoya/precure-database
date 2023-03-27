import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ja">
      <Head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/yakuhanjp@3.4.1/dist/css/yakuhanjp.min.css" />
      </Head>
      <body className="font-body text-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
