import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>プリキュアデータベース</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:url" content="https://precure-database.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="プリキュアデータベース" />
        <meta property="og:site_name" content="プリキュアデータベース" />
        <meta property="og:image" content="https://precure-database.vercel.app/ogp.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-second grid h-screen content-center justify-center gap-16">
        <h1 className="text-white text-3xl md:text-5xl font-bold">プリキュアデータベース</h1>
        <div className="flex place-self-center">
          <Link href={"/precure"}>
            <section className="font-bold text-xl md:text-3xl border-2 rounded-2xl py-5 md:py-10 px-4 md:px-8 border-main bg-white">
              プリキュアを検索
            </section>
          </Link>
        </div>
      </div>
    </>
  );
}
