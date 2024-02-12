import "../styles/slick.css";
import "@/styles/globals.css";

import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import Layout from "../components/layout/layout";
import { GoogleAnalytics } from "nextjs-google-analytics";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <GoogleAnalytics
        trackPageViews={{ ignoreHashChange: true }}
        gaMeasurementId={`${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
