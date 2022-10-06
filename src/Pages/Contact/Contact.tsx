import { memo } from "react";
import { Box } from "@chakra-ui/react";
import { ContactContent, Navigation, Footer, MotionFlex, item } from "./index";

export function Contact() {
   return (
      <section>
         <Navigation />

         <Box h={"100vh"}>
            <MotionFlex variants={item} initial={"hidden"} animate={"visible"}>
               <ContactContent
                  title="Entre em contato com a gente!"
                  content="Entre em contato com a FiqLimp, queremos tirar suas dúvidas, ouvir suas críticas e sugestões."
               />
            </MotionFlex>
         </Box>

         <Footer />
      </section>
   );
}

export default memo(Contact);
