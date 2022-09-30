import { memo } from "react";
import {
   Flex,
   Tab,
   TabList,
   TabPanel,
   TabPanels,
   Tabs,
} from "@chakra-ui/react";
import { tab__cards } from "../../../data/TabCardsProps";
import { TabCardProduct, TabCards, TabSlideCards, TabTitle } from "./index";

import styles from "./styles.module.scss";

export function TabsProduct() {
   return (
      <section>
         <Tabs
            align={"center"}
            pt={"3.5rem"}
            colorScheme={"orange"}
            defaultIndex={1}
         >
            <TabList>
               <Tab>
                  <TabTitle title="Cleaning Accessories" />
               </Tab>
               <Tab>
                  <TabTitle title="Cleaning Products" />
               </Tab>
               <Tab>
                  <TabTitle title="Chemicals" />
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
      </section>
   );
}

export default memo(TabsProduct);
