import { memo } from "react";
import { Table, TableCaption, TableContainer } from "@chakra-ui/react";
import { TableList, TableHeader } from "./index";

interface TableCaptionProps {
   tableCaption: string;
}

export function TableProductHero({ tableCaption }: TableCaptionProps) {
   return (
      <TableContainer>
         <Table colorScheme={"orange"}>
            <TableCaption>{tableCaption}</TableCaption>
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
