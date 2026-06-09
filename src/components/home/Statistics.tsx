import { motion, useInView } from 'motion/react';
import { useRef, useEffect, useState } from 'react';

function Counter({ number, label, duration = 2 }: { number: number, label: string, duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const increment = number / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= number) {
          clearInterval(timer);
          setCount(number);
        } else {
          setCount(Math.ceil(start));
        }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }
  }, [isInView, number, duration]);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center p-6 glass rounded-sm border border-brand-gold/10">
      <div className="text-4xl md:text-5xl font-serif font-bold text-brand-gold mb-2">
        {count.toLocaleString()}+
      </div>
      <div className="text-sm uppercase tracking-widest text-brand-cream/60 font-medium">
        {label}
      </div>
    </div>
  );
}

export default function Statistics() {
  return (
    <section className="py-20 bg-brand-black border-b border-brand-dark-grey relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-brand-rosegold/5 blur-[100px] rounded-full pointer-events-none -translate-y-1/2" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          <Counter number={15000} label="Happy Clients" />
          <Counter number={25000} label="Haircuts" />
          <Counter number={5000} label="Beauty Services" />
          <Counter number={100} label="Satisfaction %" />
        </div>
      </div>
    </section>
  );
}
