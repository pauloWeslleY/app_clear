import { memo } from "react";
import {
   Box,
   Flex,
   Stack,
   HStack,
   IconButton,
   useDisclosure,
   chakra,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import {
   ButtonDarkMode,
   getNavLinks,
   useColor,
   variantsNavigation,
} from "./index";

export function Navigation() {
   const { isOpen, onOpen, onClose } = useDisclosure();
   const { THEME } = useColor();

   //[] Button Icon Toggle
   const iconToggle = isOpen ? <CloseIcon /> : <HamburgerIcon />;
   const openMenu = () => (isOpen ? onClose : onOpen);

   return (
      <Box
         bg={THEME.COLORS.NAVIGATION_BG}
         shadow={"dark-lg"}
         position={"sticky"}
         top={0}
         zIndex={5}
      >
         <Flex h={16} alignItems={"center"} justify={"space-around"}>
            <IconButton
               aria-label={"Abrir Menu de Navegação"}
               icon={iconToggle}
               size={"md"}
               fontSize={"1.1rem"}
               display={{ md: "none" }}
               bg={"transparent"}
               _hover={{
                  bg: "transparent",
               }}
               _active={{
                  bg: "transparent",
               }}
               onClick={openMenu()}
            />
            <HStack spacing={8}>
               <Box>
                  <chakra.h1 fontSize={"xl"} fontWeight={"extrabold"} ml={"2"}>
                     App Fiq
                     <chakra.span color={THEME.COLOR.NAV_LOGO_COLOR}>
                        Limp.
                     </chakra.span>
                  </chakra.h1>
               </Box>
               <HStack
                  as={"nav"}
                  spacing={4}
                  display={{ base: "none", md: "flex" }}
               >
                  {getNavLinks()}
               </HStack>
            </HStack>
            <HStack align={"flex-end"}>
               <ButtonDarkMode />
            </HStack>
         </Flex>

         <motion.nav
            animate={isOpen ? "open" : "closed"}
            variants={variantsNavigation}
         >
            {isOpen ? (
               <Box pb={4} display={{ md: "block" }}>
                  <Stack as={"nav"} spacing={4} align={"center"}>
                     {getNavLinks()}
                  </Stack>
               </Box>
            ) : null}
         </motion.nav>
      </Box>
   );
}

export default memo(Navigation);
