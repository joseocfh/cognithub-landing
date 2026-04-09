import { motion } from "framer-motion";
import { Server, HeadsetIcon, Zap, Code2 } from "lucide-react";

const solutions = [
  {
    icon: Server,
    title: "Infraestrutura de TI e CFTV",
    description: "Projetamos e implementamos ambientes tecnológicos seguros, estáveis e preparados para o crescimento da empresa.",
  },
  {
    icon: HeadsetIcon,
    title: "Serviços Terceirizados de TI",
    description: "Suporte técnico especializado e gestão proativa da infraestrutura.",
  },
  {
    icon: Zap,
    title: "Automações e Soluções com IA",
    description: "Automatizamos processos e integramos sistemas para reduzir custos operacionais.",
  },
  {
    icon: Code2,
    title: "Sistemas Personalizados",
    description: "Desenvolvemos softwares e integrações sob medida adaptados à realidade de cada empresa.",
  },
];

const SolutionsSection = () => {
  return (
    <section id="solucoes" className="py-24 bg-surface relative">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Nossas <span className="gradient-text">especialidades</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {solutions.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-2xl bg-card border border-border/50 hover:glow-border-blue transition-all duration-500 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
