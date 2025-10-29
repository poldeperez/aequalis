import { getTranslations } from "next-intl/server";
import { MotionDiv } from "../components/motion";

export default async function AboutPage() {
  const t = await getTranslations("about");
  const values = t.raw("values") as string[];

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
                {t("founderNote")}
              </p>
            </MotionDiv>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 md:py-24">
          <div className="container max-w-4xl">
              <div className="text-center">
                <h2 className="font-display font-semibold text-3xl md:text-4xl mb-4">
                  {t("mission.title")}
                </h2>
              </div>
              <div className="space-y-6">
                <p className="text-lg md:text-xl text-primary leading-relaxed">
                  {t("mission.paragraph1")}
                </p>
                <p className="text-lg md:text-xl text-primary leading-relaxed">
                  {t("mission.paragraph2")} <span className="font-semibold text-primary">{values.join(", ")}</span>.
                </p>
              </div>
          </div>
        </section>

        {/* Etymology Section */}
        <section className="py-16 md:py-24">
          <div className="container max-w-4xl">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="space-y-8"
            >
              <div className="text-center">
                <h2 className="font-display font-semibold text-3xl md:text-4xl mb-4">
                  {t("etymology.title")}
                </h2>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <MotionDiv
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="rounded-2xl border border-border bg-white p-8 shadow-sm"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent text-secondary font-display font-semibold text-lg mb-4">
                    Æ
                  </div>
                  <p className="text-primary leading-relaxed">
                    {t("etymology.aequalis")}
                  </p>
                </MotionDiv>

                <MotionDiv
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="rounded-2xl border border-border bg-white p-8 shadow-sm"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent text-secondary font-display font-semibold text-lg mb-4">
                    A
                  </div>
                  <p className="text-primary leading-relaxed">
                    {t("etymology.advocades")}
                  </p>
                </MotionDiv>
              </div>
            </MotionDiv>
          </div>
        </section>
      </main>
    </div>
  );
}
