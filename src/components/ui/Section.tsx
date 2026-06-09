import { ReactNode } from "react";
import { motion } from "motion/react";
import { cn } from "../../lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  hasPattern?: boolean;
}

export function Section({ children, className, hasPattern }: SectionProps) {
  return (
    <section className={cn("py-24 md:py-32 relative bg-brand-black overflow-hidden", className)}>
      {hasPattern && (
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      )}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {children}
      </div>
    </section>
  );
}

interface SectionTitleProps {
  title: ReactNode;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionTitle({ title, subtitle, align = "center" }: SectionTitleProps) {
  return (
    <div className={cn("mb-16", align === "center" && "text-center")}>
      {subtitle && (
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="uppercase tracking-[0.3em] text-xs font-semibold text-brand-gold mb-4 block"
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h2 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-3xl md:text-5xl font-serif text-white tracking-tight"
      >
        {title}
      </motion.h2>
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className={cn("h-[2px] w-24 bg-brand-gold mt-6", align === "center" && "mx-auto")}
      />
    </div>
  );
}
