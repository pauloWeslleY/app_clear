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

import { menuFooter } from "./MenuFooter";
import { useColor } from "../../hooks/useColor";

import { Logo } from "./Logo";

interface Props {
   label: string;
   href: string;
   children: ReactNode;
}

interface Footer {
   title: string;
}

const SocialButton = ({ children, label, href }: Props) => {
   const { bg_footer_button, bg_footer_button_hover } = useColor();
   return (
      <chakra.button
         bg={bg_footer_button}
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
            bg: bg_footer_button_hover,
         }}
      >
         <VisuallyHidden>{label}</VisuallyHidden>
         {children}
      </chakra.button>
   );
};

export function Footer({ title }: Footer) {
   const { bg__footer, color__footer, border__color_footer } = useColor();
   return (
      <Box bg={bg__footer} color={color__footer}>
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
               {menuFooter()}
            </Stack>
         </Container>

         <Box
            borderTopWidth={1}
            borderStyle={"solid"}
            borderColor={border__color_footer}
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
               <Text as={"span"} fontSize={"1rem"} fontWeight={"semibold"}>
                  {title}
               </Text>
               <Stack direction={"row"} spacing={6}>
                  <SocialButton label={"Twitter"} href={"#"}>
                     <FaFacebook />
                  </SocialButton>
                  <SocialButton label={"WhatsApp"} href={"#"}>
                     <FaWhatsapp />
                  </SocialButton>
                  <SocialButton label={"Instagram"} href={"#"}>
                     <FaInstagram />
                  </SocialButton>
               </Stack>
            </Container>
         </Box>
      </Box>
   );
}

export default memo(Footer);
