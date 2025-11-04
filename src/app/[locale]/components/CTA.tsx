import { getTranslations } from "next-intl/server";
import Button from "./Button";
import { MotionDiv } from "./motion";

export default async function CTA() {
  const t = await getTranslations("cta");

  return (
    <section className="py-8 md:py-12">
      <div className="container">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="bg-accent rounded-3xl p-10 md:p-16 text-center space-y-6 shadow-lg"
        >
          <h2 className="font-display font-semibold text-2xl md:text-4xl leading-tight tracking-tight text-secondary">
            {t("title")}
          </h2>
          <p className="text-md md:text-l text-secondary/80 leading-relaxed max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
          <div className="md:pt-4">
            <Button variant="secondary" href="/contact">
              {t("contact")}
            </Button>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}
