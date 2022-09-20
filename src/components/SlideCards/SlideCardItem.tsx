import {
   Box,
   Center,
   useColorModeValue,
   Heading,
   Text,
   Stack,
   Image,
} from "@chakra-ui/react";
import { CardsProps } from "../../types/CardsProps";

interface Cards {
   card: CardsProps;
}

export function SlideCardItem({ card }: Cards) {
   const { name, image, price } = card;

   return (
      <Center py={12}>
         <Box
            role={"group"}
            p={6}
            maxW={"330px"}
            w={"full"}
            bg={useColorModeValue("gray.100", "orange.800")}
            boxShadow={"2xl"}
            rounded={"lg"}
            pos={"relative"}
            zIndex={1}
         >
            <Box
               rounded={"lg"}
               mt={-12}
               pos={"relative"}
               height={"230px"}
               _after={{
                  transition: "all .3s ease",
                  content: '""',
                  w: "full",
                  h: "full",
                  pos: "absolute",
                  top: 5,
                  left: 0,
                  backgroundImage: `url(${image})`,
                  filter: "blur(15px)",
                  zIndex: -1,
               }}
               _groupHover={{
                  _after: {
                     filter: "blur(20px)",
                  },
               }}
            >
               <Image
                  rounded={"lg"}
                  height={230}
                  width={282}
                  objectFit={"cover"}
                  src={image}
               />
            </Box>
            <Stack pt={10} align={"center"}>
               <Heading
                  fontSize={"2xl"}
                  fontFamily={"body"}
                  fontWeight={"extrabold"}
               >
                  {name}
               </Heading>
               <Stack direction={"row"} align={"center"}>
                  <Text as={"span"} fontWeight={500} fontSize={"xl"}>
                     ${price}
                  </Text>
               </Stack>
            </Stack>
         </Box>
      </Center>
   );
}
