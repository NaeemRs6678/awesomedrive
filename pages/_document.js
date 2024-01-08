import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/tw-elements/dist/css/index.min.css"
        />
        <link
          rel="preload"
          href="Sigana.woff"
          as="font"
          type="/fonts/font/woff"
          crossOrigin
        />
        <link
          href="//db.onlinewebfonts.com/c/9dc5a620301a9b7934ea10863bc3efc6?family=Vultura"
          rel="stylesheet"
          type="text/css"
        />
        <Script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js"></Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
