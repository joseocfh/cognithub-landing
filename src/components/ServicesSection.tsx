import { Bot, Code, Globe, Database, Zap, Cpu } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import aiAutomationIcon from "@/assets/ai-automation-icon.png";
import webscrapingIcon from "@/assets/webscraping-icon.png";
import webDevIcon from "@/assets/web-dev-icon.png";
import programmingIcon from "@/assets/programming-icon.png";

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  fallbackIcon: React.ComponentType<any>;
  features: string[];
}

const services: Service[] = [
  {
    id: 1,
    title: "Automação com Agentes de IA",
    description: "Sistemas inteligentes que automatizam tarefas complexas e tomam decisões baseadas em dados.",
    icon: aiAutomationIcon,
    fallbackIcon: Bot,
    features: ["Processamento de linguagem natural", "Tomada de decisões autônoma", "Aprendizado contínuo"]
  },
  {
    id: 2,
    title: "Web Scraping Inteligente",
    description: "Extração automatizada de dados de websites com alta precisão e velocidade.",
    icon: webscrapingIcon,
    fallbackIcon: Database,
    features: ["Extração em massa", "Dados estruturados", "Monitoramento contínuo"]
  },
  {
    id: 3,
    title: "Criação de Páginas Web",
    description: "Desenvolvimento de aplicações web modernas, responsivas e otimizadas.",
    icon: webDevIcon,
    fallbackIcon: Globe,
    features: ["Design responsivo", "Performance otimizada", "SEO integrado"]
  },
  {
    id: 4,
    title: "Programação Personalizada",
    description: "Soluções sob medida para suas necessidades específicas de negócio.",
    icon: programmingIcon,
    fallbackIcon: Code,
    features: ["Arquitetura escalável", "Integração de APIs", "Manutenção contínua"]
  },
  {
    id: 5,
    title: "Automação de Processos",
    description: "Otimização de fluxos de trabalho através de automação inteligente.",
    icon: programmingIcon,
    fallbackIcon: Zap,
    features: ["Redução de custos", "Aumento de eficiência", "Monitoramento em tempo real"]
  },
  {
    id: 6,
    title: "Integração de Sistemas",
    description: "Conectamos diferentes plataformas e sistemas para trabalhar em harmonia.",
    icon: aiAutomationIcon,
    fallbackIcon: Cpu,
    features: ["APIs personalizadas", "Sincronização de dados", "Arquitetura robusta"]
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.id} 
              className="card-gradient hover:scale-105 smooth-transition cursor-pointer group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 relative group-hover:scale-110 smooth-transition">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        const IconComponent = service.fallbackIcon;
                        const iconElement = document.createElement('div');
                        iconElement.className = 'w-16 h-16 text-primary';
                        parent.appendChild(iconElement);
                      }
                    }}
                  />
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
          ))}
        </div>
      </div>
    </section>
  );
};