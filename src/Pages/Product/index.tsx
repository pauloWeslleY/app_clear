import {
   Box,
   Container,
   Divider,
   Flex,
   Heading,
   Stack,
   Text,
   useBreakpointValue,
} from "@chakra-ui/react";

import { Navigation } from "../../components/Navigation/Navigation";
import { ProductHero } from "../../components/ProductHero";
import { CardsProductHero } from "../../components/CardProductHero";
import { TableProductHero } from "../../components/TableProduct/";
import { SlideCard } from "../../components/SlideCards/SlideCard";
import { TabsProduct } from "../../components/TabsProduct";
import { Footer } from "../../components/Footer";
import { Stats } from "../../components/Stats";
import { HeadTitle } from "../../components/Head";

import { card__items } from "../../data/CardItemProps";

export function Product() {
   const height = useBreakpointValue({ base: "20%", md: "30%" });

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
                     height: height,
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

         <Container
            maxW={{
               base: "1220px",
               sm: "550px",
               md: "1024px",
               lg: "1350px",
               xl: "8xl",
            }}
            w={"100%"}
         >
            <CardsProductHero />

            <Flex align={"center"} justify={"center"}>
               <Divider w={"50%"} h={"0.2rem"} bg={"yellow.10"} my={"1rem"} />
            </Flex>

            <HeadTitle title="Table Products" />

            <Box mx={"auto"} w={"100%"} py={"2rem"}>
               <TableProductHero />
            </Box>

            <Box mx={"auto"} w={"100%"} pt={"4rem"}>
               <Stack h={"4rem"} direction={"row"}>
                  <Divider
                     orientation={"vertical"}
                     pr={"0.2rem"}
                     bg={"yellow.10"}
                  />
                  <Heading fontWeight={"semibold"} fontSize={"2.7rem"}>
                     Last Releases
                  </Heading>
               </Stack>
            </Box>
         </Container>

         <Box mx={"auto"} w={"100%"} maxW={"1245px"} py={"5rem"}>
            {card__items && <SlideCard cards={card__items} />}
         </Box>

         <Container
            maxW={{
               base: "1220px",
               sm: "550px",
               md: "1024px",
               lg: "1350px",
               xl: "8xl",
            }}
            w={"100%"}
         >
            <Flex align={"center"} justify={"center"}>
               <Divider w={"50%"} h={"0.2rem"} bg={"yellow.10"} my={"1rem"} />
            </Flex>

            <Stats />

            <HeadTitle title="Top Selling Products" />

            <TabsProduct />
         </Container>

         <Footer title="© 2022 Fiq | Limp. All rights reserved" />
      </section>
   );
}
