import { memo } from "react";
import { Box, Image, Text, chakra } from "@chakra-ui/react";
import { CardsProps, useColor } from "./index";

import styles from "./styles.module.scss";

interface CardProduct {
   card: CardsProps;
}

export function TabCardProduct({ card }: CardProduct) {
   const { name, image, price } = card;
   const { THEME } = useColor();

   return (
      <section className={styles.card__items}>
         <Box
            w={"xs"}
            bg={THEME.COLORS.TAB_CARD_PRODUCT_BG}
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
                  color={THEME.COLORS.TAB_CARD_PRODUCT_TITLE_COLORS}
                  fontWeight={"extrabold"}
               >
                  {name}
               </Text>
               <chakra.span
                  fontWeight={600}
                  fontSize={"sm"}
                  color={THEME.COLORS.TAB_CARD_PRODUCT_SPAN_COLORS}
               >
                  ${price}
               </chakra.span>
            </Box>
         </Box>
      </section>
   );
}
export default memo(TabCardProduct);
