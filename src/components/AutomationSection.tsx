import { motion } from "framer-motion";
import { FileText, Database, Filter, Bell, MessageSquare } from "lucide-react";

const steps = [
  { icon: FileText, label: "Visitante preenche formulário no site" },
  { icon: Database, label: "Dados enviados automaticamente para o sistema" },
  { icon: Filter, label: "Lead é classificado automaticamente" },
  { icon: Bell, label: "Notificação enviada para equipe comercial" },
  { icon: MessageSquare, label: "Cliente recebe resposta automática" },
];

const techs = [
  "n8n para automação de workflows",
  "Integração com CRM",
  "Integração com email e WhatsApp",
];

const AutomationSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Automação inteligente <span className="gradient-text">na prática</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {steps.map((step, i) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-6 mb-6 last:mb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-xl bg-card border border-primary/30 flex items-center justify-center glow-blue flex-shrink-0">
                    <step.icon className="w-5 h-5 text-primary" />
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-px h-6 bg-gradient-to-b from-primary/40 to-primary/0" />
                  )}
                </div>
                <div className="flex items-center gap-3 flex-1 p-4 rounded-xl bg-card border border-border/50">
                  <span className="text-xs font-heading font-bold text-secondary">{i + 1}</span>
                  <span className="text-sm text-foreground">{step.label}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 p-6 rounded-2xl bg-card border border-border/50"
          >
            <h4 className="text-sm font-heading font-semibold text-primary mb-4">Tecnologia utilizada</h4>
            <div className="flex flex-wrap gap-3">
              {techs.map((t) => (
                <span key={t} className="text-xs px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AutomationSection;
