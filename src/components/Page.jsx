import { motion } from "framer-motion";

export function Page({ children, wide = false }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex justify-center py-4"
    >
      <div className={`w-full ${wide ? "max-w-6xl" : "max-w-4xl"}`}>{children}</div>
    </motion.section>
  );
}

export function Title({ children }) {
  return (
    <h1 className="relative mx-0 my-8 text-3xl font-bold uppercase tracking-[9.9px] text-gray-900 sm:text-4xl">
      {children}
    </h1>
  );
}

export function SubTitle({ children }) {
  return <h4 className="text-2xl font-normal capitalize text-teal-700 hover:text-gray-500">{children}</h4>;
}
