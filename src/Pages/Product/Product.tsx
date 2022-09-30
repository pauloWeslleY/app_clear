import { memo } from "react";
import {
   Box,
   Container,
   Divider,
   Flex,
   Heading,
   Stack,
   Text,
   useBreakpointValue,
} from "@chakra-ui/react";
import {
   Navigation,
   ProductHero,
   CardsProductHero,
   TableProductHero,
   SlideCard,
   TabsProduct,
   Footer,
   Stats,
   HeadTitle,
   card__items,
   useColor,
   MotionFlex,
   item,
} from "./index";

export function Product() {
   const height = useBreakpointValue({ base: "20%", md: "30%" });
   const { THEME } = useColor();
   return (
      <section>
         <Navigation />
         <ProductHero title="Ipsum dolor sed accusam sea voluptua ipsum consetetur diam, consetetur." />

         <MotionFlex
            alignItems={"center"}
            justify={"center"}
            pt={"2.5rem"}
            variants={item}
            initial={"hidden"}
            animate={"visible"}
         >
            <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
               <Text
                  as={"span"}
                  position={"relative"}
                  _after={{
                     content: "''",
                     width: "full",
                     height: height,
                     position: "absolute",
                     bottom: 1,
                     left: 0,
                     bg: THEME.COLOR.PRODUCT_TITLE_COLOR,
                     zIndex: -1,
                  }}
               >
                  Nossos
               </Text>{" "}
               <Text color={THEME.COLOR.PRODUCT_TITLE_COLOR} as={"span"}>
                  Serviços
               </Text>{" "}
            </Heading>
         </MotionFlex>

         <Container
            maxW={{
               base: "1220px",
               sm: "550px",
               md: "1024px",
               lg: "1350px",
               xl: "8xl",
            }}
            w={"100%"}
         >
            <CardsProductHero />

            <Flex align={"center"} justify={"center"}>
               <Divider
                  w={"50%"}
                  h={"0.2rem"}
                  bg={THEME.COLOR.HEAD_TITLE_LINE_COLOR}
                  my={"1rem"}
               />
            </Flex>

            <HeadTitle title="Tabela de Produtos" />

            <Box mx={"auto"} w={"100%"} py={"2rem"}>
               <TableProductHero tableCaption="Produtos à venda" />
            </Box>

            <Box mx={"auto"} w={"100%"} pt={"4rem"}>
               <Stack h={"4rem"} direction={"row"}>
                  <Divider
                     orientation={"vertical"}
                     pr={"0.2rem"}
                     bg={THEME.COLOR.HEAD_TITLE_LINE_COLOR}
                  />
                  <Heading fontWeight={"semibold"} fontSize={"2.7rem"}>
                     Destaques
                  </Heading>
               </Stack>
            </Box>
         </Container>

         <Box mx={"auto"} w={"100%"} maxW={"1245px"} py={"5rem"}>
            {card__items && <SlideCard cards={card__items} />}
         </Box>

         <Container
            maxW={{
               base: "1220px",
               sm: "550px",
               md: "1024px",
               lg: "1350px",
               xl: "8xl",
            }}
            w={"100%"}
         >
            <Flex align={"center"} justify={"center"}>
               <Divider
                  w={"50%"}
                  h={"0.2rem"}
                  bg={THEME.COLOR.HEAD_TITLE_LINE_COLOR}
                  my={"1rem"}
               />
            </Flex>

            <Stats
               title="Cupons de Descontos"
               content="Na compra de 3 produtos o 4º sai com desconto de"
               discounts="20%"
            />

            <HeadTitle title="Produtos mais vendidos" />

            <TabsProduct />
         </Container>

         <Footer />
      </section>
   );
}

export default memo(Product);
