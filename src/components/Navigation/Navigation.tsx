import { memo, useState } from "react";
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
import { ButtonDarkMode, getNavLinks, useColor } from "./index";

const variants = {
   open: { opacity: 1, x: 0 },
   closed: { opacity: 0, x: "-100%" },
};

export function Navigation() {
   const { isOpen, onOpen, onClose } = useDisclosure();
   const { bg__navigation } = useColor();

   const [isOpenNav, setIsOpenNav] = useState(false);

   //[] Button Icon Toggle
   const iconToggle = isOpen ? <CloseIcon /> : <HamburgerIcon />;
   const openMenu = () => (isOpen ? onClose : onOpen);

   return (
      <Box bg={bg__navigation} shadow={"dark-lg"} px={4}>
         <Flex
            h={16}
            alignItems={"center"}
            justify={"space-around"}
            maxW={"1xl"}
         >
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
                     <chakra.span color={"yellow.10"}>Limp.</chakra.span>
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

         <motion.nav animate={isOpen ? "open" : "closed"} variants={variants}>
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
