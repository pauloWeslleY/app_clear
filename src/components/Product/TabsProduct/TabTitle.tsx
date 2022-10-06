import { memo } from "react";
import { Tab, Text } from "@chakra-ui/react";

interface TabTitleProps {
   title: string;
}

export function TabTitle({ title }: TabTitleProps) {
   return (
      <Tab p={3}>
         <Text as={"span"} fontSize={"1.3rem"}>
            {title}
         </Text>
      </Tab>
   );
}

export default memo(TabTitle);
