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
               name="Tipos de Produtos"
               title="Produtos"
               payment="Formas de pagamentos"
               price="Preço"
            />

            <TableList />
         </Table>
      </TableContainer>
   );
}

export default memo(TableProductHero);
