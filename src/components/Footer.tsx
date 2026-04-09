import { Mail, Linkedin, Instagram, Github } from "lucide-react";
import logo from "@/assets/logo_header.png";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-surface">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="flex flex-col items-center text-center">
            <a href="#">
              <img src={logo} alt="CognitHub" className="h-[75px]" />
            </a>
            <p className="text-sm text-muted-foreground mt-3 max-w-xs">
              Transformando desafios operacionais em automação, eficiência e crescimento com tecnologia.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-heading font-semibold mb-4">Navegação</h4>
            <nav className="flex flex-col gap-2">
              {[
                { label: "Soluções", href: "#solucoes" },
                { label: "Processo", href: "#processo" },
                { label: "Projetos", href: "#projetos" },
                { label: "Sobre", href: "#sobre" },
              ].map((link) => (
                <a key={link.href} href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-sm font-heading font-semibold mb-4">Contato</h4>
            <a href="mailto:contato@cognithub.com.br" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
              <Mail className="w-4 h-4" />
              contato@cognithub.com.br
            </a>
            <div className="flex gap-3 mt-4">
              {[Linkedin, Instagram, Github].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-lg bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 mt-10 pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} CognitHub. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
