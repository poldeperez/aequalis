import { getTranslations } from "next-intl/server";
import { MotionDiv } from "../components/motion";

export default async function PrivacyPage() {
  const t = await getTranslations("privacy");

  return (
    <div className="bg-surface text-primary">
      <main>
        {/* Hero Banner */}
        <section className="bg-primary pt-32 pb-20">
          <div className="container">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="max-w-3xl mx-auto text-center space-y-4"
            >
              <h1 className="font-display font-semibold text-4xl md:text-6xl leading-tight tracking-tight text-secondary">
                {t("title")}
              </h1>
              <p className="text-lg md:text-xl text-secondary/80 leading-relaxed">
                {t("subtitle")}
              </p>
            </MotionDiv>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 md:py-24">
          <div className="container max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <div className="space-y-8">
                <div className="font-display font-semibold text-2xl md:text-3xl mb-4">
                    <h2 className="font-display font-semibold text-2xl md:text-3xl mb-4">{t("priv_protec")}</h2>
                    <p className="text-base md:text-lg text-primary/80 leading-relaxed">
                        {t("priv_protec_text")}
                    </p>
                </div>
                    <div>
                        <h3 className="font-display font-semibold text-2xl md:text-3xl mb-4">
                            {t("section1.title")}
                        </h3>
                        <p className="text-base md:text-lg text-primary/80 leading-relaxed">
                            {t("section1.content")}
                        </p>
                        <div>
                            {t.rich("section1.bullets", {
                                b: (chunks) => <strong>{chunks}</strong>,
                                ul: (chunks) => <ul className="list-disc pl-5 pt-2">{chunks}</ul>,
                                li: (chunks) => <li>{chunks}</li>
                            })}
                        </div>
                    </div>

                    <div>
                    <h3 className="font-display font-semibold text-2xl md:text-3xl mb-4">
                        {t("section2.title")}
                    </h3>
                    <div className="text-base md:text-lg text-primary/80 leading-relaxed">
                        {t.rich("section2.content", {
                                b: (chunks) => <strong>{chunks}</strong>,
                                ul: (chunks) => <ul className="list-disc pl-5 pt-2">{chunks}</ul>,
                                li: (chunks) => <li>{chunks}</li>
                        })}
                    </div>
                    </div>

                    <div>
                    <h3 className="font-display font-semibold text-2xl md:text-3xl mb-4">
                        {t("section3.title")}
                    </h3>
                    <p className="text-base md:text-lg text-primary/80 leading-relaxed">
                        {t("section3.content")}
                    </p>
                    </div>

                    <div>
                        <h3 className="font-display font-semibold text-2xl md:text-3xl mb-4">
                            {t("section4.title")}
                        </h3>
                        <p className="text-base md:text-lg text-primary/80 leading-relaxed">
                            {t("section4.content")}
                        </p>
                        <div>
                            {t.rich("section4.bullets", {
                                b: (chunks) => <strong>{chunks}</strong>,
                                ul: (chunks) => <ul className="list-disc pl-5 pt-2">{chunks}</ul>,
                                li: (chunks) => <li>{chunks}</li>
                            })}
                        </div>
                    </div>

                    <div>
                    <h3 className="font-display font-semibold text-2xl md:text-3xl mb-4">
                        {t("section5.title")}
                    </h3>
                    <p className="text-base md:text-lg text-primary/80 leading-relaxed">
                        {t("section5.content")}
                    </p>
                    </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
