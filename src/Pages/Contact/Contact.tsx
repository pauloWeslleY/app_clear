import { memo } from "react";
import { Container } from "@chakra-ui/react";
import { ContactContent, Navigation, Footer, MotionFlex, item } from "./index";

export function Contact() {
   return (
      <section>
         <Navigation />

         <Container maxW={"1200px"} h={"100vh"}>
            <MotionFlex variants={item} initial={"hidden"} animate={"visible"}>
               <ContactContent
                  title="Contact us!"
                  content="Get in touch with FiqLimp, we want to clear your doubts, hear
                  your criticisms and suggestions."
               />
            </MotionFlex>
         </Container>

         <Footer />
      </section>
   );
}

export default memo(Contact);
