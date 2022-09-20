import { Box, Image, Text, chakra } from "@chakra-ui/react";
import { CardsProps } from "../../types/CardsProps";

import styles from "./styles.module.scss";

interface CardProduct {
   card: CardsProps;
}

export function TabCardProduct({ card }: CardProduct) {
   const { name, image, price } = card;

   return (
      <section className={styles.card__items}>
         <Box
            w={"xs"}
            bg={"orange.400"}
            _dark={{
               bg: "orange.800",
            }}
            shadow={"lg"}
            rounded={"lg"}
            overflow={"hidden"}
            mx={"auto"}
         >
            <Image w={"full"} h={56} fit={"cover"} src={image} alt={"avatar"} />

            <Box py={5} textAlign={"center"}>
               <Text
                  as={"h3"}
                  fontSize={"2xl"}
                  color={"gray.800"}
                  _dark={{
                     color: "white",
                  }}
                  fontWeight={"extrabold"}
               >
                  {name}
               </Text>
               <chakra.span
                  fontWeight={600}
                  fontSize={"sm"}
                  color={"gray.700"}
                  _dark={{
                     color: "gray.200",
                  }}
               >
                  ${price}
               </chakra.span>
            </Box>
         </Box>
      </section>
   );
}
