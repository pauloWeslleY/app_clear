import { memo } from "react";
import { Heading, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { Banner, MotionFlex, useColor } from "./index";

interface Props {
   title: string;
   span: string;
   content: string;
}

export function HomeHero({ title, span, content }: Props) {
   const { THEME } = useColor();

   return (
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
         <Stack justify={"center"} spacing={4}>
            <MotionFlex
               initial={{ y: -10 }}
               animate={{ y: 10 }}
               // @ts-ignore no problem in operation, although type error appears.
               transition={{
                  delay: 0.5,
                  y: { duration: 0.6 },
                  default: { ease: "in-out" },
               }}
               flexDir={"column"}
            >
               <Text
                  textTransform={"uppercase"}
                  color={"orange.400"}
                  fontWeight={600}
                  fontSize={"sm"}
                  bg={THEME.COLORS.HOME_HERO_SPAN_BG}
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
               <Text
                  color={THEME.COLOR.HOME_HERO_TEXT_COLOR}
                  fontSize={"lg"}
                  fontWeight={500}
               >
                  {content}
               </Text>
            </MotionFlex>
         </Stack>
         <MotionFlex
            py={"1.5rem"}
            initial={{ y: -5 }}
            animate={{ y: 5 }}
            // @ts-ignore no problem in operation, although type error appears.
            transition={{ delay: 1, duration: 0.5 }}
         >
            <Image
               rounded={"md"}
               alt={"Imagens do Site"}
               src={Banner}
               objectFit={"cover"}
            />
         </MotionFlex>
      </SimpleGrid>
   );
}

export default memo(HomeHero);
