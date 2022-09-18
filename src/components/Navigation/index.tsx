import {
   Box,
   Flex,
   Stack,
   HStack,
   IconButton,
   useDisclosure,
   chakra,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link as NavLink } from "react-router-dom";
import { navlink_props } from "./../../data/navprops";
import { useColor } from "./../../hooks/useColor";

import { ButtonDarkMode } from "../ToggleMode";

import "./styles.scss";

interface Props {
   path: string;
   children: ReactNode;
}

export function Navigation() {
   const { isOpen, onOpen, onClose } = useDisclosure();
   const { bg__navigation } = useColor();

   const NavItems: React.FC<any> = ({ children, path }: Props) => (
      <NavLink to={`/${path}`}>
         <button className="nav__link">{children}</button>
      </NavLink>
   );

   const getNav = () => {
      return navlink_props.map((nav) => (
         <NavItems key={nav.id} path={nav.path}>
            {nav.page}
         </NavItems>
      ));
   };

   return (
      <Box bg={bg__navigation} shadow={"dark-lg"} px={4}>
         <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
            <IconButton
               size={"md"}
               icon={isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
               aria-label={"Open Menu"}
               display={{ sm: "flex", md: "none" }}
               onClick={isOpen ? onClose : onOpen}
               justifyContent={"center"}
               bg={"transparent"}
            />
            <HStack spacing={8}>
               <Box>
                  <chakra.h1 fontSize={"xl"} fontWeight={"medium"} ml={"2"}>
                     Fiq | Limp
                  </chakra.h1>
               </Box>
               <HStack
                  as={"nav"}
                  spacing={4}
                  display={{ base: "none", md: "flex" }}
               >
                  {getNav()}
               </HStack>
            </HStack>
            <HStack align={"flex-end"}>
               <ButtonDarkMode />
            </HStack>
         </Flex>

         {isOpen ? (
            <Box pb={4} display={{ md: "none" }}>
               <Stack as={"nav"} spacing={4}>
                  {getNav()}
               </Stack>
            </Box>
         ) : null}
      </Box>
   );
}
