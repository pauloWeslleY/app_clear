import { memo } from "react";
import { Box, SimpleGrid, chakra, Flex, Image, Text } from "@chakra-ui/react";

import { MotionFlex, container, Image11, useColor } from "./index";

interface Props {
   title: string;
   subtitle: string;
   text: string;
}

export function AboutContent({ title, subtitle, text }: Props) {
   const { THEME } = useColor();

   return (
      <MotionFlex variants={container} initial={"hidden"} animate={"visible"}>
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
                  <Text
                     textTransform={"uppercase"}
                     color={THEME.COLOR.ABOUT_SPAN_COLOR}
                     fontWeight={600}
                     fontSize={"sm"}
                     p={2}
                     alignSelf={"flex-start"}
                     rounded={"md"}
                  >
                     {text}
                  </Text>
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
                     color={THEME.COLORS.ABOUT_TITLE_COLORS}
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
                     color={THEME.COLORS.ABOUT_CONTENT_COLORS}
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
      </MotionFlex>
   );
}

export default memo(AboutContent);
