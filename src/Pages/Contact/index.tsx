import { Container } from "@chakra-ui/react";
import { ContactContent } from "../../components/Contact";
import { Footer } from "../../components/Footer";
import { Navigation } from "../../components/Navigation/Navigation";

export function Contact() {
   return (
      <section>
         <Navigation />

         <Container maxW={"1200px"} h={"75vh"}>
            <ContactContent
               title="Contact us!"
               content="Get in touch with FiqLimp, we want to clear your doubts, hear
                  your criticisms and suggestions."
            />
         </Container>

         <Footer title="© 2022 Fiq | Limp. All rights reserved" />
      </section>
   );
}
