import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold">
              Sobre a <span className="gradient-text">CognitHub</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              A CognitHub é uma startup de tecnologia que transforma desafios operacionais em
              soluções inteligentes e lucrativas.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Ajudamos empresas a estruturar sua base tecnológica com infraestrutura de TI segura,
              automações inteligentes e sistemas personalizados que otimizam processos e aumentam a
              eficiência.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Mais do que fornecer tecnologia, nossa missão é ajudar empresas a crescer com mais
              produtividade, segurança e vantagem competitiva.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
