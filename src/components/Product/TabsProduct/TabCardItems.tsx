import { memo } from "react";
import { Box, Flex, chakra } from "@chakra-ui/react";
import { CardsProps, useColor } from "./index";

interface Cards {
   card: CardsProps;
}

export function TabCardItems({ card }: Cards) {
   const { name, image, price } = card;
   const { THEME } = useColor();

   return (
      <Flex
         flexBasis={"100px"}
         flexGrow={1}
         flexShrink={1}
         direction={"column"}
         justifyContent={"center"}
         alignItems={"center"}
         w={"sm"}
         m={"2rem"}
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
            bg={THEME.COLORS.TAB_CARD_ITEM_BG}
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
               color={THEME.COLORS.TAB_CARD_ITEM_TITLE_COLORS}
               letterSpacing={1}
            >
               {name}
            </chakra.h3>
            <Flex
               alignItems={"center"}
               justifyContent={"center"}
               py={2}
               px={3}
               bg={THEME.COLORS.TAB_CARD_ITEM_SPAN_BG}
            >
               <chakra.span
                  fontWeight={"bold"}
                  color={THEME.COLORS.TAB_CARD_ITEM_SPAN_COLORS}
               >
                  ${price}
               </chakra.span>
            </Flex>
         </Box>
      </Flex>
   );
}

export default memo(TabCardItems);
