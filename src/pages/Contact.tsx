
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact | CryptoWhite</title>
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-24">
          <section className="py-16 bg-white dark:bg-crypto-gray">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-crypto-blue dark:text-white">
                  Contactez notre équipe
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Des questions ou besoin d'assistance ? Notre équipe est prête à vous aider.
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <ContactInfo />
                <ContactForm />
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
