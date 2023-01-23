import { memo } from "react";
import {
   useColorMode,
   useColorModeValue,
   IconButton,
   IconButtonProps,
} from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

function ButtonDarkMode({ ...props }: IconButtonProps) {
   const { toggleColorMode } = useColorMode();
   const SwitchIcon = useColorModeValue(FaMoon, FaSun);

   return (
      <IconButton
         fontSize={"lg"}
         size={"md"}
         color={"current"}
         marginLeft={"2"}
         onClick={toggleColorMode}
         icon={<SwitchIcon />}
         bg={"transparent"}
         _hover={{
            bg: "transparent",
         }}
         _active={{
            bg: "transparent",
         }}
         {...props}
      />
   );
}

export default memo(ButtonDarkMode);
