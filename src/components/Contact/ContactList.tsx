import { memo } from "react";
import { List } from "@chakra-ui/react";
import { ContactListItem, contact__props } from "./index";

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
export default memo(ContactList);
