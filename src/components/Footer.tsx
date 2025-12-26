import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from "lucide-react";
import fluxCodeLogo from "@/assets/logo_fluxcode_new.png";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-card to-muted/30 border-t border-border">
      <div className="container mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex justify-center md:justify-start">
              <img src={fluxCodeLogo} alt="FluxCode Logo" className="h-28 w-auto" />
            </div>
            <p className="text-muted-foreground text-sm text-center md:text-left">
              Transformando negócios através de automação inteligente e 
              agentes de IA. Soluções personalizadas para o futuro digital.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary smooth-transition hover:scale-110" aria-label="GitHub">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary smooth-transition hover:scale-110" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary smooth-transition hover:scale-110" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Serviços</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#servicos" 
                  onClick={(e) => { e.preventDefault(); document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' }); }}
                  className="text-muted-foreground hover:text-primary smooth-transition text-sm cursor-pointer"
                >
                  Automação com IA
                </a>
              </li>
              <li>
                <a 
                  href="#servicos" 
                  onClick={(e) => { e.preventDefault(); document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' }); }}
                  className="text-muted-foreground hover:text-primary smooth-transition text-sm cursor-pointer"
                >
                  Web Scraping
                </a>
              </li>
              <li>
                <a 
                  href="#servicos" 
                  onClick={(e) => { e.preventDefault(); document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' }); }}
                  className="text-muted-foreground hover:text-primary smooth-transition text-sm cursor-pointer"
                >
                  Desenvolvimento Web
                </a>
              </li>
              <li>
                <a 
                  href="#servicos" 
                  onClick={(e) => { e.preventDefault(); document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' }); }}
                  className="text-muted-foreground hover:text-primary smooth-transition text-sm cursor-pointer"
                >
                  Programação Personalizada
                </a>
              </li>
              <li>
                <a 
                  href="#servicos" 
                  onClick={(e) => { e.preventDefault(); document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' }); }}
                  className="text-muted-foreground hover:text-primary smooth-transition text-sm cursor-pointer"
                >
                  Integração de Sistemas
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#sobre" 
                  onClick={(e) => { e.preventDefault(); document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' }); }}
                  className="text-muted-foreground hover:text-primary smooth-transition text-sm cursor-pointer"
                >
                  Sobre Nós
                </a>
              </li>
              <li>
                <a 
                  href="#servicos" 
                  onClick={(e) => { e.preventDefault(); document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' }); }}
                  className="text-muted-foreground hover:text-primary smooth-transition text-sm cursor-pointer"
                >
                  Nossos Serviços
                </a>
              </li>
              <li>
                <a 
                  href="#depoimentos" 
                  onClick={(e) => { e.preventDefault(); document.getElementById('depoimentos')?.scrollIntoView({ behavior: 'smooth' }); }}
                  className="text-muted-foreground hover:text-primary smooth-transition text-sm cursor-pointer"
                >
                  Depoimentos
                </a>
              </li>
              <li>
                <a 
                  href="#contato" 
                  onClick={(e) => { e.preventDefault(); document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' }); }}
                  className="text-muted-foreground hover:text-primary smooth-transition text-sm cursor-pointer"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a 
                  href="mailto:maricesa.sousa@fluxcodethe.com.br"
                  className="text-muted-foreground hover:text-primary smooth-transition text-sm"
                >
                  maricesa.sousa@fluxcodethe.com.br
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a 
                  href="tel:+558698392791"
                  className="text-muted-foreground hover:text-primary smooth-transition text-sm"
                >
                  +55 (86) 9 8839 2791
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  Teresina, PI - Brasil
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} FluxCode. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-primary smooth-transition text-sm">
              Política de Privacidade
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary smooth-transition text-sm">
              Termos de Serviço
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary smooth-transition text-sm">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};