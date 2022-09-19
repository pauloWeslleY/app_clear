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
import { CardsItemsProps } from "../data/carditemprops";

export function TableProductHero({ name, price }: CardsItemsProps) {
   return (
      <TableContainer>
         <Table variant={"striped"} colorScheme={"orange"}>
            <TableCaption>Imperial to metric conversion factors</TableCaption>
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
