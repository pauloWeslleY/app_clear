import { Flex } from "@chakra-ui/react";
import { CardsItems } from "./";
import { cardsprops } from "../../data/cardsprops";

import styles from "./styles.module.scss";

export function Cards() {
   return (
      <Flex className={styles.card__container}>
         {cardsprops.map((item) => {
            return (
               <CardsItems
                  key={item.id}
                  title={item.title}
                  content={item.content}
                  icon={item.icon}
               />
            );
         })}
      </Flex>
   );
}
