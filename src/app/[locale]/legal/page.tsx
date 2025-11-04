import { getTranslations } from "next-intl/server";
import { MotionDiv } from "../components/motion";

export default async function LegalPage() {
  const t = await getTranslations("legal");

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
                <div>
                  <h2 className="font-display font-semibold text-lg md:text-xl mb-4">
                    {t("section1.title")}
                  </h2>
                  <p className="text-base md:text-md text-primary/80 leading-relaxed">
                    {t("section1.content")}
                  </p>
                </div>

                <div>
                  <h2 className="font-display font-semibold text-lg md:text-xl mb-4">
                    {t("section2.title")}
                  </h2>
                  <p className="text-base md:text-md text-primary/80 leading-relaxed">
                    {t("section2.content")}
                  </p>
                  <p className="text-base md:text-md text-primary/80 leading-relaxed">
                    {t("section2.content2")}
                  </p>
                </div>

                <div>
                  <h2 className="font-display font-semibold text-lg md:text-xl mb-4">
                    {t("section3.title")}
                  </h2>
                  <p className="text-base md:text-md text-primary/80 leading-relaxed">
                    {t("section3.content")}
                  </p>
                </div>

                <div>
                  <h2 className="font-display font-semibold text-lg md:text-xl mb-4">
                    {t("section4.title")}
                  </h2>
                  <p className="text-base md:text-md text-primary/80 leading-relaxed">
                    {t("section4.content")}
                  </p>
                </div>

                <div>
                  <h2 className="font-display font-semibold text-lg md:text-xl mb-4">
                    {t("section5.title")}
                  </h2>
                  <p className="text-base md:text-md text-primary/80 leading-relaxed">
                    {t("section5.content")}
                  </p>
                </div>
                <div>
                  <h2 className="font-display font-semibold text-lg md:text-xl mb-4">
                    {t("section6.title")}
                  </h2>
                  <p className="text-base md:text-md text-primary/80 leading-relaxed">
                    {t("section6.content")}
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
