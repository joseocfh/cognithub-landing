import { Target, Users, Award, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const highlights = [
  {
    icon: Target,
    value: "IA",
    label: "Agentes Inteligentes"
  },
  {
    icon: TrendingUp,
    value: "Automação",
    label: "Processos Otimizados"
  },
  {
    icon: Users,
    value: "Inovação",
    label: "Tecnologia de Ponta"
  },
  {
    icon: Award,
    value: "Eficiência",
    label: "Resultados Rápidos"
  }
];

export const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 px-6 lg:px-8 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 pb-1 text-gradient">
                Sobre a CognitHub
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  A CognitHub é uma startup de tecnologia que transforma <strong className="text-foreground">desafios operacionais</strong> em soluções inteligentes e lucrativas.
                </p>
                <p>
                  Atuamos com <strong className="text-foreground">Consultoria em Infraestrutura de TI e CFTV</strong>, estruturando ambientes seguros, estáveis e preparados para crescer. Oferecemos <strong className="text-foreground">Serviços Terceirizados de TI</strong>, garantindo suporte especializado e gestão proativa para que sua empresa foque no que realmente importa: resultados.
                </p>
                <p>
                  Desenvolvemos <strong className="text-foreground">Automações e Soluções com Inteligência Artificial</strong> que reduzem custos, eliminam retrabalho e aumentam a produtividade. Além disso, criamos <strong className="text-foreground">Sistemas e Programações Personalizadas</strong>, adaptadas à realidade do seu negócio.
                </p>
                <p>
                  Mais do que tecnologia, entregamos <strong className="text-foreground">eficiência, segurança e vantagem competitiva</strong>.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">Nossos Valores</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Inovação</h4>
                    <p className="text-sm text-muted-foreground">Sempre buscamos as mais avançadas tecnologias</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Qualidade</h4>
                    <p className="text-sm text-muted-foreground">Excelência em cada projeto desenvolvido</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Agilidade</h4>
                    <p className="text-sm text-muted-foreground">Entregas rápidas e eficientes</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Transparência</h4>
                    <p className="text-sm text-muted-foreground">Comunicação clara e honesta</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <Card 
                  key={index} 
                  className="card-gradient text-center p-6 hover:scale-105 smooth-transition animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-0">
                    <highlight.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                    <div className="text-3xl font-bold text-foreground mb-2">
                      {highlight.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {highlight.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="card-gradient p-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Por que escolher a CognitHub?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Target className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Soluções Personalizadas</h4>
                      <p className="text-sm text-muted-foreground">
                        Cada projeto é único e desenvolvido especificamente para suas necessidades
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Equipe Especializada</h4>
                      <p className="text-sm text-muted-foreground">
                        Profissionais experientes em IA, automação e desenvolvimento
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Award className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Resultados Comprovados</h4>
                      <p className="text-sm text-muted-foreground">
                        Histórico de sucesso com aumento significativo de produtividade
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};