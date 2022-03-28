import { appWithTranslation } from "next-i18next";
import Link from "next/link";
import { LocaleSwitcher } from "../components/LanguageSwitcher";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);
