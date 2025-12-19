import { ReactNode } from "react";
import { motion } from "framer-motion";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  delay?: number;
}

export function FeatureCard({ icon, title, description, delay = 0 }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-primary/20 transition-all duration-300 group"
    >
      <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
        <div className="text-primary group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-2 font-display">{title}</h3>
      <p className="text-gray-600 leading-relaxed text-sm">{description}</p>
    </motion.div>
  );
}
