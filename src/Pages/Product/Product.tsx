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
   ProductHero,
   CardsProductHero,
   TableProductHero,
   SlideCard,
   TabsProduct,
   Stats,
   HeadTitle,
   CARDS_PROPS,
   useColor,
   MotionFlex,
   item,
} from "./index";

export function Product() {
   const height = useBreakpointValue({ base: "20%", md: "30%" });
   const { THEME } = useColor();

   return (
      <main>
         <header>
            <ProductHero />
            <MotionFlex
               alignItems={"center"}
               justify={"center"}
               pt={"2.5rem"}
               variants={item}
               initial={"hidden"}
               animate={"visible"}
            >
               <Heading
                  as={"h2"}
                  fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
               >
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
         </header>

         <section>
            <Container maxW={"7xl"}>
               <Box py={"2rem"}>
                  <CardsProductHero />
               </Box>

               <Flex align={"center"} justify={"center"}>
                  <Divider
                     w={"50%"}
                     h={"0.2rem"}
                     bg={THEME.COLOR.HEAD_TITLE_LINE_COLOR}
                     my={"1rem"}
                  />
               </Flex>

               <HeadTitle title="Tabela de Produtos" />

               <Box py={"3rem"}>
                  <TableProductHero tableCaption="Produtos à venda" />
               </Box>

               <Stack direction={"row"}>
                  <Divider
                     orientation={"vertical"}
                     pr={"0.2rem"}
                     h={14}
                     bg={THEME.COLOR.HEAD_TITLE_LINE_COLOR}
                  />
                  <Heading fontWeight={"semibold"} fontSize={"2.7rem"}>
                     Destaques
                  </Heading>
               </Stack>
            </Container>
         </section>

         <Box mx={"auto"} w={"100%"} maxW={"7xl"} py={"5rem"}>
            {CARDS_PROPS && <SlideCard cards={CARDS_PROPS} />}
         </Box>

         <section>
            <Container maxW={"7xl"}>
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
         </section>
      </main>
   );
}

export default memo(Product);
