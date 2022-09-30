import { memo } from "react";
import { Text } from "@chakra-ui/react";

interface TabTitleProps {
   title: string;
}

export function TabTitle({ title }: TabTitleProps) {
   return (
      <Text as={"span"} fontSize={"1.3rem"}>
         {title}
      </Text>
   );
}

export default memo(TabTitle);
