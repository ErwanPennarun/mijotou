import "../styles/reset.css";

import Layout from "../components/Layout";
import { AnimatePresence, motion } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };

  return (
    <Layout>
      <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
        <motion.div
          variants={variants}
          initial="hidden"
          animate="enter"
          exit="exit"
          transition={{ type: "spring" }}
          className=""
          style={{ minHeight: "65vh" }}
        >
          <Component {...pageProps} key={router.route} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
