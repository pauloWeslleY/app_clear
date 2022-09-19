import {
   Box,
   Center,
   Divider,
   Flex,
   Heading,
   Text,
   useBreakpointValue,
} from "@chakra-ui/react";
import { Cards } from "../../components/Cards/Cards";
import { Navigation } from "../../components/Navigation";
import { ProductHero } from "../../components/ProductHero";
import { SlideCard } from "../../components/SlideCards/SlideCard";
import { carditems } from "../../data/carditemprops";
import { TableProductHero } from "../../components/TableProductHero";
import { Footer } from "../../components/Footer";

export function Product() {
   return (
      <section>
         <Navigation />
         <ProductHero title="Ipsum dolor sed accusam sea voluptua ipsum consetetur diam, consetetur." />

         <Flex alignItems={"center"} justify={"center"} pt={"2.5rem"}>
            <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
               <Text
                  as={"span"}
                  position={"relative"}
                  _after={{
                     content: "''",
                     width: "full",
                     height: useBreakpointValue({ base: "20%", md: "30%" }),
                     position: "absolute",
                     bottom: 1,
                     left: 0,
                     bg: "yellow.10",
                     zIndex: -1,
                  }}
               >
                  Our
               </Text>{" "}
               <Text color={"yellow.10"} as={"span"}>
                  Services
               </Text>{" "}
            </Heading>
         </Flex>

         <Cards />
         <Flex align={"center"} justify={"center"}>
            <Divider w={"50%"} h={"0.2rem"} bg={"yellow.10"} my={"1rem"} />
         </Flex>

         <Center>
            <Heading
               pt={"3.5rem"}
               fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
            >
               <Text as={"h3"} fontWeight={"thin"}>
                  Table Products
               </Text>
            </Heading>
         </Center>

         <Box mx={"auto"} maxW={"1200px"} w={"100%"} py={"2rem"}>
            <TableProductHero name="Product" price="12.99" />
         </Box>

         <Box mx={"auto"} w={"100%"} maxW={"1200px"} py={"5rem"}>
            {carditems && <SlideCard cards={carditems} />}
         </Box>

         <Footer title="© 2022 Fiq | Limp. All rights reserved" />
      </section>
   );
}
