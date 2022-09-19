import { Box, Flex, chakra, Icon } from "@chakra-ui/react";
import { CardsProps } from "../../data/cardsprops";
import { useColor } from "../../hooks/useColor";

import styles from "./styles.module.scss";

export function CardsItems({ title, content, icon }: CardsProps) {
   const { bg__cards_product } = useColor();
   return (
      <section>
         <Flex className={styles.card__items}>
            <Box
               w={"full"}
               maxW={"sm"}
               px={4}
               py={3}
               bg={bg__cards_product}
               shadow={"2xl"}
               rounded={"md"}
               transition={"all 0.5s ease-in-out"}
               _hover={{
                  bg: "orange.500",
               }}
               cursor={"pointer"}
            >
               <Flex
                  justifyContent={"center"}
                  alignItems={"center"}
                  py={"0.9rem"}
               >
                  <Icon as={icon} w={"9rem"} h={"9rem"} />
               </Flex>

               <Box textAlign={"center"}>
                  <chakra.h1
                     fontSize={"lg"}
                     fontWeight={"bold"}
                     mt={2}
                     color={"gray.800"}
                     _dark={{
                        color: "white",
                     }}
                  >
                     {title}
                  </chakra.h1>
                  <chakra.p
                     fontSize={"sm"}
                     mt={2}
                     color={"gray.600"}
                     _dark={{
                        color: "gray.300",
                     }}
                  >
                     {content}
                  </chakra.p>
               </Box>
            </Box>
         </Flex>
      </section>
   );
}
