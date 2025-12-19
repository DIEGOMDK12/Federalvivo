import { LeadForm } from "@/components/LeadForm";
import { FeatureCard } from "@/components/FeatureCard";
import { motion } from "framer-motion";
import { 
  Wifi, 
  PhoneCall, 
  Gift, 
  Users, 
  ShieldCheck, 
  Signal, 
  ArrowDown, 
  Check 
} from "lucide-react";

export default function Home() {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-md">
              C
            </div>
            <span className="font-display font-bold text-xl text-gray-900">Chip Federal</span>
          </div>
          <button 
            onClick={scrollToForm}
            className="px-6 py-2 bg-secondary text-secondary-foreground font-semibold rounded-full hover:bg-secondary/90 transition-all shadow-md text-sm md:text-base"
          >
            Peça Já
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
        
        {/* Floating circles decoration */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            
            {/* Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left text-white"
            >
              <div className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6">
                <span className="text-secondary font-bold text-sm tracking-wider uppercase">Oferta Exclusiva</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display leading-tight mb-6">
                Internet Ilimitada <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">
                  + Ligações Livres
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-blue-100 mb-8 max-w-2xl mx-auto lg:mx-0 font-light">
                Plano Pérola por apenas <span className="font-bold text-yellow-400 text-3xl">R$ 49,90</span>/mês.
                Sem surpresas na fatura.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button 
                  onClick={scrollToForm}
                  className="px-8 py-4 bg-secondary text-secondary-foreground text-lg font-bold rounded-xl shadow-[0_10px_20px_rgba(245,158,11,0.3)] hover:shadow-[0_15px_25px_rgba(245,158,11,0.4)] hover:-translate-y-1 transition-all duration-300"
                >
                  Comprar Agora
                </button>
                <a 
                  href="#benefits"
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-lg font-semibold rounded-xl hover:bg-white/20 transition-all"
                >
                  Ver Benefícios
                </a>
              </div>
              
              <div className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-sm text-blue-200">
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-400" /> Sem fidelidade
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-400" /> Sem consulta SPC/Serasa
                </div>
              </div>
            </motion.div>

            {/* Image Content */}
            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mx-auto lg:mx-0 max-w-sm lg:max-w-md xl:max-w-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-secondary/50 to-primary/50 rounded-full blur-[60px] opacity-60 animate-pulse"></div>
              {/* Product Image - Note: Using dynamic path as requested */}
              <img 
                src="/images/chip_offer.png" 
                alt="Plano Pérola Chip" 
                className="relative z-10 w-full drop-shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
            
          </div>
        </div>
        
        <div className="absolute bottom-0 w-full text-center pb-8 animate-bounce hidden lg:block text-white/50">
          <ArrowDown className="w-8 h-8 mx-auto" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* Benefits Grid */}
      <section id="benefits" className="py-20 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-4">
              Por que escolher o <span className="text-primary">Chip Federal?</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Mais liberdade para você navegar e falar sem se preocupar com limites ou taxas extras.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Wifi className="w-7 h-7" />}
              title="Internet 4G Ilimitada"
              description="Navegue à vontade, assista vídeos e use redes sociais sem redução de velocidade."
              delay={0.1}
            />
            <FeatureCard 
              icon={<PhoneCall className="w-7 h-7" />}
              title="Ligações Ilimitadas"
              description="Fale com qualquer operadora do Brasil sem custos adicionais. DDD incluso."
              delay={0.2}
            />
            <FeatureCard 
              icon={<Signal className="w-7 h-7" />}
              title="Tripla Cobertura"
              description="Funciona com sinal da Vivo, Tim e Claro. A melhor conexão onde você estiver."
              delay={0.3}
            />
            <FeatureCard 
              icon={<Gift className="w-7 h-7" />}
              title="Clube de Benefícios"
              description="Descontos exclusivos em parceiros e lojas selecionadas para clientes Pérola."
              delay={0.4}
            />
            <FeatureCard 
              icon={<Users className="w-7 h-7" />}
              title="Indique e Ganhe"
              description="Ganhe até 23% de comissão por cada indicação ativa. Sua conta pode sair de graça!"
              delay={0.5}
            />
            <FeatureCard 
              icon={<ShieldCheck className="w-7 h-7" />}
              title="Sem Burocracia"
              description="Sem fidelidade, sem multa e sem consulta ao SPC/Serasa. Liberdade total."
              delay={0.6}
            />
          </div>
        </div>
      </section>

      {/* CTA Section / Form */}
      <section id="lead-form" className="py-20 bg-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/50 skew-x-12 translate-x-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-6">
                Chegou a hora de ter <br/>
                <span className="text-primary">Internet de Verdade</span>
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Não perca mais tempo com planos limitados. O Plano Pérola foi desenhado para quem precisa estar sempre conectado.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "Chip enviado para todo o Brasil",
                  "Ativação rápida e simples",
                  "Suporte humanizado via WhatsApp",
                  "Garantia de satisfação de 7 dias"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              
              <div className="p-6 bg-yellow-50 rounded-2xl border border-yellow-100">
                <div className="flex items-center gap-4 mb-2">
                  <div className="text-3xl font-bold text-gray-900">R$ 49,90</div>
                  <span className="text-sm bg-yellow-200 text-yellow-800 px-2 py-1 rounded font-bold uppercase tracking-wider">Promoção</span>
                </div>
                <p className="text-sm text-gray-600">Valor mensal fixo. Sem pegadinhas.</p>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <LeadForm />
            </div>
            
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center text-white font-bold">
                  C
                </div>
                <span className="font-display font-bold text-lg">Chip Federal</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Conectando o Brasil com a melhor tecnologia 4G do mercado. 
                Qualidade, preço justo e atendimento de excelência.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-gray-200">Links Rápidos</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-primary transition-colors">Início</a></li>
                <li><a href="#benefits" className="hover:text-primary transition-colors">Benefícios</a></li>
                <li><a href="#lead-form" className="hover:text-primary transition-colors">Comprar</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-gray-200">Contato</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>suporte@chipfederal.com.br</li>
                <li>(11) 99999-9999</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Chip Federal. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
