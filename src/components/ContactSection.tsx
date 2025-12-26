import { useState } from "react";
import { Send, Mail, Phone, MapPin, Clock, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string()
    .trim()
    .min(1, "Nome é obrigatório")
    .max(100, "Nome deve ter no máximo 100 caracteres"),
  email: z.string()
    .trim()
    .email("Email inválido")
    .max(255, "Email deve ter no máximo 255 caracteres"),
  company: z.string()
    .max(100, "Nome da empresa deve ter no máximo 100 caracteres")
    .optional(),
  phone: z.string()
    .regex(/^[\d\s\-\+\(\)]{10,20}$/, "Telefone inválido")
    .optional()
    .or(z.literal("")),
  message: z.string()
    .trim()
    .min(10, "Mensagem deve ter no mínimo 10 caracteres")
    .max(2000, "Mensagem deve ter no máximo 2000 caracteres"),
});

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    content: "maricesa.sousa@fluxcodethe.com.br",
    link: "mailto:maricesa.sousa@fluxcodethe.com.br"
  },
  {
    icon: Phone,
    title: "Telefone",
    content: "+55 (86) 9 8839 2791",
    link: "tel:+558698392791"
  },
  {
    icon: MapPin,
    title: "Localização",
    content: "Teresina, PI - Brasil",
    link: null
  },
  {
    icon: Clock,
    title: "Horário",
    content: "Seg-Sex: 9h às 18h",
    link: null
  }
];

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const { toast } = useToast();

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 2) {
      return numbers.length ? `(${numbers}` : '';
    }
    if (numbers.length <= 3) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    }
    if (numbers.length <= 7) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 3)} ${numbers.slice(3)}`;
    }
    if (numbers.length <= 11) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 3)} ${numbers.slice(3, 7)}-${numbers.slice(7)}`;
    }
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 3)} ${numbers.slice(3, 7)}-${numbers.slice(7, 11)}`;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name === 'phone') {
      setFormData(prev => ({
        ...prev,
        phone: formatPhone(value)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    
    // Validate form data
    try {
      const validatedData = contactFormSchema.parse(formData);
      
      setIsSubmitting(true);
      
      // Send to Vercel Function
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(validatedData),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Erro ao enviar mensagem');
      }
      
      toast({
        title: "✅ Mensagem enviada!",
        description: "Obrigado pelo contato! Responderemos em até 24 horas.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: ""
      });
      
      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
      
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Validation errors
        const fieldErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(fieldErrors);
        
        toast({
          title: "❌ Erro de validação",
          description: "Por favor, verifique os campos do formulário.",
          variant: "destructive",
        });
      } else {
        // Network or server errors
        toast({
          title: "❌ Erro ao enviar",
          description: error instanceof Error ? error.message : "Tente novamente mais tarde.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="py-20 px-6 lg:px-8 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gradient">
            Entre em Contato
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pronto para transformar seu negócio? Entre em contato conosco e 
            descubra como podemos automatizar seus processos com IA.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Informações de Contato
            </h3>
            
            {contactInfo.map((info, index) => (
              <Card 
                key={index} 
                className="card-gradient hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-foreground mb-1">
                        {info.title}
                      </h4>
                      {info.link ? (
                        <a 
                          href={info.link}
                          className="text-muted-foreground hover:text-primary smooth-transition text-sm break-words"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-muted-foreground text-sm">{info.content}</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Card className="card-gradient">
              <CardContent className="p-6">
                <h4 className="font-semibold text-foreground mb-3">
                  Resposta Rápida
                </h4>
                <p className="text-muted-foreground text-sm">
                  Respondemos todas as mensagens em até 24 horas. 
                  Para urgências, utilize nosso telefone direto.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="card-gradient">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Solicite um Orçamento
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground">
                        Nome Completo *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Nome"
                        required
                        disabled={isSubmitting}
                        className={`bg-input border-border focus:border-primary transition-colors ${errors.name ? 'border-destructive' : ''}`}
                        aria-label="Nome completo"
                      />
                      {errors.name && <p className="text-sm text-destructive mt-1">{errors.name}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="email@exemplo.com"
                        required
                        disabled={isSubmitting}
                        className={`bg-input border-border focus:border-primary transition-colors ${errors.email ? 'border-destructive' : ''}`}
                        aria-label="Endereço de email"
                      />
                      {errors.email && <p className="text-sm text-destructive mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-foreground">
                        Empresa
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Empresa (opcional)"
                        disabled={isSubmitting}
                        className={`bg-input border-border focus:border-primary transition-colors ${errors.company ? 'border-destructive' : ''}`}
                        aria-label="Nome da empresa"
                      />
                      {errors.company && <p className="text-sm text-destructive mt-1">{errors.company}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-foreground">
                        Telefone
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(xx) x xxxx-xxxx"
                        disabled={isSubmitting}
                        className={`bg-input border-border focus:border-primary transition-colors ${errors.phone ? 'border-destructive' : ''}`}
                        aria-label="Número de telefone"
                      />
                      {errors.phone && <p className="text-sm text-destructive mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground">
                      Mensagem *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Descreva seu projeto ou necessidade..."
                      rows={6}
                      required
                      disabled={isSubmitting}
                      className={`bg-input border-border resize-none focus:border-primary transition-colors ${errors.message ? 'border-destructive' : ''}`}
                      aria-label="Mensagem"
                    />
                    {errors.message && <p className="text-sm text-destructive mt-1">{errors.message}</p>}
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    variant="gradient"
                    className="w-full"
                    disabled={isSubmitting}
                    aria-label="Enviar mensagem"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Enviar Mensagem
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};