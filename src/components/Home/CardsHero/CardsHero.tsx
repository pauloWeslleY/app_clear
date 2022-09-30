import { memo, ReactElement } from "react";
import {
   Box,
   SimpleGrid,
   Icon,
   Text,
   Stack,
   Flex,
   Container,
} from "@chakra-ui/react";
import { BsCheckLg } from "react-icons/bs";
import { MotionFlex } from "./index";

interface CardItemProps {
   title: string;
   text: string;
   icon: ReactElement;
}

const Cards = ({ title, text, icon }: CardItemProps) => {
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
               color={"yellow.10"}
               rounded={"full"}
               bg={"gray.100"}
               mb={1}
            >
               {icon}
            </Flex>
            <Text fontWeight={600}>{title}</Text>
            <Text color={"gray.600"}>{text}</Text>
         </MotionFlex>
      </Stack>
   );
};

export function CardsHero() {
   return (
      <Container maxW={"1440px"}>
         <Box p={12}>
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
      </Container>
   );
}

export default memo(CardsHero);
