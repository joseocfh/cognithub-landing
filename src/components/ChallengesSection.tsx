import { motion } from "framer-motion";
import { AlertTriangle, Server, Unplug, Bot, TrendingDown } from "lucide-react";

const challenges = [
  { icon: AlertTriangle, text: "Processos manuais e retrabalho" },
  { icon: Server, text: "Infraestrutura de TI instável" },
  { icon: Unplug, text: "Sistemas que não se integram" },
  { icon: Bot, text: "Falta de automação nos processos" },
  { icon: TrendingDown, text: "Baixa produtividade operacional" },
];

const ChallengesSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Os desafios tecnológicos que <span className="gradient-text">resolvemos</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Muitas empresas perdem produtividade e dinheiro por causa de processos manuais,
            sistemas desconectados e infraestrutura inadequada. A CognitHub transforma esses
            desafios em eficiência, automação e crescimento.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {challenges.map((item, i) => (
            <motion.div
              key={item.text}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4 p-5 rounded-xl bg-card border border-border/50 hover:glow-border-blue transition-all duration-300"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                <item.icon className="w-5 h-5 text-secondary" />
              </div>
              <span className="text-sm font-medium text-foreground">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;
