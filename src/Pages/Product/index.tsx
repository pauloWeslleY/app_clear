import {
   Box,
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

export function Product() {
   return (
      <section>
         <Navigation />
         <ProductHero title="Ipsum dolor sed accusam sea voluptua ipsum consetetur diam, consetetur." />
         <Flex alignItems={"center"} justify={"center"} py={"2.5rem"}>
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
                  Products
               </Text>{" "}
            </Heading>
         </Flex>
         <Cards />
         <Flex align={"center"} justify={"center"}>
            <Divider w={"50%"} h={"0.2rem"} bg={"yellow.10"} my={"1rem"} />
         </Flex>
         <Box py={"5rem"}>{carditems && <SlideCard cards={carditems} />}</Box>
      </section>
   );
}
