import { motion } from "framer-motion";
import { ArrowDownRight, Gauge, Shield, Users, BarChart3 } from "lucide-react";

const results = [
  { icon: ArrowDownRight, label: "Redução de retrabalho operacional" },
  { icon: Gauge, label: "Processos mais rápidos e eficientes" },
  { icon: Shield, label: "Infraestrutura mais segura" },
  { icon: Users, label: "Maior produtividade das equipes" },
  { icon: BarChart3, label: "Mais controle sobre dados e processos" },
];

const ResultsSection = () => {
  return (
    <section className="py-24 bg-surface relative">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold">
            Impacto que a tecnologia pode <span className="gradient-text">gerar</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {results.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center gap-4 p-6 rounded-2xl bg-card border border-border/50 hover:glow-border-blue transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <span className="text-sm font-medium text-foreground leading-snug">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
