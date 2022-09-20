import { memo } from "react";
import { Table, TableCaption, TableContainer } from "@chakra-ui/react";
import { TableList, TableHeader } from "./index";

export function TableProductHero() {
   return (
      <TableContainer>
         <Table colorScheme={"orange"}>
            <TableCaption>Products On Sale</TableCaption>
            <TableHeader
               name="Types of Products"
               title="Products"
               payment="Form of payment"
               price="Price"
            />

            <TableList />
         </Table>
      </TableContainer>
   );
}

export default memo(TableProductHero);
