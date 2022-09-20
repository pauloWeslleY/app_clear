import { Container } from "@chakra-ui/react";

import { Navigation } from "../../components/Navigation";
import { BannerHero } from "../../components/BannerHero";
import { ActionHero } from "./../../components/ActionHero";
import { MainHero } from "./../../components/MainHero";
import { HomeHero } from "../../components/HomeHero";
import { Footer } from "./../../components/Footer";

export function Home() {
   return (
      <section>
         <Navigation />
         <BannerHero
            title="Cleaning Products and"
            subtitle="Personal Hygiene"
            textContent="Never miss a meeting. Never be late for one too. Keep track of your meetings and receive smart reminders in appropriate times. Read your smart “Daily Agenda” every morning."
         />
         <ActionHero
            title="Are you looking for cleaning products?"
            subtitle="You can find it here in the Fiq Limp app."
         />
         <Container maxW={"1200px"}>
            <MainHero />

            <HomeHero
               title="Quality Products at the best price"
               content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore"
               span="Our Story"
            />
         </Container>
         <Footer title="© 2022 Fiq | Limp. All rights reserved" />
      </section>
   );
}
