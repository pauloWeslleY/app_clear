import { memo } from "react";
import {
   Flex,
   Heading,
   Image,
   SimpleGrid,
   Stack,
   Text,
} from "@chakra-ui/react";

import { useColor } from "../../hooks/useColor";

import { Banner } from "./../../data/photos";

interface Props {
   title: string;
   span: string;
   content: string;
}

export function HomeHero({ title, span, content }: Props) {
   const { bg__our_story } = useColor();

   return (
      <section>
         <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Stack justify={"center"} spacing={4}>
               <Text
                  textTransform={"uppercase"}
                  color={"orange.400"}
                  fontWeight={600}
                  fontSize={"sm"}
                  bg={bg__our_story}
                  p={2}
                  alignSelf={"flex-start"}
                  rounded={"md"}
               >
                  {span}
               </Text>
               <Heading
                  fontWeight={"semibold"}
                  fontSize={"2.8rem"}
                  fontFamily={"body"}
               >
                  {title}
               </Heading>
               <Text color={"gray.600"} fontSize={"lg"} fontWeight={500}>
                  {content}
               </Text>
            </Stack>
            <Flex py={"1.5rem"}>
               <Image
                  rounded={"md"}
                  alt={"Imagens do Site"}
                  src={Banner}
                  objectFit={"cover"}
               />
            </Flex>
         </SimpleGrid>
      </section>
   );
}

export default memo(HomeHero);
