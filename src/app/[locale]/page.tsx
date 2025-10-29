import {getTranslations} from 'next-intl/server';
import Button from "./components/Button";
import Image from 'next/image';
import { MotionDiv } from "./components/motion";

export default async function HomePage() {
  const t = await getTranslations();
  const serv = ["service1", "service2", "service3", "service4", "service5", "service6"];

  return (
    <div className="bg-surface text-primary">
      <main >
        {/* Hero */}
        <section className="bg-primary min-h-[calc(100svh)] flex items-center">
          <div className="container grid h-full items-center gap-8 md:grid-cols-[2fr_1fr] lg:grid-cols-[3fr_2fr]">
            <MotionDiv 
              className="space-y-6" 
              initial={{ opacity: 0, y: 30, scale: 0.95 }} 
              animate={{ opacity: 1, y: 0, scale: 1 }} 
              transition={{ 
                duration: 0.8, 
                ease: [0.25, 0.46, 0.45, 0.94],
                staggerChildren: 0.15
              }}
            >
              <MotionDiv
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h1 className="font-display text-muted text-4xl md:text-8xl leading-tight tracking-tight">{t("hero.heading")}</h1>
              </MotionDiv>
              <MotionDiv
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <p className="font-display font-semibold md:text-3xl text-muted">{t("hero.tagline")}</p>
              </MotionDiv>
              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Button variant="secondary" href="/contact">{t("hero.cta")}</Button>
              </MotionDiv>
            </MotionDiv>
            <MotionDiv
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="justify-self-end"
            >
              <Image src="/logo_aequalis.png" alt="Aequalis Advocades Logo" width={500} height={500} priority className="w-full max-w-sm h-auto object-contain" />
            </MotionDiv>
          </div>
        </section>

        {/* Featured services */}
        <section className="py-16 md:py-24 bg-surface">
          <div className="container space-y-12">
            <div className="space-y-2 text-center max-w-2xl mx-auto">
              <h2 className="font-display font-semibold text-3xl md:text-4xl leading-tight tracking-tight text-primary">
                {t("home.featuredServices")}
              </h2>
              <p className="text-base md:text-lg text-primary/70 leading-relaxed">
                {t("home.featuredServDesc")}
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {serv.slice(0, 6).map((service, i) => (
                <MotionDiv
                  key={service}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    opacity: { duration: 0.5, delay: i * 0.1 },
                    y: { duration: 0.5, delay: i * 0.1 },
                    scale: { duration: 0.3 }
                  }}
                  className="group relative rounded-2xl border border-border bg-white p-6 md:p-8 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 cursor-pointer"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center group-hover:bg-border transition-colors">
                      <span className="text-2xl text-primary font-display font-semibold">
                        {i + 1}
                      </span>
                    </div>
                    <h3 className="font-display font-semibold text-lg md:text-xl leading-tight text-primary">
                      {t(`services.services.${service}.title`)}
                    </h3>
                    <p className="text-sm md:text-base text-primary/70 leading-relaxed">
                      {t(`services.services.${service}.desc`)}
                    </p>
                  </div>
                </MotionDiv>
              ))}
            </div>
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex justify-center mt-8"
            >
              <Button variant="primary" href="/services">
                {t("common.learnMore")}
              </Button>
            </MotionDiv>
          </div>
        </section>

        {/* Intro */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container">
            <div className="grid gap-12 md:grid-cols-[1fr_2fr] items-center">
              <MotionDiv
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="flex justify-center"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-border rounded-full blur-3xl"></div>
                  <Image 
                    src="/logo_aequalis.png" 
                    alt="Aequalis Advocades Logo" 
                    width={400} 
                    height={400} 
                    className="relative w-full max-w-sm h-auto object-contain drop-shadow-xl" 
                  />
                </div>
              </MotionDiv>
              
              <MotionDiv
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="space-y-6"
              >
                <div className="space-y-3">
                  <h2 className="text-primary font-display font-semibold text-3xl md:text-4xl leading-tight">
                    {t("home.introTitle")}
                  </h2>
                  <p className="text-base md:text-lg text-primary/80 leading-relaxed">
                    {t("home.introBody")}
                  </p>
                </div>
                
                <div className="space-y-4 pt-4">
                  <MotionDiv
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-10 h-10 rounded-lg bg-border flex items-center justify-center shrink-0 mt-1">
                      <span className="text-xl">✓</span>
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-lg text-primary mb-1">
                        Professional Excellence
                      </h3>
                      <p className="text-sm md:text-base text-primary/70">
                        Over 15 years of combined experience in immigration law, providing expert guidance tailored to your unique situation.
                      </p>
                    </div>
                  </MotionDiv>

                  <MotionDiv
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-10 h-10 rounded-lg bg-border flex items-center justify-center shrink-0 mt-1">
                      <span className="text-xl">✓</span>
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-lg text-primary mb-1">
                        Client-Centered Approach
                      </h3>
                      <p className="text-sm md:text-base text-primary/70">
                        We prioritize clear communication and personalized support, ensuring you feel confident throughout every step of the process.
                      </p>
                    </div>
                  </MotionDiv>

                  <MotionDiv
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-10 h-10 rounded-lg bg-border flex items-center justify-center shrink-0 mt-1">
                      <span className="text-xl">✓</span>
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-lg text-primary mb-1">
                        Proven Track Record
                      </h3>
                      <p className="text-sm md:text-base text-primary/70">
                        Hundreds of successful cases, from residence permits to Spanish nationality, with a focus on achieving the best outcomes for our clients.
                      </p>
                    </div>
                  </MotionDiv>
                </div>

                <MotionDiv
                  className="pt-4 flex justify-center"
                >
                  <Button variant="primary" href="/about">
                    {t("nav.about")}
                  </Button>
                </MotionDiv>
              </MotionDiv>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
