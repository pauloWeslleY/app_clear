import { memo } from "react";
import { Box, Image, Text, chakra, Flex } from "@chakra-ui/react";
import { CardsProps, useColor } from "./index";

// import styles from "./styles.module.scss";

interface CardProduct {
   card: CardsProps;
}

export function TabCardProduct({ card }: CardProduct) {
   const { name, image, price } = card;
   const { THEME } = useColor();

   return (
      <Flex
         direction={"column"}
         basis={"15rem"}
         grow={1}
         shrink={1}
         m={1}
         bg={THEME.COLORS.TAB_CARD_PRODUCT_BG}
         shadow={"lg"}
         rounded={"xl"}
      >
         <Image
            roundedTop={"xl"}
            w={"full"}
            h={56}
            fit={"cover"}
            src={image}
            alt={"avatar"}
         />

         <Box p={2} textAlign={"center"}>
            <Text
               as={"h3"}
               fontSize={"2xl"}
               color={THEME.COLORS.TAB_CARD_PRODUCT_TITLE_COLORS}
               fontWeight={"extrabold"}
            >
               {name}
            </Text>
            <chakra.span
               fontWeight={500}
               fontSize={"1.5rem"}
               color={THEME.COLORS.TAB_CARD_PRODUCT_SPAN_COLORS}
            >
               ${price}
            </chakra.span>
         </Box>
      </Flex>
   );
}
export default memo(TabCardProduct);
