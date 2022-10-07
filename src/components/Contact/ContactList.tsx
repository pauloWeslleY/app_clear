import { memo } from "react";
import { List } from "@chakra-ui/react";
import { ContactListItem, CONTACT } from "./index";

export function ContactList() {
   return (
      <List spacing={"2rem"}>
         {CONTACT.map((items) => (
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
