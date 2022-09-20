import { Box, Flex, chakra } from "@chakra-ui/react";
import { CardsProps } from "../../types/CardsProps";

import styles from "./styles.module.scss";

interface Cards {
   card: CardsProps;
}

export function TabCardItems({ card }: Cards) {
   const { name, image, price } = card;

   return (
      <section className={styles.card__items}>
         <Flex
            direction={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            w={"sm"}
            mx={"auto"}
         >
            <Box
               bg={"gray.300"}
               h={64}
               w={"18rem"}
               rounded={"lg"}
               shadow={"lg"}
               bgSize={"cover"}
               bgPos={"center"}
               style={{
                  backgroundImage: `url(${image})`,
               }}
            ></Box>

            <Box
               w={{
                  base: 56,
                  md: 64,
               }}
               bg={"orange.400"}
               _dark={{
                  bg: "orange.700",
               }}
               mt={-10}
               shadow={"lg"}
               rounded={"lg"}
               overflow={"hidden"}
            >
               <chakra.h3
                  py={2}
                  textAlign={"center"}
                  fontWeight={"bold"}
                  textTransform={"uppercase"}
                  color={"gray.800"}
                  _dark={{
                     color: "white",
                  }}
                  letterSpacing={1}
               >
                  {name}
               </chakra.h3>

               <Flex
                  alignItems={"center"}
                  justifyContent={"center"}
                  py={2}
                  px={3}
                  bg={"gray.200"}
                  _dark={{
                     bg: "orange.400",
                  }}
               >
                  <chakra.span
                     fontWeight={"bold"}
                     color={"gray.800"}
                     _dark={{
                        color: "gray.900",
                     }}
                  >
                     ${price}
                  </chakra.span>
               </Flex>
            </Box>
         </Flex>
      </section>
   );
}
