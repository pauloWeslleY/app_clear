import { ReactElement } from "react";
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

interface FeatureProps {
   title: string;
   text: string;
   icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
   return (
      <Stack align={"center"} justify={"center"}>
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
      </Stack>
   );
};

export function MainHero() {
   return (
      <Container maxW={"1440px"}>
         <Box p={12}>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
               <Feature
                  icon={<Icon as={BsCheckLg} w={10} h={10} />}
                  title={"Lifetime Support"}
                  text={
                     "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
                  }
               />
               <Feature
                  icon={<Icon as={BsCheckLg} w={10} h={10} />}
                  title={"Unlimited Donations"}
                  text={
                     "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
                  }
               />
               <Feature
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
