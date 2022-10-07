import { memo } from "react";
import { Flex, ListIcon, ListItem, Text } from "@chakra-ui/react";
import { ContactProps, useColor } from "./index";

export function ContactListItem({ title, icon }: ContactProps) {
   const { THEME } = useColor();
   return (
      <ListItem>
         <Flex alignItems={"center"}>
            <ListIcon
               as={icon}
               color={THEME.COLOR.CONTACT_LIST_ICON_COLOR}
               fontSize={"2rem"}
            />
            <Text as={"span"} fontSize={"1.5rem"} fontWeight={"regular"}>
               {title}
            </Text>
         </Flex>
      </ListItem>
   );
}

export default memo(ContactListItem);

// *8486
