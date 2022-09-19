import {
   Table,
   TableCaption,
   TableContainer,
   Tbody,
   Td,
   Th,
   Thead,
   Tr,
} from "@chakra-ui/react";
import { CardsProps } from "../types/CardsProps";

export function TableProductHero({ name, price }: CardsProps) {
   return (
      <TableContainer>
         <Table colorScheme={"orange"}>
            <TableCaption>Products On Sale</TableCaption>
            <Thead>
               <Tr>
                  <Th>Products</Th>
                  <Th>Name</Th>
                  <Th isNumeric>Price</Th>
               </Tr>
            </Thead>
            <Tbody>
               <Tr>
                  <Td>{name}</Td>
                  <Td>Gary Plus Broom</Td>
                  <Td isNumeric>{price}</Td>
               </Tr>
               <Tr>
                  <Td>{name}</Td>
                  <Td>Sanfonado Sink Plunger</Td>
                  <Td isNumeric>{price}</Td>
               </Tr>
               <Tr>
                  <Td>{name}</Td>
                  <Td>Lava Bus Wood Base</Td>
                  <Td isNumeric>{price}</Td>
               </Tr>
            </Tbody>
         </Table>
      </TableContainer>
   );
}
