import { Tbody } from "@chakra-ui/react";
import { TableListItems, table__items } from "./index";

export function TableList() {
   return (
      <Tbody>
         {table__items.map((items) => (
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
