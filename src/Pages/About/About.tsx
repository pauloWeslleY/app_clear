import { memo } from "react";
import { Container, Flex, Divider } from "@chakra-ui/react";
import {
   Navigation,
   HeadTitle,
   AboutContent,
   AboutUs,
   Footer,
   MotionFlex,
   item,
} from "./index";

export function About() {
   return (
      <section>
         <Navigation />

         <Container maxW={"1200px"}>
            <MotionFlex
               justify={"center"}
               variants={item}
               initial={"hidden"}
               animate={"visible"}
            >
               <HeadTitle title="Sobre" />
            </MotionFlex>
            <AboutContent
               title="Decide how you integrate Payments"
               subtitle="Love to code? Next to our ready-made and free plugins you
               can use our expansive yet simple API; decide how you
               integrate Payments and build advanced and reliable products
               yourself from scratch."
               text="Nossa História"
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

         <Footer />
      </section>
   );
}

export default memo(About);
