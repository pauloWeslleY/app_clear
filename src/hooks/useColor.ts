import { useColorModeValue } from "@chakra-ui/react";

export function useColor() {
   const bg__navigation = useColorModeValue("gray.100", "gray.900");

   // * Cards ProductHero
   const bg__cards_product = useColorModeValue("white", "gray.800");



   // * Background Footer Components
   const background__footer = useColorModeValue('gray.100', 'gray.900');
   const bg__color_footer = useColorModeValue('gray.700', 'gray.200');
   const border__color_footer = useColorModeValue('gray.200', 'gray.700');
   // * Footer Icons
   const background_footer_button_hover = useColorModeValue(
      'blackAlpha.200',
      'whiteAlpha.200'
   );
   const background_footer_button = useColorModeValue(
      'blackAlpha.100',
      'whiteAlpha.100'
   );

   return {
      bg__navigation,
      background_footer_button,
      background_footer_button_hover,
      background__footer,
      bg__color_footer,
      border__color_footer,
      bg__cards_product
   }
}
