import { memo } from "react";
import { Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";

import { CardsItems, cards__hero } from "./index";

import styles from "./styles.module.scss";

export function CardsProductHero() {
   const parent = {
      variantA: { scale: 1 },
      variantB: { scale: 1.15 },
   };

   return (
      <Flex className={styles.card__container}>
         {cards__hero.map((item) => (
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
