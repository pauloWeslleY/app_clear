import { memo } from "react";
import {
   Flex,
   Tab,
   TabList,
   TabPanel,
   TabPanels,
   Tabs,
} from "@chakra-ui/react";
import {
   TabCardProduct,
   TabCards,
   TabSlideCards,
   TabTitle,
   tab__cards,
} from "./index";

import styles from "./styles.module.scss";

export function TabsProduct() {
   return (
      <Tabs
         align={"center"}
         pt={"3.5rem"}
         colorScheme={"orange"}
         defaultIndex={1}
      >
         <TabList>
            <Tab>
               <TabTitle title="Acessórios de limpeza" />
            </Tab>
            <Tab>
               <TabTitle title="Produtos de Limpeza" />
            </Tab>
            <Tab>
               <TabTitle title="Produtos em Geral" />
            </Tab>
         </TabList>

         <TabPanels>
            <TabPanel>
               <TabCards />
            </TabPanel>
            <TabPanel>
               <Flex w={"100%"}>
                  {tab__cards && <TabSlideCards cards={tab__cards} />}
               </Flex>
            </TabPanel>
            <TabPanel>
               <Flex className={styles.card__container}>
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
