import { memo } from "react";
import { motion, isValidMotionProp } from "framer-motion";
import {
   Flex,
   Heading,
   Stack,
   Text,
   Image,
   shouldForwardProp,
   chakra,
} from "@chakra-ui/react";
import { Banner2, MotionFlex, container, item, useColor } from "./index";

interface HeroProps {
   title: string;
   subtitle: string;
   textContent: string;
}

const ChakraBox = chakra(motion.div, {
   shouldForwardProp: (prop) =>
      isValidMotionProp(prop) || shouldForwardProp(prop),
});

export function BannerHero({ title, subtitle, textContent }: HeroProps) {
   const { THEME } = useColor();

   return (
      <Stack
         w={"full"}
         textAlign={"center"}
         align={"center"}
         spacing={{ base: 8, md: 10 }}
         py={{ base: 20, md: 25 }}
         h={"70vh"}
      >
         <motion.div
            variants={container}
            initial={"hidden"}
            animate={"visible"}
         >
            <motion.div variants={item}>
               <Heading
                  fontWeight={"bold"}
                  fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
                  lineHeight={"110%"}
               >
                  {title}{" "}
                  <Text
                     as={"span"}
                     color={THEME.COLOR.BANNER_SUBTITLE_COLOR}
                     fontWeight={"thin"}
                  >
                     {subtitle}
                  </Text>
               </Heading>
            </motion.div>
            <MotionFlex
               variants={item}
               alignItems={"center"}
               justify={"center"}
            >
               <Text
                  fontSize={"1.2rem"}
                  color={THEME.COLOR.BANNER_TEXT_COLOR}
                  maxW={"3xl"}
               >
                  {textContent}
               </Text>
            </MotionFlex>
         </motion.div>
         <motion.div
            initial={{ rotate: -45, scale: 0.1 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{
               type: "spring",
               stiffness: 260,
               damping: 20,
               duration: 0.5,
            }}
         >
            <Flex alignItems={"center"} pt={"5rem"}>
               <ChakraBox
                  animate={{
                     scale: [1, 2, 2, 1, 1],
                     rotate: [0, 0, 270, 270, 0],
                     borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                  }}
                  // @ts-ignore no problem in operation, although type error appears.
                  transition={{
                     duration: 6,
                     ease: "easeInOut",
                     repeat: Infinity,
                     repeatType: "loop",
                  }}
                  padding={"2"}
                  // bgGradient="linear(to-l, #FCA311, #161a1d)"
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  width={"12rem"}
                  height={"15rem"}
               >
                  <Image
                     align={"center"}
                     w={400}
                     objectFit={"cover"}
                     src={Banner2}
                     alt={"Banner Animado do Site"}
                  />
               </ChakraBox>
            </Flex>
         </motion.div>
      </Stack>
   );
}

export default memo(BannerHero);
