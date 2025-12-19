import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertLeadSchema, type InsertLead } from "@shared/schema";
import { useCreateLead } from "@/hooks/use-leads";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2, Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LeadForm() {
  const { mutate, isPending } = useCreateLead();
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<InsertLead>({
    resolver: zodResolver(insertLeadSchema),
    defaultValues: {
      name: "",
      whatsapp: "",
      operator: "vivo",
    },
  });

  function onSubmit(data: InsertLead) {
    mutate(data, {
      onSuccess: () => setIsSuccess(true),
    });
  }

  const waLink = `https://wa.me/5511999999999?text=${encodeURIComponent(
    "Olá! Acabei de solicitar meu Chip Federal Pérola e gostaria de mais informações."
  )}`;

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
      <div className="bg-primary p-6 text-center">
        <h3 className="text-2xl font-bold text-white font-display">
          Garanta seu Chip
        </h3>
        <p className="text-primary-foreground/80 text-sm mt-1">
          Preencha para receber atendimento prioritário
        </p>
      </div>

      <div className="p-6 md:p-8">
        <AnimatePresence mode="wait">
          {isSuccess ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-8 space-y-4"
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-10 h-10 text-green-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900">
                Solicitação Recebida!
              </h4>
              <p className="text-gray-600">
                Nossa equipe entrará em contato pelo WhatsApp informado.
              </p>
              <Button
                asChild
                className="w-full mt-6 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold h-12 text-lg shadow-lg hover:shadow-xl transition-all"
              >
                <a href={waLink} target="_blank" rel="noreferrer">
                  Falar no WhatsApp Agora
                </a>
              </Button>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 font-semibold">
                          Nome Completo
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Seu nome"
                            {...field}
                            className="h-12 bg-gray-50 border-gray-200 focus:border-primary focus:ring-primary/20"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="whatsapp"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 font-semibold">
                          WhatsApp (com DDD)
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="(11) 99999-9999"
                            {...field}
                            type="tel"
                            className="h-12 bg-gray-50 border-gray-200 focus:border-primary focus:ring-primary/20"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="operator"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 font-semibold">
                          Operadora de Preferência
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="h-12 bg-gray-50 border-gray-200 focus:border-primary focus:ring-primary/20">
                              <SelectValue placeholder="Selecione..." />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="vivo">Vivo</SelectItem>
                            <SelectItem value="tim">Tim</SelectItem>
                            <SelectItem value="claro">Claro</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    disabled={isPending}
                    className="w-full h-14 text-lg font-bold bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-lg hover:shadow-orange-500/20 hover:-translate-y-0.5 transition-all duration-200"
                  >
                    {isPending ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        Solicitar meu Chip
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
