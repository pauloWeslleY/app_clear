import { memo } from "react";
import { Avatar, Box, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { AiOutlineUser } from "react-icons/all";

import { MotionFlex, container, item } from "./index";

interface AboutUsProps {
   name: string;
   foundation: string;
   content: string;
}

export function AboutUs({ name, foundation, content }: AboutUsProps) {
   return (
      <Stack
         bg={useColorModeValue("gray.50", "gray.800")}
         py={16}
         px={8}
         spacing={{ base: 8, md: 10 }}
         align={"center"}
         direction={"column"}
      >
         <MotionFlex variants={item} initial={"hidden"} animate={"visible"}>
            <Text
               fontSize={{ base: "xl", md: "2xl" }}
               textAlign={"center"}
               maxW={"3xl"}
            >
               {content}
            </Text>
         </MotionFlex>
         <Box textAlign={"center"}>
            <Avatar
               bg={"orange.400"}
               icon={<AiOutlineUser fontSize="1.5rem" />}
               mb={2}
            />

            <Text fontWeight={600}>{name}</Text>
            <Text
               fontSize={"sm"}
               color={useColorModeValue("gray.400", "gray.400")}
            >
               {foundation}
            </Text>
         </Box>
      </Stack>
   );
}

export default memo(AboutUs);
