import { memo } from "react";
import { Container } from "@chakra-ui/react";
import {
   Navigation,
   BannerHero,
   ActionHero,
   CardsHero,
   HomeHero,
   Footer,
} from "./index";

export function Home() {
   return (
      <section>
         <Navigation />
         <BannerHero
            title="Produtos de limpeza e"
            subtitle="Higiene pessoal"
            textContent="Never miss a meeting. Never be late for one too. Keep track of your meetings and receive smart reminders in appropriate times. Read your smart “Daily Agenda” every morning."
         />

         <ActionHero
            title="Está procurando produtos de limpeza?"
            subtitle="Você pode encontrá-lo aqui!"
         />
         <Container maxW={"1200px"}>
            <CardsHero />

            <HomeHero
               title="Produtos de qualidade e com melhor preço"
               content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore"
               span="Our Story"
            />
         </Container>
         <Footer />
      </section>
   );
}

export default memo(Home);
