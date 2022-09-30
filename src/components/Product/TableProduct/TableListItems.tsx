import { memo } from "react";
import { Td, Tr } from "@chakra-ui/react";
import { CardsProps } from "./index";

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

export default memo(TableListItems);
