import { Box, Flex, chakra, Icon } from "@chakra-ui/react";
import { CardsProps } from "../../data/cardsprops";

import styles from "./styles.module.scss";

export function CardsItems({ title, content, icon }: CardsProps) {
   return (
      <section>
         <Flex className={styles.card__items}>
            <Box
               w={"full"}
               maxW={"sm"}
               px={4}
               py={3}
               bg={"white"}
               _dark={{
                  bg: "orange.400",
               }}
               shadow={"lg"}
               rounded={"md"}
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
