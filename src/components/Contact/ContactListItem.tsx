import { Flex, ListIcon, ListItem, Text } from "@chakra-ui/react";
import { ContactProps } from "../../data/ContactProps";

export function ContactListItem({ title, icon }: ContactProps) {
   return (
      <ListItem>
         <Flex alignItems={"center"} pl={"7rem"}>
            <ListIcon as={icon} color={"orange.500"} fontSize={"2rem"} />
            <Text as={"span"} fontSize={"1.5rem"} fontWeight={"regular"}>
               {title}
            </Text>
         </Flex>
      </ListItem>
   );
}
