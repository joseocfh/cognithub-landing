import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useCallback } from "react";
import portfolioSaborArte from "@/assets/portfolio-sabor-arte.png";

interface Project {
  id: number;
  category: string;
  title: string;
  highlight: string;
  description: string;
  image: string;
  techStack: string[];
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    category: "Landing Page + Automação",
    title: "Sistema de Reservas —",
    highlight: "Sabor & Arte",
    description:
      "Landing page com sistema inteligente de agendamento em tempo real, sincronização com Google Agenda e confirmação automática via WhatsApp.",
    image: portfolioSaborArte,
    techStack: ["React", "API", "WhatsApp", "Google Calendar"],
    link: "https://exemplo-landing-seven.vercel.app/",
  },
];

export const PortfolioSection = () => {
  const [current, setCurrent] = useState(0);

  const prev = useCallback(() => {
    setCurrent((c) => (c === 0 ? projects.length - 1 : c - 1));
  }, []);

  const next = useCallback(() => {
    setCurrent((c) => (c === projects.length - 1 ? 0 : c + 1));
  }, []);

  const project = projects[current];

  return (
    <section
      id="portfolio"
      className="py-20 px-6 lg:px-8 bg-gradient-to-b from-muted/20 to-background relative overflow-hidden"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gradient">
            Nosso Portfólio
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conheça alguns exemplos dos projetos que desenvolvemos para nossos clientes.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Card */}
          <div
            className="rounded-2xl overflow-hidden animate-fade-in"
            style={{
              background:
                "linear-gradient(145deg, hsl(220 25% 10%) 0%, hsl(220 20% 14%) 100%)",
              border: "1px solid hsl(220 20% 22%)",
              boxShadow:
                "0 0 60px hsl(var(--primary) / 0.1), 0 20px 60px hsl(0 0% 0% / 0.4)",
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Left - Text */}
              <div className="p-8 lg:p-12 flex flex-col justify-center space-y-6">
                <span
                  className="inline-block self-start text-sm px-4 py-1.5 rounded-full font-medium"
                  style={{
                    border: "1px solid hsl(var(--accent) / 0.5)",
                    color: "hsl(var(--accent))",
                    background: "hsl(var(--accent) / 0.1)",
                  }}
                >
                  {project.category}
                </span>

                <div>
                  <h3
                    className="text-3xl lg:text-4xl font-bold leading-tight"
                    style={{ color: "hsl(0 0% 95%)" }}
                  >
                    {project.title}{" "}
                    <span style={{ color: "hsl(var(--accent))" }}>
                      {project.highlight}
                    </span>
                  </h3>
                </div>

                <p
                  className="text-base lg:text-lg leading-relaxed"
                  style={{ color: "hsl(220 10% 65%)" }}
                >
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3 pt-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-sm px-3 py-1.5 rounded-lg font-medium flex items-center gap-2"
                      style={{
                        background: "hsl(220 20% 18%)",
                        color: "hsl(0 0% 85%)",
                        border: "1px solid hsl(220 20% 25%)",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-2">
                  <Button
                    asChild
                    className="gap-2 text-base px-6 py-3 h-auto"
                    style={{
                      background:
                        "linear-gradient(135deg, hsl(var(--accent)) 0%, hsl(var(--flux-orange)) 100%)",
                      color: "white",
                      border: "none",
                    }}
                  >
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver Projeto <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>

              {/* Right - Image */}
              <div className="relative flex items-center justify-center p-6 lg:p-8">
                <img
                  src={project.image}
                  alt={`${project.title} ${project.highlight}`}
                  className="w-full h-auto rounded-xl object-cover"
                  style={{
                    boxShadow: "0 8px 40px hsl(0 0% 0% / 0.5)",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Navigation arrows - shown when more than 1 project */}
          {projects.length > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center smooth-transition hover:scale-110"
                style={{
                  background: "hsl(220 25% 12%)",
                  border: "1px solid hsl(220 20% 25%)",
                  color: "hsl(0 0% 80%)",
                }}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center smooth-transition hover:scale-110"
                style={{
                  background: "hsl(220 25% 12%)",
                  border: "1px solid hsl(220 20% 25%)",
                  color: "hsl(0 0% 80%)",
                }}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          {/* Dots */}
          {projects.length > 1 && (
            <div className="flex justify-center gap-2 mt-8">
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className="w-3 h-3 rounded-full smooth-transition"
                  style={{
                    background:
                      i === current
                        ? "hsl(var(--accent))"
                        : "hsl(220 20% 25%)",
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
