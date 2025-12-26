import fluxCodeLogo from "@/assets/logo_fluxcode_new.png";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img src={fluxCodeLogo} alt="FluxCode Logo" className="h-16 w-auto" />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#inicio" 
              onClick={(e) => { e.preventDefault(); document.getElementById('inicio')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="text-muted-foreground hover:text-primary smooth-transition cursor-pointer"
            >
              Início
            </a>
            <a 
              href="#servicos" 
              onClick={(e) => { e.preventDefault(); document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="text-muted-foreground hover:text-primary smooth-transition cursor-pointer"
            >
              Serviços
            </a>
            <a 
              href="#sobre" 
              onClick={(e) => { e.preventDefault(); document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="text-muted-foreground hover:text-primary smooth-transition cursor-pointer"
            >
              Sobre
            </a>
            <a 
              href="#depoimentos" 
              onClick={(e) => { e.preventDefault(); document.getElementById('depoimentos')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="text-muted-foreground hover:text-primary smooth-transition cursor-pointer"
            >
              Depoimentos
            </a>
            <a 
              href="#contato" 
              onClick={(e) => { e.preventDefault(); document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="text-muted-foreground hover:text-primary smooth-transition cursor-pointer"
            >
              Contato
            </a>
          </nav>

          {/* CTA Button */}
          <Button 
            variant="gradient"
            onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Fale Conosco
          </Button>
        </div>
      </div>
    </header>
  );
};
