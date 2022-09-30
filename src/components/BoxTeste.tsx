import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

export function BoxTeste() {
   return (
      <Box bg={"red.900"} py={"20rem"} textAlign={"center"}>
         <section>
            <motion.div
               initial={{ opacity: 0, scale: 0.5 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.5 }}
            >
               teste
            </motion.div>
         </section>
      </Box>
   );
}
