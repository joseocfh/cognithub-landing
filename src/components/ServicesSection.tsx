import { Server, Headset, Bot, Code } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  features: string[];
}

const services: Service[] = [
  {
    id: 1,
    title: "Consultorias de Infraestrutura em TI e CFTV",
    description: "Planejamento e implementação de soluções de infraestrutura tecnológica e sistemas de videomonitoramento.",
    icon: Server,
    features: ["Análise de infraestrutura", "Projetos de CFTV", "Otimização de redes"]
  },
  {
    id: 2,
    title: "Prestação de Serviços Terceirizados em TI",
    description: "Suporte remoto especializado para atender às demandas técnicas da sua empresa de forma ágil e profissional, sem vínculo interno.",
    icon: Headset,
    features: ["Atendimento remoto sob demanda", "Resolução de chamados com SLA definido", "Suporte especializado terceirizado"]
  },
  {
    id: 3,
    title: "Automações e IA",
    description: "Soluções inteligentes para automatizar processos e potencializar resultados com inteligência artificial.",
    icon: Bot,
    features: ["Automação de processos", "Agentes de IA com n8n", "Integrações de Sistemas", "Web Scraping"]
  },
  {
    id: 4,
    title: "Programação Personalizada",
    description: "Desenvolvimento de soluções sob medida para atender às necessidades específicas do seu negócio.",
    icon: Code,
    features: ["Criação de páginas web", "Soluções sob medida"]
  }
];

export const ServicesSection = () => {
  return (
    <section id="servicos" className="py-20 px-6 lg:px-8 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gradient">
            Nossas Especialidades
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos soluções completas em automação e desenvolvimento, 
            combinando inteligência artificial com tecnologias modernas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.id} 
                className="card-gradient hover:scale-105 smooth-transition cursor-pointer group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 relative group-hover:scale-110 smooth-transition flex items-center justify-center">
                    <IconComponent className="w-12 h-12 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-primary smooth-transition">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center mb-6 text-muted-foreground">
                    {service.description}
                  </CardDescription>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-foreground/80">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};