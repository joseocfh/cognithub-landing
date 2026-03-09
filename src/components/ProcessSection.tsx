import { motion } from "framer-motion";
import { Search, Lightbulb, Rocket, RefreshCw } from "lucide-react";

const steps = [
  { icon: Search, number: "01", title: "Diagnóstico tecnológico", description: "Analisamos os processos e a infraestrutura da empresa." },
  { icon: Lightbulb, number: "02", title: "Planejamento da solução", description: "Definimos a melhor estratégia tecnológica." },
  { icon: Rocket, number: "03", title: "Implementação", description: "Desenvolvemos e implementamos a solução." },
  { icon: RefreshCw, number: "04", title: "Evolução contínua", description: "Monitoramos e aprimoramos os sistemas." },
];

const ProcessSection = () => {
  return (
    <section id="processo" className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold">
            Nosso <span className="gradient-text">processo</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto relative">
          <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-px bg-gradient-to-r from-primary/0 via-primary/40 to-primary/0" />
          
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative text-center"
            >
              <div className="relative z-10 w-16 h-16 mx-auto rounded-2xl bg-card border border-primary/30 flex items-center justify-center mb-5 glow-blue">
                <step.icon className="w-7 h-7 text-primary" />
              </div>
              <span className="text-xs font-heading font-bold text-secondary mb-2 block">{step.number}</span>
              <h3 className="text-lg font-heading font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
