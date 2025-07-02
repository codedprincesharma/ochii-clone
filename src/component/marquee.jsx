import { motion } from "framer-motion";

function Marquee() {
  const text = "we are ochi";
  const content = Array(10).fill(text);

  return (
    <div className="w-full py-10 rounded-t-3xl bg-[#004D43] overflow-hidden mt-20">
      <div className="flex whitespace-nowrap border-t-2 border-b-2 gap-4 sm:gap-6 md:gap-8 border-zinc-300">
        <motion.div
          className="flex"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 30,
            repeat: Infinity,
          }}
        >
          <h1 className="text-[3rem] sm:text-[6rem] md:text-[10rem] lg:text-[15rem] xl:text-[20rem] leading-none font-semibold uppercase tracking-tight flex gap-4 sm:gap-6 md:gap-8">
            {content.map((item, i) => (
              <span key={i}>{item}</span>
            ))}
          </h1>
        </motion.div>
      </div>
    </div>
  );
}
export default Marquee;
