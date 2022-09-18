import { Flex, Container, Heading, Stack, Text, Image } from "@chakra-ui/react";
import { Banner2 } from "./../../data/photos";

import styles from "./styles.module.scss";

interface HeroProps {
   title: string;
   subtitle: string;
   textContent: string;
}

export function BannerHero({ title, subtitle, textContent }: HeroProps) {
   return (
      <section className={styles.wrapper__container}>
         <Container maxW={"5xl"}>
            <Stack
               textAlign={"center"}
               align={"center"}
               spacing={{ base: 8, md: 10 }}
               py={{ base: 20, md: 25 }}
            >
               <Heading
                  fontWeight={600}
                  fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
                  lineHeight={"110%"}
               >
                  {title}{" "}
                  <Text as={"span"} color={"orange.400"}>
                     {subtitle}
                  </Text>
               </Heading>
               <Text fontSize={"1rem"} color={"gray.500"} maxW={"3xl"}>
                  {textContent}
               </Text>
               <Flex alignItems={"center"}>
                  <Image
                     align={"center"}
                     w={400}
                     objectFit={"cover"}
                     src={Banner2}
                     alt="Banner do Site"
                  />
               </Flex>
            </Stack>
         </Container>
      </section>
   );
}