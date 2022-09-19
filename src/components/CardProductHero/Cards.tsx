import { Flex } from "@chakra-ui/react";
import { CardsItems } from "./CardsItems";
import { cards__hero } from "../../data/CardsHeroProps";

import styles from "./styles.module.scss";

export function CardsProductHero() {
   return (
      <Flex className={styles.card__container}>
         {cards__hero.map((item) => (
            <CardsItems
               key={item.id}
               title={item.title}
               content={item.content}
               icon={item.icon}
            />
         ))}
      </Flex>
   );
}
