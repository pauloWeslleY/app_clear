import { ReactNode } from "react";
import { Link as NavLink } from "react-router-dom";
import { navlink_props } from "./index";

import "./NavLink.scss";

interface Props {
   path: string;
   children: ReactNode;
}

const NavItems: React.FC<any> = ({ children, path }: Props) => (
   <NavLink to={`/${path}`}>
      <button className="nav__link">{children}</button>
   </NavLink>
);

export const getNavLinks = () =>
   navlink_props.map((nav) => (
      <NavItems key={nav.id} path={nav.path}>
         {nav.page}
      </NavItems>
   ));
