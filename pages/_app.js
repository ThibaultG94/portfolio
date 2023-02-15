import Script from "next/script";
import Layout from "../components/Layout";
import "../style/index.scss";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-E0TWC6JFDC"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
			window.dataLayer = window.dataLayer || [];
    		function gtag() {window.dataLayer.push(arguments);}
			gtag("js", new Date());

    		gtag("config", "G-E0TWC6JFDC");
			`}
      </Script>
      <Component {...pageProps} />
    </Layout>
  );
}
