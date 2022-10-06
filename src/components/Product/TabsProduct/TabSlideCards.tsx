import { memo } from "react";
import { Center } from "@chakra-ui/react";
import { SliderCarousel, Slide, SliderProps } from "../../Slider";
import { TabCardItems, CardsProps } from "./index";

interface CardSliderProps {
   cards: CardsProps[];
}

export function TabSlideCards({ cards }: CardSliderProps) {
   if (cards.length === 1) {
      return (
         <Center>
            <TabCardItems card={cards[0]} />
         </Center>
      );
   }

   const settings: SliderProps = {
      spaceBetween: 50,
      slidesPerView: cards.length < 3 ? cards.length : 3,
      draggable: cards.length >= 3 && true,
      loop: cards.length >= 3 && true,
      navigation: false,
      pagination: false,
      breakpoints: {
         320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
         },
         800: {
            slidesPerView: cards.length < 2 ? cards.length : 2,
            slidesPerGroup: cards.length < 2 ? cards.length : 2,
         },
         1200: {
            slidesPerView: cards.length < 3 ? cards.length : 3,
            slidesPerGroup: cards.length < 3 ? cards.length : 3,
         },
      },
   };
   return (
      <SliderCarousel settings={settings}>
         {cards.map((card) => (
            <Slide key={card.id}>
               <TabCardItems card={card} />
            </Slide>
         ))}
      </SliderCarousel>
   );
}
export default memo(TabSlideCards);
