import { memo } from "react";
import { Box } from "@chakra-ui/react";
import { ContactContent, MotionFlex, item } from "./index";

function Contact() {
   return (
      <main>
         <MotionFlex variants={item} initial={"hidden"} animate={"visible"}>
            <ContactContent
               title="Entre em contato com a gente!"
               content="Entre em contato com a FiqLimp, queremos tirar suas dúvidas, ouvir suas críticas e sugestões."
            />
         </MotionFlex>
      </main>
   );
}

export default memo(Contact);
