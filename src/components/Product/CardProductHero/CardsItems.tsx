import { memo } from "react";
import { Box, Flex, chakra, Icon } from "@chakra-ui/react";
import { CardHeroProps, useColor } from "./index";

import styles from "./styles.module.scss";

export function CardsItems({ title, icon }: CardHeroProps) {
   const { THEME } = useColor();

   return (
      <Flex className={styles.card__items}>
         <Box
            w={"20.625rem"}
            maxW={"sm"}
            px={4}
            py={3}
            bg={THEME.COLORS.PRODUCT_CARDS_HERO_COLORS}
            shadow={"2xl"}
            rounded={"md"}
            transition={"all 0.5s ease-in-out"}
            _hover={{
               bg: THEME.COLOR.PRODUCT_CARDS_HERO_COLORS_HOVER,
            }}
            cursor={"pointer"}
         >
            <Flex justifyContent={"center"} alignItems={"center"} py={"0.9rem"}>
               <Icon as={icon} w={"8rem"} h={"9rem"} />
            </Flex>

            <Box textAlign={"center"}>
               <chakra.h1
                  fontSize={"lg"}
                  fontWeight={"bold"}
                  mt={2}
                  color={THEME.COLORS.PRODUCT_CARDS_HERO_TITLE_COLORS}
               >
                  {title}
               </chakra.h1>
            </Box>
         </Box>
      </Flex>
   );
}

export default memo(CardsItems);
