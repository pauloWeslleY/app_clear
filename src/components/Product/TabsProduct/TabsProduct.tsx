import { memo } from "react";
import { Flex, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import {
   TabCardProduct,
   TabCardItems,
   TabSlideCards,
   TabTitle,
   tab__cards,
} from "./index";

export function TabsProduct() {
   const MENU = [
      "Acessórios de limpeza",
      "Produtos de Limpeza",
      "Produtos em Geral",
   ];

   return (
      <Tabs
         align={"center"}
         pt={"3.5rem"}
         colorScheme={"orange"}
         defaultIndex={1}
         size={"md"}
         variant={"solid-rounded"}
      >
         <TabList p={3} overflowX={"auto"}>
            {MENU.map((item, index) => (
               <TabTitle key={index} title={item} />
            ))}
         </TabList>

         <TabPanels>
            <TabPanel>
               <Flex flexWrap={"wrap"}>
                  {tab__cards.map((cards) => (
                     <TabCardItems key={cards.id} card={cards} />
                  ))}
               </Flex>
            </TabPanel>
            <TabPanel>
               <Flex>{tab__cards && <TabSlideCards cards={tab__cards} />}</Flex>
               <Flex>{tab__cards && <TabSlideCards cards={tab__cards} />}</Flex>
            </TabPanel>
            <TabPanel>
               <Flex wrap={"wrap"}>
                  {tab__cards.map((cards) => (
                     <TabCardProduct key={cards.id} card={cards} />
                  ))}
               </Flex>
            </TabPanel>
         </TabPanels>
      </Tabs>
   );
}

export default memo(TabsProduct);
