import Image from "next/image";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <>
      <div className="w-screen h-[25vh] bg-main-red text-white">
        <div className="w-11/12 grid h-full grid-cols-2 mx-auto">
          <motion.div
            className="h-[23vh] w-[145px] relative self-end"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: "easeOut", duration: 1 }}
          >
            <Image
              src="/img/mijotou-full-white.png"
              layout="fill"
              width="100%"
              height="100%"
            />
          </motion.div>
          <div className="flex flex-col w-full h-full justify-center">
            <p className="text-bold text-5xl">Mijotou.</p>
            <p className="my-4">
              Créé et développé par {""}
              Erwan Pennarun,{" "}
              <a className="underline" href="http://epennarun.dev">
                dont le portfolio se situe sous votre click
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
