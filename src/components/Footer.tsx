export default function Footer() {
  return (
    <footer className="w-full  bg-gray-700 grid place-items-center">
      <div className="py-5 mx-4 md:py-10 text-center text-white text-xs leading-5 md:leading-7 md:text-base">
        <p>
          プリキュアは
          <a className="text-sky-200" href="https://www.toei-anim.co.jp/">
            東映アニメーション株式会社
          </a>
          の登録商標です。
        </p>
        <p>
          当サイトは個人ファンサイトであり、
          <a className="text-sky-200" href="https://www.toei-anim.co.jp/">
            株式会社東映アニメーション
          </a>
          他企業様とは一切関係ありません。下記はサイト独自の内容に関する著作権を示すものです。
        </p>
        <p>
          お問い合わせは
          <a
            className="text-sky-200"
            href="https://docs.google.com/forms/d/e/1FAIpQLSfz54hnaQKdKMmkc5ZbZLub4NHwYo3rxcoFEUWBYM84VcC7-Q/viewform?usp=sf_link"
          >
            こちら
          </a>
          にお願いします。
        </p>
        <p>
          © 2023{" "}
          <a className="text-sky-200" href="https://twitter.com/mu_tomoya">
            @mu_tomoya
          </a>
        </p>
      </div>
    </footer>
  );
}
