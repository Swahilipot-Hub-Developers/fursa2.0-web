// pages/_app.js
import { SessionProvider } from "next-auth/react";
import "../styles/scss/theme.scss";
import "../styles/globals.css";
import { useEffect } from "react";
import Layout from "../layout/Layout";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <SessionProvider session={pageProps.session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}

export default MyApp;
