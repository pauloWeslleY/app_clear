import { SliderCarousel, Slide, SliderProps } from "../Slider";
import { CardsItemsProps } from "../../data/carditemprops";
import { SlideCardItem } from "./SlideCardItem";
import { Center } from "@chakra-ui/react";

interface CardSliderProps {
   cards: CardsItemsProps[];
}

export function SlideCard({ cards }: CardSliderProps) {
   if (cards.length === 1) {
      return (
         <Center>
            <SlideCardItem card={cards[0]} />
         </Center>
      );
   }

   const settings: SliderProps = {
      spaceBetween: 50,
      slidesPerView: cards.length < 3 ? cards.length : 3,
      navigation: cards.length >= 3 && true,
      draggable: cards.length >= 3,
      loop: cards.length >= 3,
      pagination: cards.length >= 3 && {
         clickable: true,
      },
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
               <SlideCardItem card={card} />
            </Slide>
         ))}
      </SliderCarousel>
   );
}
