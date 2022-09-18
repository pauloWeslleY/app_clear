import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { navlink_props } from "./../../data/navprops";

interface Props {
   path: string;
   children: ReactNode;
}

const MenuFooter: React.FC<any> = ({ children, path }: Props) => (
   <Link to={`/${path}`}>
      <button className="nav__link">{children}</button>
   </Link>
);

export const menuFooter = () => {
   return navlink_props.map((props) => (
      <MenuFooter key={props.id} path={props.path}>
         {props.page}
      </MenuFooter>
   ));
};
