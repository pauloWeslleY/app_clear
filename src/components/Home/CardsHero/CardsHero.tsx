import { memo, ReactElement } from "react";
import { Box, SimpleGrid, Icon, Text, Stack, Flex } from "@chakra-ui/react";
import { BsCheckLg } from "react-icons/bs";
import { MotionFlex, useColor } from "./index";

interface CardItemProps {
   title: string;
   text: string;
   icon: ReactElement;
}

const Cards = ({ title, text, icon }: CardItemProps) => {
   const { THEME } = useColor();

   return (
      <Stack align={"center"} justify={"center"}>
         <MotionFlex
            cursor={"pointer"}
            flexDir={"column"}
            alignItems={"center"}
            whileHover={{ scale: 1.2 }}
            whileTap={{
               scale: 0.8,
               color: "var(--yellow-10)",
               borderRadius: "2rem",
            }}
         >
            <Flex
               w={16}
               h={16}
               alignItems={"center"}
               justifyContent={"center"}
               rounded={"full"}
               mb={1}
               color={THEME.COLOR.CARDS_HERO_ICON_COLOR}
               bg={THEME.COLOR.CARDS_HERO_ICON_BG}
            >
               {icon}
            </Flex>
            <Text fontWeight={600}>{title}</Text>
            <Text color={THEME.COLOR.CARDS_HERO_TEXT_COLOR}>{text}</Text>
         </MotionFlex>
      </Stack>
   );
};

export function CardsHero() {
   return (
      <Box py={8}>
         <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <Cards
               icon={<Icon as={BsCheckLg} w={10} h={10} />}
               title={"Lifetime Support"}
               text={
                  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
               }
            />
            <Cards
               icon={<Icon as={BsCheckLg} w={10} h={10} />}
               title={"Unlimited Donations"}
               text={
                  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
               }
            />
            <Cards
               icon={<Icon as={BsCheckLg} w={10} h={10} />}
               title={"Instant Delivery"}
               text={
                  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
               }
            />
         </SimpleGrid>
      </Box>
   );
}

export default memo(CardsHero);
