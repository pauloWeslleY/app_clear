import { memo } from "react";
import { Container } from "@chakra-ui/react";
import { BannerHero, ActionHero, CardsHero, HomeHero } from "./index";

export function Home() {
   return (
      <main>
         <BannerHero
            title="Produtos de limpeza e"
            subtitle="Higiene pessoal"
            textContent="Never miss a meeting. Never be late for one too. Keep track of your meetings and receive smart reminders in appropriate times. Read your smart “Daily Agenda” every morning."
         />

         <ActionHero
            title="Está procurando produtos de limpeza?"
            subtitle="Você pode encontrá-lo aqui!"
         />
         <Container maxW={"7xl"}>
            <CardsHero />

            <HomeHero
               title="Produtos de qualidade e com melhor preço"
               content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore"
               span="Our Story"
            />
         </Container>
      </main>
   );
}

export default memo(Home);
