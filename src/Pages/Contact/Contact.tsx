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
                  title="Entre em contato com a gente!"
                  content="Entre em contato com a FiqLimp, queremos tirar suas dúvidas, ouvir suas críticas e sugestões."
               />
            </MotionFlex>
         </Container>

         <Footer />
      </section>
   );
}

export default memo(Contact);
