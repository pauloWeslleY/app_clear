import { memo } from "react";
import { Flex, Box, chakra } from "@chakra-ui/react";

interface ActionProps {
   title: string;
   subtitle: string;
}

export function ActionHero({ title, subtitle }: ActionProps) {
   return (
      <Flex
         justify={"center"}
         bg={"orange.200"}
         _dark={{
            bg: "yellow.800",
         }}
         w={"full"}
      >
         <Box
            w={{
               base: "full",
               md: "75%",
               lg: "50%",
            }}
            px={4}
            py={20}
            textAlign={{
               base: "left",
               md: "center",
            }}
         >
            <chakra.span
               fontSize={{
                  base: "3xl",
                  sm: "4xl",
               }}
               fontWeight={"extrabold"}
               letterSpacing={"tight"}
               lineHeight={"shorter"}
               color={"gray.900"}
               _dark={{
                  color: "gray.100",
               }}
               mb={6}
            >
               <chakra.span display={"block"}>{title}</chakra.span>
               <chakra.span
                  display={"block"}
                  color={"brand.600"}
                  _dark={{
                     color: "gray.500",
                  }}
               >
                  {subtitle}
               </chakra.span>
            </chakra.span>
         </Box>
      </Flex>
   );
}

export default memo(ActionHero);
