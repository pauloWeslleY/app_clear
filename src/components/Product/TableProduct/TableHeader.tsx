import { memo } from "react";
import { Th, Thead, Tr } from "@chakra-ui/react";

interface TableProps {
   title: string;
   name: string;
   price: string;
   payment: string;
}

export function TableHeader({ name, title, price, payment }: TableProps) {
   return (
      <Thead>
         <Tr>
            <Th>{name}</Th>
            <Th>{title}</Th>
            <Th>{payment}</Th>
            <Th isNumeric>{price}</Th>
         </Tr>
      </Thead>
   );
}

export default memo(TableHeader);
