import { memo } from "react";
import {
   Button,
   Container,
   Flex,
   Heading,
   SimpleGrid,
   Stack,
   Text,
   Grid,
   GridProps,
   GridItem,
} from "@chakra-ui/react";
import { BsWhatsapp } from "react-icons/bs";

import { ContactList, useColor } from "./index";

interface ContactProps extends GridProps {
   title: string;
   content: string;
}

function ContactContent({ title, content, ...props }: ContactProps) {
   const { THEME } = useColor();

   const link =
      "https://api.whatsapp.com/send?phone=+5511966077859&text=Olá! Seja Bem-vindo a nossa Loja de Produtos de Limpeza";

   return (
      <Container maxW={"6xl"}>
         <Grid
            {...props}
            templateColumns={{
               base: "repeat(1, 1fr)",
               lg: "repeat(12, 1fr)",
            }}
            gap={5}
            h={"100vh"}
         >
            <GridItem colSpan={6} p={1} placeSelf={"center"}>
               <Stack justify={"center"} spacing={4}>
                  <Heading>{title}</Heading>
                  <Text color={THEME.COLOR.CONTACT_TEXT_COLOR} fontSize={"lg"}>
                     {content}
                  </Text>
                  <Flex py={"1rem"}>
                     <Button
                        aria-label={"Botão que direciona pro site do WhatsApp"}
                        leftIcon={<BsWhatsapp />}
                        colorScheme={"teal"}
                        variant={"solid"}
                        borderRadius={"0.9rem"}
                        fontSize={"1.2rem"}
                        fontWeight={"semibold"}
                        transition={"all 0.6s ease-in-out"}
                        _hover={{
                           bg: "var(--green-40)",
                           filter: "brightness(1.6)",
                           transform: "scale(1.1)",
                        }}
                        onClick={() => window.open(link)}
                     >
                        WhatsApp
                     </Button>
                  </Flex>
               </Stack>
            </GridItem>
            <GridItem colSpan={6} p={1} placeSelf={"center"}>
               <ContactList />
            </GridItem>
         </Grid>
      </Container>
   );
}

export default memo(ContactContent);
