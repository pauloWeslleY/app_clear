import { FiUsers } from "react-icons/fi";
import { ImWrench } from "react-icons/im";
import { MdWork } from "react-icons/md";

export interface CardsProps {
   id?: string;
   title: string;
   content: string;
   icon: any;
}

export const cardsprops: CardsProps[] = [
   {
      id: "1",
      icon: ImWrench,
      title: "AP® Psychology - Course 5",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio eligendi similique exercitationem optio libero vitae"
   },
   {
      id: "2",
      icon: FiUsers,
      title: "AP® Psychology - Course 5",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio eligendi similique exercitationem optio libero vitae"
   },
   {
      id: "3",
      icon: MdWork,
      title: "AP® Psychology - Course 5",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio eligendi similique exercitationem optio libero vitae"
   }
]
