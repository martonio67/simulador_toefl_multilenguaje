import { useTranslation } from "next-i18next";
import { appWithTranslation } from "next-i18next";

function Home() {
  const { t } = useTranslation("common");

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-4xl font-bold mb-6 text-blue-700">{t("welcome")}</h1>
      <p className="text-lg mb-4">{t("intro")}</p>
    </div>
  );
}

export default appWithTranslation(Home);
