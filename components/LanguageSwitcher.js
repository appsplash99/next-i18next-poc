import { useRouter } from "next/router";

export const LocaleSwitcher = () => {
  const router = useRouter();
  const {
    locale, // selected language
    locales, // total langage options from config
    defaultLocale, // preffered language from browser
  } = useRouter();

  const handleChangeLanguage = (e) => {
    router.push(router.pathname, router.asPath, { locale: e.target.value });
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        alignSelf: "flex-end",
        marginBottom: "1.5rem",
      }}
    >
      <label>Choose a Language:</label>
      <select value={locale} onChange={(e) => handleChangeLanguage(e)}>
        <option value="en">English</option>
        <option value="fr">{"French - français"}</option>
        <option value="hi">{"Hindi - हिन्दी"}</option>
        <option value="tm">{"Tamil - தமிழ்"}</option>
      </select>
    </div>
  );
};
