import { memo } from "react";
import { Container } from "@chakra-ui/react";
import {
   Navigation,
   BannerHero,
   ActionHero,
   CardsHero,
   HomeHero,
   BoxTeste,
   Footer,
   Section,
} from "./index";

export function Home() {
   return (
      <section>
         <Navigation />
         <BannerHero
            title="Cleaning Products and"
            subtitle="Personal Hygiene"
            textContent="Never miss a meeting. Never be late for one too. Keep track of your meetings and receive smart reminders in appropriate times. Read your smart “Daily Agenda” every morning."
         />
         {/* <Section />
         <BoxTeste /> */}
         <ActionHero
            title="Are you looking for cleaning products?"
            subtitle="You can find it here in the Fiq Limp app."
         />
         <Container maxW={"1200px"}>
            <CardsHero />

            <HomeHero
               title="Quality Products at the best price"
               content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore"
               span="Our Story"
            />
         </Container>
         <Footer />
      </section>
   );
}

export default memo(Home);
