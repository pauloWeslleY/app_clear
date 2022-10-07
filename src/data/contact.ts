import { BsTelephone, BsGeoAlt, HiOutlineMail } from "react-icons/all";


export interface ContactProps {
   id?: string;
   title: string;
   icon: any;
}

export const CONTACT: ContactProps[] = [
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
