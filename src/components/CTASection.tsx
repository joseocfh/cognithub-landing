import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-primary/8 blur-[120px]" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] rounded-full bg-secondary/8 blur-[100px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center space-y-8"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold">
            Transforme a tecnologia da <span className="gradient-text">sua empresa</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
            Pare de perder tempo com processos manuais e infraestrutura limitada. Com a CognitHub,
            sua empresa evolui com automação, inteligência e tecnologia estratégica.
          </p>
          <Button variant="hero" size="xl" onClick={() => window.dispatchEvent(new CustomEvent('open-diagnostic'))}>
            Agendar diagnóstico
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
