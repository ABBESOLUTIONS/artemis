import { ReactNode, useEffect, useRef } from 'react';
import { motion, Transition, useAnimation, useInView, Variants } from 'framer-motion';

interface Props {
  children: ReactNode,
  variants?: Variants,
  transition?: Transition
};

function Fade({ children, variants, transition }: Props) {
    const controller = useAnimation();
    const ref = useRef(null)
    const isInView = useInView(ref);

    useEffect(() => {
      if (!variants) return;
      if (isInView) {
        controller.start(Object.keys(variants)[1]);
      } else {
        controller.start(Object.keys(variants)[0]);
      }
      // eslint-disable-next-line
    },[isInView, controller])

  return (
    <motion.div ref={ref} initial={variants ? Object.keys(variants)[0] : false} animate={controller} variants={variants} transition={transition}>
      {children}
    </motion.div>
  );
}

export default Fade;