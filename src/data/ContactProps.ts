import { BsTelephone, BsGeoAlt } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

export interface ContactProps {
   id?: string;
   title: string;
   icon: any;
}

export const contact__props: ContactProps[] = [
   {
      id: "1",
      icon: BsTelephone,
      title: "11 99845-6754",
   },
   {
      id: "2",
      icon: BsGeoAlt,
      title: "R. Amauri Souza, 346",
   },
   {
      id: "3",
      icon: HiOutlineMail,
      title: "contato@appfiqlimp.com",
   }
]
