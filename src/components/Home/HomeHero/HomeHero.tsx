import { memo } from "react";
import {
   Flex,
   Heading,
   Image,
   SimpleGrid,
   Stack,
   Text,
} from "@chakra-ui/react";
import { Banner, MotionFlex, useColor } from "./index";

interface Props {
   title: string;
   span: string;
   content: string;
}

export function HomeHero({ title, span, content }: Props) {
   const { THEME } = useColor();

   return (
      <SimpleGrid py={"2rem"} columns={{ base: 1, md: 2 }} spacing={1}>
         <Flex flexDir={"column"} justify={"center"}>
            <MotionFlex
               initial={{ y: -10 }}
               animate={{ y: 10 }}
               // @ts-ignore no problem in operation, although type error appears.
               transition={{
                  delay: 0.5,
                  y: { duration: 0.6 },
                  default: { ease: "in-out" },
               }}
               direction={"column"}
               gap={2}
            >
               <Text
                  textTransform={"uppercase"}
                  color={"orange.400"}
                  fontWeight={600}
                  fontSize={"sm"}
                  bg={THEME.COLORS.HOME_HERO_SPAN_BG}
                  p={2}
                  alignSelf={"flex-end"}
                  rounded={"md"}
               >
                  {span}
               </Text>
               <Heading
                  fontWeight={"semibold"}
                  fontSize={"2.8rem"}
                  fontFamily={"body"}
                  textAlign={"right"}
               >
                  {title}
               </Heading>
               <Text
                  color={THEME.COLOR.HOME_HERO_TEXT_COLOR}
                  fontSize={"lg"}
                  fontWeight={500}
                  textAlign={"right"}
               >
                  {content}
               </Text>
            </MotionFlex>
         </Flex>
         <Flex justify={"center"}>
            <MotionFlex
               initial={{ y: -2 }}
               animate={{ y: 2 }}
               // @ts-ignore no problem in operation, although type error appears.
               transition={{ delay: 1, duration: 0.5 }}
               align={"center"}
            >
               <Image
                  alt={"Imagens do Site"}
                  src={Banner}
                  boxSize={"md"}
                  borderRadius={"2rem"}
                  objectFit={"cover"}
               />
            </MotionFlex>
         </Flex>
      </SimpleGrid>
   );
}

export default memo(HomeHero);
