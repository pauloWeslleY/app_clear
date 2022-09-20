import { Tbody } from "@chakra-ui/react";
import { table__items } from "../../data/TableProps";
import { TableListItems } from "./TableListItems";

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
