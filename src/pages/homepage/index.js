import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="relative mt-28">
      <div className="container-fluid relative md:mx-4 mx-2">
        <motion.div
          className="pt-20 text-center w-full flex flex-col items-center"
          initial={{ y: 500 }}
          animate={{ y: 0 }}
          transition={{ duration: 2 }}
        >
   
        </motion.div>
      </div>
    </div>
  );
}
