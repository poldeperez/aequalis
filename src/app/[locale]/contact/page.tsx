import { getTranslations } from "next-intl/server";
import Button from "../components/Button";
import { MotionDiv } from "../components/motion";

export default async function ContactPage() {
  const t = await getTranslations("contact");

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

        {/* Contact Form & Info Section */}
        <section className="py-8 md:py-16">
          <div className="container max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-[1fr_400px]">
              {/* Contact Form */}
              <MotionDiv
                className="bg-white rounded-2xl border border-border p-8 shadow-sm"
              >
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="name">
                      {t("form.name")}
                    </label>
                    <input
                      id="name"
                      name="name"
                      className="w-full rounded-xl border border-border bg-surface px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent transition-shadow"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="email">
                      {t("form.email")}
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      className="w-full rounded-xl border border-border bg-surface px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent transition-shadow"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="message">
                      {t("form.message")}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      className="w-full rounded-xl border border-border bg-surface px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent transition-shadow resize-none"
                    />
                  </div>
                  <Button variant="primary" className="w-full">
                    {t("form.submit")}
                  </Button>
                </form>
              </MotionDiv>

              {/* Contact Info */}
              <MotionDiv
                className="space-y-8"
              >
                <div>
                  <h2 className="font-display font-semibold text-2xl mb-6">
                    {t("contactInfo")}
                  </h2>
                  <div className="space-y-6">
                    {/* Email */}
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-accent"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-medium text-sm text-primary mb-1">{t("email")}</h3>
                        <a
                          href="mailto:gemma@aequalisadvocades.com"
                          className="text-primary hover:text-accent transition-colors"
                        >
                          gemma@aequalisadvocades.com
                        </a>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-accent"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-medium text-sm text-primary mb-1">{t("phone")}</h3>
                        <a
                          href="tel:+34695595530"
                          className="text-primary hover:text-accent transition-colors"
                        >
                          +34 695 595 530
                        </a>
                      </div>
                    </div>

                    {/* Address */}
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-accent"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-medium text-sm text-primary mb-1">{t("address")}</h3>
                        <p className="text-primary">Carrer Burriac, 47, Local, 08303 Mataró</p>
                      </div>
                    </div>
                  </div>
                </div>
              </MotionDiv>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container max-w-6xl">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="space-y-6"
            >
              <h2 className="font-display font-semibold text-3xl text-center">{t("map")}</h2>
              <div className="rounded-2xl overflow-hidden border border-border shadow-lg h-[340px] bg-surface">
                <iframe
                  title="Google Maps"
                  className="w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2694.6645631330193!2d2.420437375530968!3d41.54121108644056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4b507293f1f53%3A0xfb02eae5c3558a!2sCarrer%20de%20Burriac%2C%2047%2C%2008303%20Matar%C3%B3%2C%20Barcelona!5e1!3m2!1ses!2ses!4v1761761207782!5m2!1ses!2ses"
                />
              </div>
            </MotionDiv>
          </div>
        </section>
      </main>
    </div>
  );
}
