import { memo } from "react";
import {
   Stack,
   Flex,
   Text,
   VStack,
   useBreakpointValue,
} from "@chakra-ui/react";
import { Image4 } from "../../data/photos";

interface Props {
   title: string;
}

export function ProductHero({ title }: Props) {
   const fontsSize = useBreakpointValue({ base: "3xl", md: "4xl" });

   return (
      <Flex
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
            <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
               <Text
                  color={"white"}
                  fontWeight={700}
                  lineHeight={1.2}
                  fontSize={fontsSize}
               >
                  {title}
               </Text>
            </Stack>
         </VStack>
      </Flex>
   );
}

export default memo(ProductHero);
