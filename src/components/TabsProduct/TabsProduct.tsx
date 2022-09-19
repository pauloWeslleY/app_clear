import {
   Flex,
   Tab,
   TabList,
   TabPanel,
   TabPanels,
   Tabs,
} from "@chakra-ui/react";
import { tab__cards } from "../../data/TabCardsProps";
import { TabCards } from "./TabCards";
import { TabSlideCards } from "./TabSlideCards";

export function TabsProduct() {
   return (
      <section>
         <Tabs>
            <TabList>
               <Tab>Product 1</Tab>
               <Tab>Product 2</Tab>
               <Tab>Product 3</Tab>
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
                  <p>three!</p>
               </TabPanel>
            </TabPanels>
         </Tabs>
      </section>
   );
}
