import { memo, ReactNode } from "react";
import {
   Box,
   chakra,
   Container,
   Stack,
   Text,
   VisuallyHidden,
} from "@chakra-ui/react";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

import { Logo, MenuFooterItemLink, useColor } from "./index";
interface Props {
   label: string;
   href: string;
   color: string;
   children: ReactNode;
}

interface Footer {
   title: string;
}

const SocialButton = ({ children, label, href, color }: Props) => {
   const { THEME } = useColor();
   return (
      <chakra.button
         bg={THEME.COLORS.FOOTER_BTN_BG}
         color={color}
         rounded={"full"}
         w={8}
         h={8}
         cursor={"pointer"}
         as={"a"}
         href={href}
         display={"inline-flex"}
         alignItems={"center"}
         justifyContent={"center"}
         transition={"all 0.3s ease-in-out"}
         _hover={{
            bg: THEME.COLORS.FOOTER_BTN_BG_HOVER,
         }}
      >
         <VisuallyHidden>{label}</VisuallyHidden>
         {children}
      </chakra.button>
   );
};

export function Footer() {
   const { THEME } = useColor();
   const title__footer: Footer = {
      title: "Copyright © 2022 Todos os Direitos Reservados - João Santos de Jesus.",
   };

   return (
      <Box bg={THEME.COLORS.FOOTER_BG} color={THEME.COLORS.FOOTER_COLORS}>
         <Container
            as={Stack}
            maxW={"6xl"}
            py={4}
            spacing={4}
            justify={"center"}
            align={"center"}
         >
            <Logo />
            <Stack direction={"row"} spacing={6}>
               <MenuFooterItemLink />
            </Stack>
         </Container>

         <Box
            borderTopWidth={1}
            borderStyle={"solid"}
            borderColor={THEME.COLORS.FOOTER_BORDER_COLORS}
         >
            <Container
               as={Stack}
               maxW={"6xl"}
               py={4}
               direction={{ base: "column", md: "row" }}
               spacing={4}
               justify={{ base: "center", md: "space-between" }}
               align={{ base: "center", md: "center" }}
            >
               <Text as={"span"} fontSize={"0.94rem"} fontWeight={"semibold"}>
                  {title__footer.title}
               </Text>
               <Stack direction={"row"} spacing={6}>
                  <SocialButton label={"Twitter"} href={"#"} color={"blue.500"}>
                     <FaFacebook />
                  </SocialButton>
                  <SocialButton
                     label={"WhatsApp"}
                     href={"#"}
                     color={"green.500"}
                  >
                     <FaWhatsapp />
                  </SocialButton>
                  <SocialButton
                     label={"Instagram"}
                     href={"#"}
                     color={"red.500"}
                  >
                     <FaInstagram />
                  </SocialButton>
               </Stack>
            </Container>
         </Box>
      </Box>
   );
}

export default memo(Footer);
