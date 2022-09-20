import { memo } from "react";
import { Center, Divider, Heading, Text } from "@chakra-ui/react";

interface TitleProps {
   title: string;
}

export function HeadTitle({ title }: TitleProps) {
   return (
      <Center>
         <Heading
            as={"h3"}
            pt={"3.5rem"}
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
         >
            <Text fontWeight={"thin"}>{title}</Text>
            <Divider
               w={"50%"}
               mx={"auto"}
               bg={"yellow.10"}
               mt={"0.5rem"}
               pt={"0.5rem"}
            />
         </Heading>
      </Center>
   );
}

export default memo(HeadTitle);
