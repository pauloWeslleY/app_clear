import { TbTruckDelivery, MdProductionQuantityLimits,FiUsers } from "react-icons/all";

export interface CardHeroProps {
   id?: string;
   title: string;
   content: string;
   icon: any;
}

export const cards__hero: CardHeroProps[] = [
   {
      id: "1",
      icon: TbTruckDelivery,
      title: "Fast Delivery",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio eligendi similique exercitationem optio libero vitae"
   },
   {
      id: "2",
      icon: FiUsers,
      title: "Customer Support",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio eligendi similique exercitationem optio libero vitae"
   },
   {
      id: "3",
      icon: MdProductionQuantityLimits,
      title: "Quality Products",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio eligendi similique exercitationem optio libero vitae"
   }
]
