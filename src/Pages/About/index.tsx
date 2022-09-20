import {
   Box,
   Container,
   SimpleGrid,
   chakra,
   Flex,
   Image,
   Divider,
} from "@chakra-ui/react";
import { AboutContent, AboutUs } from "../../components/About";
import { Footer } from "../../components/Footer";
import { HeadTitle } from "../../components/Head";
import { Navigation } from "../../components/Navigation/Navigation";

export function About() {
   return (
      <section>
         <Navigation />

         <Container maxW={"1200px"}>
            <HeadTitle title="About Us" />
            <AboutContent
               title="Decide how you integrate Payments"
               subtitle="Love to code? Next to our ready-made and free plugins you
               can use our expansive yet simple API; decide how you
               integrate Payments and build advanced and reliable products
               yourself from scratch."
            />

            <Flex align={"center"} justify={"center"}>
               <Divider w={"50%"} h={"0.2rem"} bg={"yellow.10"} my={"1rem"} />
            </Flex>
         </Container>
         <AboutUs
            name="João Santos de Jesus"
            foundation="Foundation"
            content="We had an incredible experience working with Chakra Templates and
            were impressed they made such a big difference in only three weeks.
            Our team is so grateful for the wonderful improvements they made and
            their ability to get familiar with the product concept so quickly."
         />

         <Footer title="© 2022 Fiq | Limp. All rights reserved" />
      </section>
   );
}
