import { Tbody } from "@chakra-ui/react";
import { TableListItems, TABLE } from "./index";

export function TableList() {
   return (
      <Tbody>
         {TABLE.map((items) => (
            <TableListItems
               key={items.id}
               name={items.name}
               price={items.price}
               typesProducts={items.typesProducts}
               formPayment={items.formPayment}
            />
         ))}
      </Tbody>
   );
}
