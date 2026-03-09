import { Button } from "@/components/ui/button";
import { Shield, Zap, Code2, HeadsetIcon } from "lucide-react";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero-illustration.png";

const indicators = [
  { icon: Shield, label: "Infraestrutura segura" },
  { icon: Zap, label: "Automação inteligente" },
  { icon: Code2, label: "Sistemas personalizados" },
  { icon: HeadsetIcon, label: "Suporte especializado" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-secondary/5 blur-[100px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
              Transformamos desafios operacionais em{" "}
              <span className="gradient-text">automação, eficiência e crescimento</span>{" "}
              com tecnologia.
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              A CognitHub ajuda empresas a evoluir com infraestrutura de TI segura, automações
              inteligentes e sistemas personalizados que reduzem custos, eliminam retrabalho e
              aumentam produtividade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" asChild>
                <a
                  href="https://wa.me/5586998117348?text=Ol%C3%A1!%20Estou%20vindo%20da%20p%C3%A1gina%20da%20CognitHub%20e%20gostaria%20de%20falar%20com%20um%20especialista."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Falar com um especialista
                </a>
              </Button>
              <Button variant="hero-outline" size="xl" onClick={() => window.dispatchEvent(new CustomEvent('open-diagnostic'))}>
                Solicitar diagnóstico
              </Button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {indicators.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center gap-2 p-3 rounded-lg bg-muted/30 glow-border-blue text-center"
                >
                  <item.icon className="w-5 h-5 text-primary" />
                  <span className="text-xs text-muted-foreground">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            <img
              src={heroImg}
              alt="CognitHub - Dashboard tecnológico"
              className="w-full animate-float rounded-2xl"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
