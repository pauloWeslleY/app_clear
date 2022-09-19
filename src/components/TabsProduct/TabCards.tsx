import { Flex } from "@chakra-ui/react";
import { tab__cards } from "../../data/TabCardsProps";
import { TabCardItems } from "./TabCardItems";

import styles from "./styles.module.scss";

export function TabCards() {
   return (
      <section>
         <Flex p={50} w={"100%"} className={styles.card__container}>
            {tab__cards.map((cards) => (
               <TabCardItems key={cards.id} card={cards} />
            ))}
         </Flex>
      </section>
   );
}
