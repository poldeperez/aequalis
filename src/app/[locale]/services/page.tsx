import { getTranslations } from "next-intl/server";
import { MotionDiv } from "../components/motion";
import ServiceAccordionItem from "../components/ServiceAccordionItem";

export default async function ServicesPage() {
  const t = await getTranslations("services");

  // Get all 11 services with their titles and descriptions
  const services = Array.from({ length: 11 }, (_, i) => {
    const num = i + 1;
    return {
      id: num,
      title: t(`services.service${num}.title`),
      desc: t(`services.service${num}.desc`),
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
        <section className="py-8 md:py-16">
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
      </main>
    </div>
  );
}
