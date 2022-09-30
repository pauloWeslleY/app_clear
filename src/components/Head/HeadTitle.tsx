import { memo } from "react";
import { Center, Divider, Heading, Text } from "@chakra-ui/react";
import { useColor } from "./index";

interface TitleProps {
   title: string;
}

export function HeadTitle({ title }: TitleProps) {
   const { THEME } = useColor();
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
               bg={THEME.COLOR.HEAD_TITLE_LINE_COLOR}
               mt={"0.5rem"}
               pt={"0.5rem"}
            />
         </Heading>
      </Center>
   );
}

export default memo(HeadTitle);
