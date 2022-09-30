import { memo } from "react";
import {
   Stack,
   Flex,
   Text,
   VStack,
   useBreakpointValue,
} from "@chakra-ui/react";
import { Image4, MotionFlex, animations } from "./index";

interface Props {
   title: string;
}

export function ProductHero({ title }: Props) {
   const fontsSize = useBreakpointValue({ base: "3xl", md: "4xl" });
   const { ANIMATION } = animations();
   return (
      <MotionFlex
         initial={{ opacity: 0, scale: 0.5 }}
         animate={{ opacity: 1, scale: 1 }}
         // @ts-ignore no problem in operation, although type error appears.
         transition={{
            default: {
               duration: 0.3,
               ease: [0, 0.71, 0.2, 1.01],
            },
            scale: {
               type: "spring",
               damping: 5,
               stiffness: 100,
               restDelta: 0.001,
            },
         }}
         w={"full"}
         h={"75vh"}
         backgroundImage={Image4}
         backgroundSize={"cover"}
         backgroundPosition={"center center"}
      >
         <VStack
            w={"full"}
            justify={"center"}
            px={useBreakpointValue({ base: 4, md: 8 })}
            bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
         >
            <MotionFlex
               justifyContent={"center"}
               alignItems={"center"}
               textAlign={"center"}
               variants={ANIMATION.animationContainer}
               initial={"hidden"}
               animate={"show"}
            >
               <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
                  <MotionFlex variants={ANIMATION.animationItem}>
                     <Text
                        color={"white"}
                        fontWeight={700}
                        lineHeight={1.2}
                        fontSize={fontsSize}
                     >
                        {title}
                     </Text>
                  </MotionFlex>
               </Stack>
            </MotionFlex>
         </VStack>
      </MotionFlex>
   );
}

export default memo(ProductHero);
