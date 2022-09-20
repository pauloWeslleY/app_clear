import { memo } from "react";
import { Box, SimpleGrid, chakra, Flex, Image } from "@chakra-ui/react";

import { Image11 } from "../../data/photos";

interface Props {
   title: string;
   subtitle: string;
}

export function AboutContent({ title, subtitle }: Props) {
   return (
      <section>
         <Box px={8} py={20} mx={"auto"}>
            <SimpleGrid
               alignItems={"center"}
               columns={{
                  base: 1,
                  md: 2,
               }}
               flexDirection={"column-reverse"}
               mb={24}
               spacingY={{
                  base: 10,
                  md: 32,
               }}
               spacingX={{
                  base: 10,
                  md: 24,
               }}
            >
               <Box
                  order={{
                     base: "initial",
                     md: 2,
                  }}
               >
                  <chakra.h2
                     mb={4}
                     fontSize={{
                        base: "2xl",
                        md: "4xl",
                     }}
                     fontWeight={"extrabold"}
                     letterSpacing={"tight"}
                     textAlign={{
                        base: "center",
                        md: "left",
                     }}
                     color={"gray.900"}
                     _dark={{
                        color: "gray.400",
                     }}
                     lineHeight={{
                        md: "shorter",
                     }}
                  >
                     {title}
                  </chakra.h2>
                  <chakra.p
                     mb={5}
                     textAlign={{
                        base: "center",
                        sm: "left",
                     }}
                     color={"gray.600"}
                     _dark={{
                        color: "gray.400",
                     }}
                     fontSize={{
                        md: "lg",
                     }}
                  >
                     {subtitle}
                  </chakra.p>
               </Box>
               <Flex>
                  <Image
                     alt={"Imagens do Site"}
                     src={Image11}
                     objectFit={"cover"}
                     borderRadius={"5rem"}
                     boxSize={"35rem"}
                  />
               </Flex>
            </SimpleGrid>
         </Box>
      </section>
   );
}

export default memo(AboutContent);
