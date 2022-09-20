import { memo } from "react";
import {
   Button,
   Flex,
   Heading,
   SimpleGrid,
   Stack,
   Text,
} from "@chakra-ui/react";

import { ContactList } from "./ContactList";
import { BsWhatsapp } from "react-icons/bs";

interface ContactProps {
   title: string;
   content: string;
}

export function ContactContent({ title, content }: ContactProps) {
   const icons = <BsWhatsapp />;
   const link =
      "https://api.whatsapp.com/send?phone=+5511966077859&text=Olá! Seja Bem-vindo a nossa Loja de Produtos de Limpeza";

   const getLink = () => window.open(link);

   return (
      <SimpleGrid
         columns={{ base: 1, md: 2 }}
         spacing={10}
         pt={"10rem"}
         pb={"9rem"}
      >
         <Stack justify={"center"} spacing={4}>
            <Heading>{title}</Heading>
            <Text color={"gray.500"} fontSize={"lg"}>
               {content}
            </Text>
            <Flex py={"1rem"}>
               <Button
                  aria-label={"Botão que direciona pro site do WhatsApp"}
                  leftIcon={icons}
                  colorScheme={"teal"}
                  variant={"solid"}
                  borderRadius={"0.9rem"}
                  fontSize={"1.2rem"}
                  fontWeight={"semibold"}
                  transition={"all 0.2s ease-in-out"}
                  _hover={{ bg: "#0e9f6e", filter: "brightness(1.6)" }}
                  onClick={getLink}
               >
                  WhatsApp
               </Button>
            </Flex>
         </Stack>
         <Flex py={"1.5rem"}>
            <ContactList />
         </Flex>
      </SimpleGrid>
   );
}

export default memo(ContactContent);
