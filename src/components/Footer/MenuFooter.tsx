import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { NAV } from "./index";

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
   return NAV.map((props) => (
      <MenuFooter key={props.id} path={props.path}>
         {props.page}
      </MenuFooter>
   ));
};
