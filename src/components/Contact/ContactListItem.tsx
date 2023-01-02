import { memo } from "react";
import {
   ListIcon,
   ListItemProps,
   ListItem,
   Text,
   Flex,
} from "@chakra-ui/react";
import { ContactProps, useColor } from "./index";

interface ContactListItemProps extends ListItemProps {
   contact: ContactProps;
}

export function ContactListItem({ contact }: ContactListItemProps) {
   const { title, icon, ...props } = contact;
   const { THEME } = useColor();

   return (
      <ListItem {...props}>
         <Flex
            alignItems={"center"}
            fontSize={{ base: "xl", md: "3xl", lg: "2rem" }}
         >
            <ListIcon as={icon} color={THEME.COLOR.CONTACT_LIST_ICON_COLOR} />
            <Text as={"span"} fontWeight={"regular"}>
               {title}
            </Text>
         </Flex>
      </ListItem>
   );
}

export default memo(ContactListItem);

// *8486
