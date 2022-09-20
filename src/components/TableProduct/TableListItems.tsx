import { Td, Tr } from "@chakra-ui/react";
import { CardsProps } from "../../types/CardsProps";

export function TableListItems({
   name,
   price,
   typesProducts,
   formPayment,
}: CardsProps) {
   return (
      <Tr>
         <Td>{typesProducts}</Td>
         <Td>{name}</Td>
         <Td>{formPayment}</Td>
         <Td isNumeric>${price}</Td>
      </Tr>
   );
}
