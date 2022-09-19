import {
   Container,
   SimpleGrid,
   Image,
   Flex,
   Heading,
   Text,
   Stack,
} from "@chakra-ui/react";

import { Navigation } from "./../../components/Navigation";
import { BannerHero } from "./../../components/BannerHero";
import { MainHero } from "./../../components/MainHero";
import { ActionHero } from "./../../components/ActionHero";
import { Footer } from "./../../components/Footer";

import { Banner } from "./../../data/photos";

export function Home() {
   return (
      <section>
         <Navigation />
         <BannerHero
            title="Meeting scheduling"
            subtitle="made easy"
            textContent="Never miss a meeting. Never be late for one too. Keep track of your meetings and receive smart reminders in appropriate times. Read your smart “Daily Agenda” every morning."
         />
         <ActionHero
            title="Ready to dive in?"
            subtitle="Start your free trial today."
         />
         <Container maxW={"1440px"}>
            <MainHero />
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
               <Stack justify={"center"} spacing={4}>
                  <Text
                     textTransform={"uppercase"}
                     color={"orange.400"}
                     fontWeight={600}
                     fontSize={"sm"}
                     bg={"gray.900"}
                     p={2}
                     alignSelf={"flex-start"}
                     rounded={"md"}
                  >
                     Our Story
                  </Text>
                  <Heading>Quality products at the best price</Heading>
                  <Text color={"gray.500"} fontSize={"lg"}>
                     Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                     sed diam nonumy eirmod tempor invidunt ut labore
                  </Text>
               </Stack>
               <Flex py={"1.5rem"}>
                  <Image
                     rounded={"md"}
                     alt={"feature image"}
                     src={Banner}
                     objectFit={"cover"}
                  />
               </Flex>
            </SimpleGrid>
         </Container>
         <Footer title="© 2022 Fiq | Limp. All rights reserved" />
      </section>
   );
}
