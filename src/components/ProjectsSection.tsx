import { motion } from "framer-motion";
import { Check } from "lucide-react";
import cognitfoodImg from "@/assets/cognitfood-mockup.png";
import reservasImg from "@/assets/reservas-mockup.png";

const projects = [
  {
    image: cognitfoodImg,
    title: "CognitFood — Sistema inteligente de delivery",
    description: "Sistema completo para gestão de pedidos e entregas focado em food trucks, trailers e pequenos restaurantes.",
    features: [
      "Gestão de pedidos em tempo real",
      "Automação do atendimento",
      "Menu digital",
      "Pagamento via PIX",
      "App mobile para entregadores",
      "Rastreamento de pedidos",
      "Painel administrativo",
    ],
    benefits: ["Mais controle sobre pedidos", "Redução de erros", "Atendimento mais rápido"],
  },
  {
    image: reservasImg,
    title: "Sistema de Reservas para Restaurantes",
    description: "Landing page com sistema inteligente de reservas de mesas.",
    features: [
      "Agendamento online",
      "Integração com Google Calendar",
      "Confirmação automática via WhatsApp",
      "Painel administrativo de reservas",
      "Landing page personalizada",
    ],
    technologies: ["React", "APIs", "WhatsApp", "Google Calendar"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projetos" className="py-24 bg-surface relative">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Projetos que <span className="gradient-text">desenvolvemos</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Além de consultoria e automação, a CognitHub também desenvolve sistemas completos e
            soluções digitais personalizadas para empresas.
          </p>
        </motion.div>

        <div className="space-y-12 max-w-6xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`grid lg:grid-cols-2 gap-8 items-center p-6 md:p-8 rounded-2xl bg-card border border-border/50 ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}
            >
              <div className={`${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full rounded-xl glow-blue"
                  loading="lazy"
                />
              </div>
              <div className={`space-y-5 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <h3 className="text-2xl font-heading font-bold">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
                <div>
                  <h4 className="text-sm font-semibold text-primary mb-3">Funcionalidades</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {project.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-secondary flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                {project.benefits && (
                  <div>
                    <h4 className="text-sm font-semibold text-secondary mb-2">Benefícios</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.benefits.map((b) => (
                        <span key={b} className="text-xs px-3 py-1 rounded-full bg-secondary/10 text-secondary border border-secondary/20">
                          {b}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {project.technologies && (
                  <div>
                    <h4 className="text-sm font-semibold text-primary mb-2">Tecnologias</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((t) => (
                        <span key={t} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
