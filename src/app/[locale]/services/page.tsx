import { getTranslations } from "next-intl/server";
import { MotionDiv } from "../components/motion";
import ServiceAccordionItem from "../components/ServiceAccordionItem";
import CTA from "../components/CTA";
import Image from "next/image";

export default async function ServicesPage() {
  const t = await getTranslations("services");

  // Get all 9 services with their titles and descriptions
  const services = Array.from({ length: 9 }, (_, i) => {
    const num = i + 1;
    return {
      id: num,
      title: t(`services.service${num}.title`),
      desc: t.rich(`services.service${num}.desc`, {
        b: (chunks) => <strong>{chunks}</strong>,
        ul: (chunks) => <ul className="list-disc pl-5 pt-2">{chunks}</ul>,
        li: (chunks) => <li>{chunks}</li>
      }),
    };
  });

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

        {/* Services Accordion List */}
        <section className="pt-8 pb-4 md:pt-16 md:pb-8">
          <div className="container max-w-4xl">
            <div className="bg-white rounded-2xl border border-border shadow-sm px-8 py-4">
              {services.map((service, i) => (
                <ServiceAccordionItem
                  key={service.id}
                  id={service.id}
                  title={service.title}
                  desc={service.desc}
                  index={i}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="py-0 md:py-2">
          <div className="container max-w-4xl">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative rounded-2xl overflow-hidden"
            >
              <div className="relative h-[300px] md:h-[400px]">
                <Image 
                  src="/services/service2.jpeg" 
                  alt="Aequalis Advocades" 
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
  );
}
