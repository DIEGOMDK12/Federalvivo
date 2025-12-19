import { PLANS } from "@shared/schema";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const PURCHASE_LINK = "https://federalassociados.com.br/registro/164843";

export function LeadForm() {
  const handlePlanSelect = (operator: string, planName: string, planId: string, planPrice: string) => {
    // Extract plan number from ID (e.g., "vivo-1" -> "1")
    const planNumber = planId.split('-')[1];
    const params = new URLSearchParams({
      operadora: operator,
      plano: planNumber,
      nome_plano: planName,
      preco: planPrice,
    });
    window.open(`${PURCHASE_LINK}?${params.toString()}`, "_blank");
  };

  const operators = [
    { key: "vivo", label: "Vivo", color: "from-red-500 to-red-600" },
    { key: "tim", label: "Tim", color: "from-purple-500 to-purple-600" },
    { key: "claro", label: "Claro", color: "from-blue-500 to-blue-600" },
  ] as const;

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-4">
          Escolha seu Plano
        </h2>
        <p className="text-gray-600 text-lg">
          Selecione a operadora e o plano desejado. Você será redirecionado para finalizar a compra.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {operators.map(({ key, label, color }) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <h3 className={`text-2xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-r ${color} mb-4`}>
                {label}
              </h3>
              <div className="space-y-3">
                {PLANS[key as keyof typeof PLANS].map((plan) => (
                  <motion.div
                    key={plan.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Card
                      onClick={() => handlePlanSelect(key, plan.name, plan.id, plan.price)}
                      className="p-4 cursor-pointer transition-all border-2 border-gray-200 hover:border-primary bg-white hover:shadow-xl hover:shadow-primary/20"
                    >
                      <div className="text-center">
                        <p className="font-semibold text-gray-900 mb-2">
                          {plan.name}
                        </p>
                        <p className="text-2xl font-bold text-primary">
                          R$ {plan.price}
                        </p>
                        <p className="text-xs text-gray-500 mt-2">
                          Clique para comprar
                        </p>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
