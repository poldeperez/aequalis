import { getTranslations } from "next-intl/server";
import { MotionDiv } from "../components/motion";
import CTA from "../components/CTA";
import Image from 'next/image';

export default async function AboutPage() {
  const t = await getTranslations("about");

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

        {/* About me Section */}
        <section className="py-10 md:py-16 bg-surface">
          <div className="container max-w-5xl">
              {/* Grid */}
              <div className="grid gap-8 md:gap-14 md:grid-cols-[1fr_3fr] items-center">
                <div className="flex justify-center">
                  <Image src="/about_gemma.jpeg" alt="Gemma Regol" width={400} height={400} className="w-full max-w-md h-auto rounded-2xl" />
                </div>

                <div className="space-y-4">
                  <p className="text-base md:text-md text-primary/80 leading-relaxed">
                    {t.rich("aboutme1", {
                      b: (chunks) => <strong>{chunks}</strong>
                    })}
                  </p>
                  <p className="text-base md:text-md text-primary/80 leading-relaxed">
                    {t.rich("aboutme2", {
                      b: (chunks) => <strong>{chunks}</strong>
                    })}
                  </p>
                  <p className="text-base md:text-md text-primary/80 leading-relaxed">
                    {t.rich("aboutme3", {
                      b: (chunks) => <strong>{chunks}</strong>
                    })}
                  </p>
                  <p className="text-base md:text-md text-primary/80 leading-relaxed">
                    {t.rich("aboutme4", {
                      b: (chunks) => <strong>{chunks}</strong>
                    })}
                  </p>
                </div>
              </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-4 md:py-8">
          <div className="container">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="bg-accent rounded-3xl p-6 md:p-12 text-center space-y-6 shadow-lg"
            >
              <div className="text-center">
                <h2 className="font-display text-secondary/80 font-semibold text-3xl md:text-4xl mb-4">
                  {t("mission.title")}
                </h2>
              </div>
              <div className="space-y-6">
                <p className="text-base md:text-md text-muted/80 leading-relaxed">
                  {t.rich("mission.paragraph1", {
                      b: (chunks) => <strong>{chunks}</strong>
                    })}
                </p>
                <p className="text-base md:text-md text-muted/80 leading-relaxed">
                  {t.rich("mission.paragraph2", {
                      b: (chunks) => <strong>{chunks}</strong>
                    })}
                </p>
              </div>
              <MotionDiv
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-center justify-center border-t border-muted/40 max-w-4xl mx-auto pt-4 gap-6"
              >
                <div className="flex items-center justify-center w-12 h-12 shrink-0 rounded-xl bg-muted/90 text-primary font-display font-semibold text-lg">
                  Æ
                </div>
                <p className="text-base md:text-md text-muted/80 leading-relaxed">
                  {t("etymology.aequalis")}
                </p>
              </MotionDiv>
            </MotionDiv>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-10 md:py-16 bg-surface">
          <div className="container max-w-5xl">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="space-y-12"
            >
              {/* Partners Title */}
              <div className="text-center">
                <h2 className="font-display font-semibold text-3xl md:text-4xl mb-4">
                  Partners
                </h2>
              </div>

              {/* Partners Grid */}
              <div className="grid gap-8 md:grid-cols-[1fr_4fr] items-center">
                <MotionDiv
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="flex justify-center"
                >
                  <Image src="/4braves.png" alt="Logo 4braves" width={200} height={200} className="max-w-full h-auto" />
                </MotionDiv>

                <MotionDiv
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="space-y-4"
                >
                  <h3 className="font-semibold text-xl md:text-2xl text-primary">
                    4 Braves España — Agencia de Estudios Internacionales 
                  </h3>
                  <p className="text-base md:text-md text-primary/80 leading-relaxed">
                    {t.rich("4braves1", {
                      b: (chunks) => <strong>{chunks}</strong>
                    })}
                  </p>
                  <p className="text-base md:text-md text-primary/80 leading-relaxed">
                    {t.rich("4braves2", {
                      b: (chunks) => <strong>{chunks}</strong>
                    })}
                  </p>
                  <p className="text-base md:text-md text-primary/80 leading-relaxed">
                    {t.rich("4braves3", {
                      b: (chunks) => <strong>{chunks}</strong>
                    })}
                  </p>
                </MotionDiv>
              </div>
            </MotionDiv>
          </div>
        </section>

        <CTA />
      </main>
    </div>
  );
}
