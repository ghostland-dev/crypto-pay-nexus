
import { useState } from "react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { MailIcon, ArrowLeftIcon, CheckCircleIcon } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulation d'un envoi d'email de récupération réussi
      setTimeout(() => {
        setIsSubmitted(true);
        toast({
          title: "Email envoyé",
          description: "Les instructions de récupération ont été envoyées à votre adresse email.",
        });
      }, 1500);
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'envoi de l'email.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-crypto-gray/30">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-crypto-blue dark:text-white">
              Récupération de mot de passe
            </h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Nous vous enverrons un lien pour réinitialiser votre mot de passe
            </p>
          </div>

          <Card>
            {!isSubmitted ? (
              <form onSubmit={handleSubmit}>
                <CardHeader>
                  <CardTitle>Mot de passe oublié</CardTitle>
                  <CardDescription>
                    Entrez votre adresse email pour recevoir un lien de réinitialisation
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <MailIcon className="h-5 w-5 text-gray-400" />
                      </div>
                      <Input
                        id="email"
                        type="email"
                        placeholder="vous@exemple.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col space-y-4">
                  <Button
                    type="submit"
                    className="w-full bg-crypto-blue hover:bg-crypto-blue/90"
                    disabled={isLoading}
                  >
                    {isLoading ? "Envoi en cours..." : "Envoyer les instructions"}
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full"
                    type="button"
                    asChild
                  >
                    <Link to="/login" className="flex items-center justify-center gap-2">
                      <ArrowLeftIcon className="h-4 w-4" />
                      Retour à la connexion
                    </Link>
                  </Button>
                </CardFooter>
              </form>
            ) : (
              <div className="p-6 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
                  <CheckCircleIcon className="h-6 w-6 text-green-600 dark:text-green-300" />
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">
                  Vérifiez votre boîte de réception
                </h3>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Nous avons envoyé un lien de récupération à <strong>{email}</strong>. 
                  Veuillez vérifier votre boîte de réception et suivre les instructions.
                </p>
                <div className="mt-6">
                  <Button
                    variant="ghost"
                    className="w-full"
                    asChild
                  >
                    <Link to="/login" className="flex items-center justify-center gap-2">
                      <ArrowLeftIcon className="h-4 w-4" />
                      Retour à la connexion
                    </Link>
                  </Button>
                </div>
              </div>
            )}
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ForgotPassword;
