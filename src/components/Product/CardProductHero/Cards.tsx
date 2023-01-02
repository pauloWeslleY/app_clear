import { memo } from "react";
import { Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";

import { CardsItems, CARDS_HERO } from "./index";

export function CardsProductHero() {
   const parent = {
      variantA: { scale: 1 },
      variantB: { scale: 1.15 },
   };

   return (
      <Flex wrap={"wrap"} align={"center"} justify={"center"}>
         {CARDS_HERO.map((item) => (
            <motion.div
               key={item.id}
               variants={parent}
               initial={"variantA"}
               whileHover={"variantB"}
            >
               <CardsItems title={item.title} icon={item.icon} />
            </motion.div>
         ))}
      </Flex>
   );
}

export default memo(CardsProductHero);
