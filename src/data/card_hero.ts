import { IconType } from "react-icons/lib";
import { TbTruckDelivery, MdProductionQuantityLimits, FiUsers } from "react-icons/all";

export interface CardHeroProps {
   id?: string;
   title: string;
   icon: IconType;
}

export const CARDS_HERO: CardHeroProps[] = [
   {
      id: "1",
      icon: TbTruckDelivery,
      title: "Entrega Rapída",
   },
   {
      id: "2",
      icon: FiUsers,
      title: "Suporte Personalizado",
   },
   {
      id: "3",
      icon: MdProductionQuantityLimits,
      title: "Produtos de Qualidade",
   }
]
