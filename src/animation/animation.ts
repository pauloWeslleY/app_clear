import { Flex, FlexProps } from "@chakra-ui/react";
import { motion } from "framer-motion";

export const MotionFlex = motion<FlexProps>(Flex);
export const container = {
   hidden: { opacity: 1, scale: 0 },
   visible: {
      opacity: 1,
      scale: 1,
      transition: {
         delayChildren: 0.3,
         staggerChildren: 0.2,
         duration: 0.6
      }
   }
}
export const item = {
   hidden: { y: 20, opacity: 0 },
   visible: {
      y: 0,
      opacity: 1
   }
}

export const variantsNavigation = {
   open: { opacity: 1, x: 0 },
   closed: { opacity: 0, x: "-100%" },
};

export const animations = () => {
   const ANIMATION = {
      animationContainer: {
         hidden: { opacity: 0 },
         show: {
            opacity: 1,
            transition: {
               delayChildren: 0.5,
               duration: 0.5
            },
         },
      },
      animationItem: {
         hidden: { opacity: 0 },
         show: { opacity: 1 },
      }
   }

   return { ANIMATION }
}


