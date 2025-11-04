import { getTranslations } from "next-intl/server";
import { MotionDiv } from "../../components/motion";
import Button from "../../components/Button";

export default async function ThankYouPage() {
  const t = await getTranslations();

  return (
    <div className="bg-surface text-primary min-h-screen flex items-center justify-center">
      <main className="container max-w-2xl px-4">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center space-y-6 bg-white rounded-2xl border border-border p-12 shadow-sm"
        >
          {/* Success Icon */}
          <div className="mx-auto w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
            <svg
              className="w-8 h-8 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          <h1 className="font-display font-semibold text-4xl md:text-5xl text-primary">
            ¡Gracias!
          </h1>
          
          <p className="text-lg text-primary/80">
            Hemos recibido tu mensaje correctamente. Nos pondremos en contacto contigo lo antes posible.
          </p>

          <div className="pt-4">
            <Button href="/" variant="primary">
              Volver al inicio
            </Button>
          </div>
        </MotionDiv>
      </main>
    </div>
  );
}
