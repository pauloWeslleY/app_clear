import { Box } from "@chakra-ui/react";
import { motion, useScroll, useTransform } from "framer-motion";

export function Section() {
   const { scrollY } = useScroll();
   const scale = useTransform(scrollY, [0, -1], [-0.01, 2]);

   return (
      <Box bg={"yellow.500"} py={"20rem"} textAlign={"center"}>
         <section>
            <motion.div
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               style={{
                  scale,
               }}
            >
               <motion.div
                  style={{
                     scale: scrollY,
                  }}
               >
                  <h1>Section Teste!!!</h1>
               </motion.div>
            </motion.div>
         </section>
      </Box>
   );
}
