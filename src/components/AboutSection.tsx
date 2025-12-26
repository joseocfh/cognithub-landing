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
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gradient">
                Sobre a FluxCode
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  Somos uma empresa especializada em <strong className="text-foreground">automação inteligente</strong> e 
                  desenvolvimento de soluções tecnológicas avançadas. Nossa missão é transformar a forma 
                  como as empresas operam através da implementação de agentes de IA e sistemas automatizados.
                </p>
                <p>
                  Com uma equipe de especialistas em inteligência artificial, desenvolvimento web e automação 
                  de processos, entregamos soluções que <strong className="text-foreground">aumentam a produtividade</strong>, 
                  reduzem custos operacionais e proporcionam vantagem competitiva no mercado.
                </p>
                <p>
                  Nossa abordagem combina tecnologias de ponta com metodologias ágeis, garantindo 
                  entregas rápidas e eficientes que superam as expectativas dos nossos clientes.
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
                  Por que escolher a FluxCode?
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