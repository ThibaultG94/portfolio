import { Html, Head, Main, NextScript } from "next/document";
import GoogleScript from "../components/GoogleScript";

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <GoogleScript />
      </body>
    </Html>
  );
}
