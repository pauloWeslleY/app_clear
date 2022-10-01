import { memo } from "react";
import { Flex } from "@chakra-ui/react";
import { TabCardItems, tab__cards } from "./index";

import styles from "./styles.module.scss";

export function TabCards() {
   return (
      <Flex
         p={50}
         flexWrap={"wrap"}
         alignItems={"center"}
         justifyContent={"center"}
         // className={styles.card__container}
      >
         {tab__cards.map((cards) => (
            <TabCardItems key={cards.id} card={cards} />
         ))}
      </Flex>
   );
}

export default memo(TabCards);
