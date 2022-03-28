import { appWithTranslation } from "next-i18next";
import Link from "next/link";
import { LocaleSwitcher } from "../components/LanguageSwitcher";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div
        style={{
          display: "flex",
          marginTop: "1rem",
          paddingRight: "1rem",
          alignItems: "center",
          justifyContent: "flex-end",
          gap: "2rem",
        }}
      >
        <ul
          style={{
            display: "flex",
            gap: "0.5rem",
            listStyle: "none",
            alignItems: "center",
          }}
        >
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About Us</a>
            </Link>
          </li>
          <li>
            <Link href="/blog/hello-world">
              <a>Blog</a>
            </Link>
          </li>
        </ul>
        <LocaleSwitcher />
      </div>
      <Component {...pageProps} />;
    </>
  );
}

export default appWithTranslation(MyApp);
