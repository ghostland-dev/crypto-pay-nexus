
import { useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    quote: "L'intégration de CryptoPay à notre plateforme SaaS a été incroyablement simple. Nous avons pu commencer à accepter des paiements en Bitcoin et Ethereum en moins d'une journée.",
    author: "Sophie Martin",
    role: "CTO, TechStart SAS",
    company: "techstart.fr",
  },
  {
    quote: "Grâce à CryptoPay, nos clients internationaux peuvent désormais nous payer sans les frais exorbitants des transferts bancaires traditionnels. La conversion automatique en euros nous évite tout souci de volatilité.",
    author: "Thomas Dubois",
    role: "Fondateur, GlobalShop",
    company: "globalshop.com",
  },
  {
    quote: "La sécurité était notre préoccupation principale en matière de paiements crypto. CryptoPay nous a fourni une solution conforme aux réglementations AML/KYC qui a satisfait notre équipe juridique.",
    author: "Marine Lefèvre",
    role: "Responsable Conformité, FinSecure",
    company: "finsecure.io",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-white dark:bg-crypto-gray crypto-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto rounded-3xl bg-white dark:bg-crypto-gray/10 p-8 md:p-12 shadow-xl backdrop-blur-sm">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Ce que nos clients disent
            </h2>
            <p className="text-lg text-white/80">
              Découvrez pourquoi les entreprises choisissent CryptoPay
            </p>
          </div>

          <div className="relative">
            <div className="mb-8 text-center">
              <Quote className="mx-auto h-12 w-12 text-crypto-purple opacity-50 mb-4" />
              <blockquote className="text-xl md:text-2xl text-white font-medium mb-6 italic">
                "{testimonials[currentIndex].quote}"
              </blockquote>
              <div className="text-white">
                <p className="font-bold">{testimonials[currentIndex].author}</p>
                <p className="text-white/70">{testimonials[currentIndex].role}</p>
                <p className="text-crypto-purple">{testimonials[currentIndex].company}</p>
              </div>
            </div>

            <div className="flex justify-center space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === currentIndex 
                      ? "bg-crypto-purple" 
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Voir témoignage ${index + 1}`}
                />
              ))}
            </div>

            <div className="absolute top-1/2 -translate-y-1/2 left-0 -ml-4 md:-ml-6 hidden md:block">
              <Button
                variant="ghost"
                size="icon"
                className="bg-white/10 hover:bg-white/20 text-white rounded-full h-10 w-10"
                onClick={prevTestimonial}
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </div>

            <div className="absolute top-1/2 -translate-y-1/2 right-0 -mr-4 md:-mr-6 hidden md:block">
              <Button
                variant="ghost"
                size="icon"
                className="bg-white/10 hover:bg-white/20 text-white rounded-full h-10 w-10"
                onClick={nextTestimonial}
              >
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
