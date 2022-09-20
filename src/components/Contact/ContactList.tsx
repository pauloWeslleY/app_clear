import { List } from "@chakra-ui/react";
import { ContactListItem } from "./ContactListItem";
import { contact__props } from "../../data/ContactProps";

export function ContactList() {
   return (
      <List spacing={"2rem"}>
         {contact__props.map((items) => (
            <ContactListItem
               key={items.id}
               title={items.title}
               icon={items.icon}
            />
         ))}
      </List>
   );
}
