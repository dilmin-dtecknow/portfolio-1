import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX}
      absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 `}
      >

        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-violet-500" />
          <div className="w-1 sm:h-80 h-48 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm &nbsp;
            <span className="text-violet-500">Dilmin Fernando</span>
          </h1>

          <p className={`${styles.heroSubText} text-white-100`}>
            I develop <span className="text-violet-700">Java</span> applications, <br className="sm:block hidden" />
            {/* <span className="text-violet-700">Full Stack</span> applications, <br className="sm:block hidden" />
            <span className="text-violet-700">Web</span> applications. */}
          </p>
        </div>

      </div>

      <ComputersCanvas />

    </section>
  );
};

export default Hero