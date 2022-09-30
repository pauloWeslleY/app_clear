import { useColorModeValue } from "@chakra-ui/react";

export function useColor() {
   const THEME = {
      COLORS: {
         NAVIGATION_BG: useColorModeValue("gray.100", "gray.900"),

         HOME_HERO_SPAN_BG: useColorModeValue("gray.50", "gray.900"),

         PRODUCT_CARDS_HERO_COLORS: useColorModeValue("white", "gray.800"),
         PRODUCT_CARDS_HERO_TITLE_COLORS: useColorModeValue("gray.800", "white"),

         ACTION_HERO_BG: useColorModeValue("orange.200", "yellow.400"),
         ACTION_HERO_SPAN_COLORS: useColorModeValue("gray.900", "gray.700"),
         ACTION_HERO_SPAN_COLORS_2: useColorModeValue("brand.600", "gray.700"),

         SLIDE_CARDS_BG: useColorModeValue("gray.100", "orange.800"),

         TAB_CARD_ITEM_BG: useColorModeValue("orange.400", "orange.700"),
         TAB_CARD_ITEM_TITLE_COLORS: useColorModeValue("gray.800", "white"),
         TAB_CARD_ITEM_SPAN_BG: useColorModeValue("gray.200", "orange.400"),
         TAB_CARD_ITEM_SPAN_COLORS: useColorModeValue("gray.800", "gray.900"),

         TAB_CARD_PRODUCT_BG: useColorModeValue("orange.400", "orange.800"),
         TAB_CARD_PRODUCT_TITLE_COLORS: useColorModeValue("gray.800", "white"),
         TAB_CARD_PRODUCT_SPAN_COLORS: useColorModeValue("gray.700", "gray.200"),

         ABOUT_BG: useColorModeValue("gray.50", "gray.800"),
         ABOUT_TITLE_COLORS: useColorModeValue("gray.900", "gray.400"),
         ABOUT_CONTENT_COLORS: useColorModeValue("gray.600", "gray.400"),

         // * Background Footer Components
         FOOTER_BG: useColorModeValue(
            'gray.100',
            'gray.900'
         ),
         FOOTER_COLORS: useColorModeValue('gray.700', 'gray.200'),
         FOOTER_BORDER_COLORS: useColorModeValue('gray.200', 'gray.700'),
         // * Footer Button Icons
         FOOTER_BTN_BG: useColorModeValue(
            'gray.100',
            'gray.700'
         ),
         FOOTER_BTN_BG_HOVER: useColorModeValue(
            'blackAlpha.200',
            'whiteAlpha.200'
         ),
      },
      COLOR: {
         NAV_LOGO_COLOR: "yellow.10",
         HEAD_TITLE_LINE_COLOR: "yellow.10",

         BANNER_SUBTITLE_COLOR: "yellow.10",
         BANNER_TEXT_COLOR: "gray.500",

         HOME_HERO_TEXT_COLOR: "gray.600",

         CARDS_HERO_TEXT_COLOR: "gray.600",
         CARDS_HERO_ICON_COLOR: "yellow.10",
         CARDS_HERO_ICON_BG: "gray.100",

         PRODUCT_TITLE_COLOR: "yellow.10",

         PRODUCT_CARDS_HERO_COLORS_HOVER: "blackAlpha.500",


         ABOUT_SPAN_COLOR: "orange.400",
         ABOUT_TEXT_COLOR: "gray.400",

         CONTACT_LIST_ICON_COLOR: "orange.500",
         CONTACT_TEXT_COLOR: "gray.500",
      }
   }

   return { THEME }
}
