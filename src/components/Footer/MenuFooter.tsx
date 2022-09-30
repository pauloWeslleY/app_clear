import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { navlink_props } from "./index";

import "./footer.scss";

interface Props {
   path: string;
   children: ReactNode;
}

const MenuFooter: React.FC<any> = ({ children, path }: Props) => (
   <Link to={`/${path}`}>
      <button className="menu__footer_items">{children}</button>
   </Link>
);

export const menuFooter = () => {
   return navlink_props.map((props) => (
      <MenuFooter key={props.id} path={props.path}>
         {props.page}
      </MenuFooter>
   ));
};
