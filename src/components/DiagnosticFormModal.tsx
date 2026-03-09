import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

interface DiagnosticFormModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const WEBHOOK_URL =
  "https://n8n.cognithub.com.br/webhook/83ed49ed-8024-414c-913c-e9344ea8ad33";
const AUTH_KEY = "ch_n8n_2024_S3cur3K3y!@CognitHub";

const DiagnosticFormModal = ({ open, onOpenChange }: DiagnosticFormModalProps) => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    nome: "",
    email: "",
    whatsapp: "",
    empresa: "",
    cargo: "",
    tamanho: "",
    desafios: "",
  });

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: AUTH_KEY,
        },
        body: JSON.stringify({
          type: "form",
          ...form,
        }),
      });

      if (!response.ok) throw new Error("Erro ao enviar");

      toast({
        title: "Solicitação enviada! ✅",
        description: "Entraremos em contato em breve.",
      });
      setForm({ nome: "", email: "", whatsapp: "", empresa: "", cargo: "", tamanho: "", desafios: "" });
      onOpenChange(false);
    } catch {
      toast({
        title: "Erro ao enviar",
        description: "Tente novamente ou entre em contato pelo WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-xl font-heading">
            Solicitar Diagnóstico Tecnológico
          </DialogTitle>
          <DialogDescription>
            Preencha o formulário e nossa equipe entrará em contato para um
            diagnóstico gratuito da sua infraestrutura.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 pt-2">
          <div className="space-y-2">
            <Label htmlFor="nome">Nome completo *</Label>
            <Input
              id="nome"
              required
              value={form.nome}
              onChange={(e) => handleChange("nome", e.target.value)}
              placeholder="Seu nome"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">E-mail *</Label>
              <Input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder="seu@email.com"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="whatsapp">WhatsApp *</Label>
              <Input
                id="whatsapp"
                required
                value={form.whatsapp}
                onChange={(e) => handleChange("whatsapp", e.target.value)}
                placeholder="(00) 00000-0000"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="empresa">Empresa *</Label>
              <Input
                id="empresa"
                required
                value={form.empresa}
                onChange={(e) => handleChange("empresa", e.target.value)}
                placeholder="Nome da empresa"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cargo">Cargo</Label>
              <Input
                id="cargo"
                value={form.cargo}
                onChange={(e) => handleChange("cargo", e.target.value)}
                placeholder="Seu cargo"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="tamanho">Tamanho da empresa</Label>
            <Select value={form.tamanho} onValueChange={(v) => handleChange("tamanho", v)}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1-10">1 a 10 colaboradores</SelectItem>
                <SelectItem value="11-50">11 a 50 colaboradores</SelectItem>
                <SelectItem value="51-200">51 a 200 colaboradores</SelectItem>
                <SelectItem value="201-500">201 a 500 colaboradores</SelectItem>
                <SelectItem value="500+">Mais de 500 colaboradores</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="desafios">Principais desafios tecnológicos *</Label>
            <Textarea
              id="desafios"
              required
              value={form.desafios}
              onChange={(e) => handleChange("desafios", e.target.value)}
              placeholder="Descreva brevemente os desafios que sua empresa enfrenta com tecnologia..."
              rows={3}
            />
          </div>

          <Button type="submit" variant="hero" className="w-full" disabled={loading}>
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Enviando...
              </>
            ) : (
              "Enviar solicitação"
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default DiagnosticFormModal;
