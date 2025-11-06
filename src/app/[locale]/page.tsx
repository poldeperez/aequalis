import {getTranslations} from 'next-intl/server';
import Button from "./components/Button";
import Image from 'next/image';
import { MotionDiv } from "./components/motion";
import CTA from "./components/CTA";
import { generateOrganizationSchema, generateWebPageSchema } from "@/lib/schema";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const resolved = 'then' in params ? await params : params;
  const locale = resolved.locale;
  const t = await getTranslations();
  const serv = ["service1", "service2", "service3"];

  const organizationSchema = generateOrganizationSchema();
  const webPageSchema = generateWebPageSchema({
    name: t('meta.title'),
    description: t('meta.description'),
    url: `https://www.aequalisadvocades.com/${locale}`,
    locale: locale,
  });

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      
      <div className="bg-surface text-primary">
      <main >
        {/* Hero */}
        <section className="bg-primary min-h-[calc(100svh)] flex items-center relative">
          <div className="container grid h-full items-center justify-items-center gap-8 md:grid-cols-[2fr_1fr] md:justify-items-start lg:px-8">
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
                <h1 className="font-display text-muted text-5xl md:text-8xl leading-tight tracking-tight text-center md:text-left">{t("hero.heading")}</h1>
              </MotionDiv>
              <MotionDiv
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <p className="font-display font-semibold text-xl md:text-3xl text-muted text-center md:text-left">{t("hero.tagline")}</p>
              </MotionDiv>
              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex justify-center md:justify-start"
              >
                <Button variant="secondary" href="/contact">{t("hero.cta")}</Button>
              </MotionDiv>
            </MotionDiv>
            <MotionDiv
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="flex justify-end"
            >
              <Image src="/logo-clar.png" alt="Aequalis Advocades Logo" width={400} height={400} priority className="max-w-[200px] md:max-w-[350px] lg:max-w-[400px] h-auto object-contain" />
            </MotionDiv>
          </div>
          
          {/* Animated line at bottom */}
          <MotionDiv
            className="absolute bottom-0 left-0 h-1 bg-secondary"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          />
        </section>

        {/* Intro */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="container space-y-12">
            {/* Title and Subtitle */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="space-y-3 mx-auto"
            >
              <h2 className="text-primary font-display font-semibold text-3xl md:text-4xl leading-tight">
                {t("home.introTitle")}
              </h2>
              <p className="text-base md:text-lg text-primary/80 leading-relaxed">
                {t("home.introBody")}
              </p>
            </MotionDiv>

            {/* Grid with Image and Features */}
            <div className="grid gap-12 md:grid-cols-[1fr_2fr] items-center">
              <MotionDiv
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="flex justify-center"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-border rounded-full blur-3xl"></div>
                  <Image 
                    src="/targeta.jpg" 
                    alt="Aequalis Advocades Logo" 
                    width={400} 
                    height={400} 
                    className="relative w-full max-w-sm h-auto object-contain drop-shadow-xl" 
                  />
                </div>
              </MotionDiv>
              
              <div className="space-y-4">
                <MotionDiv
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="flex items-start gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-border flex items-center justify-center shrink-0 mt-1">
                    <span className="text-xl">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg text-primary mb-1">
                      {t("home.intro.title1")}
                    </h3>
                    <p className="text-sm md:text-base text-primary/70">
                      {t("home.intro.desc1")}
                    </p>
                  </div>
                </MotionDiv>

                <MotionDiv
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="flex items-start gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-border flex items-center justify-center shrink-0 mt-1">
                    <span className="text-xl">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg text-primary mb-1">
                      {t("home.intro.title2")}
                    </h3>
                    <p className="text-sm md:text-base text-primary/70">
                      {t("home.intro.desc2")}
                    </p>
                  </div>
                </MotionDiv>

                <MotionDiv
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="flex items-start gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-border flex items-center justify-center shrink-0 mt-1">
                    <span className="text-xl">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg text-primary mb-1">
                      {t("home.intro.title3")}
                    </h3>
                    <p className="text-sm md:text-base text-primary/70">
                      {t("home.intro.desc3")}
                    </p>
                  </div>
                </MotionDiv>
              </div>
            </div>
            <div className="flex justify-center">
              <Button variant="primary" href="/about">
                {t("nav.about")}
              </Button>
            </div>
          </div>
        </section>

        {/* Featured services */}
        <section className="pt-10 pb-6 md:pt-20 md:pb-12 bg-surface">
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
              {serv.slice(0, 3).map((service, i) => (
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
                    <h3 className="text-lg md:text-lg leading-tight text-primary">
                      {t(`home.services.${service}.title`)}
                    </h3>
                    <p className="text-sm md:text-base text-primary/70 leading-relaxed">
                      {t(`home.services.${service}.desc`)}
                    </p>
                  </div>
                </MotionDiv>
              ))}
            </div>
            
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex justify-center mt-8"
            >
              <Button variant="primary" href="/services">
                {t("common.moreServices")}
              </Button>
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative rounded-2xl overflow-hidden max-w-4xl mx-auto"
            >
              <div className="relative h-[250px] md:h-[300px]">
                <Image 
                  src="/services/service2.jpeg" 
                  alt="Aequalis Advocades team" 
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-primary/60 to-transparent"></div>
              </div>
            </MotionDiv>
          </div>
        </section>

        <CTA />

      </main>
    </div>
    </>
  );
}
