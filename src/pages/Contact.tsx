import { useTranslation } from "react-i18next";
import ContactForm from "@/components/ContactForm";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
                {t("contactTitle")}
              </h1>
              <p className="text-lg text-muted-foreground">
                {t("contactDescription")}
              </p>
            </div>

            <div className="bg-background p-6 md:p-8 rounded-md border border-border">
              <ContactForm />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
