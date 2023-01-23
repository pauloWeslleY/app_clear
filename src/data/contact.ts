import { BsTelephone, BsGeoAlt, HiOutlineMail } from "react-icons/all";
import { IconType } from "react-icons/lib";

export interface ContactProps {
   title: string;
   icon: IconType;
}

export const CONTACT: ContactProps[] = [
   {
      icon: BsTelephone,
      title: "11 99845-6754",
   },
   {
      icon: BsGeoAlt,
      title: "R. Amauri Souza, 346",
   },
   {
      icon: HiOutlineMail,
      title: "contato@appfiqlimp.com",
   }
]
