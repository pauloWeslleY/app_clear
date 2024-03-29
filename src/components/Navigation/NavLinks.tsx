import { ReactNode } from "react";
import { Link as NavLink } from "react-router-dom";
import { NAV } from "./index";

import "./NavLink.scss";

interface Props {
   path: string;
   children: ReactNode;
}

const NavItems: React.FC<any> = ({ children, path }: Props) => {
   const scrollUp = () => {
      window.scrollTo({
         top: 0,
         behavior: "smooth",
      });
   };

   return (
      <NavLink to={`/${path}`}>
         <button className="nav__link" onClick={scrollUp}>
            {children}
         </button>
      </NavLink>
   );
};

export const getNavLinks = () =>
   NAV.map((nav) => (
      <NavItems key={nav.id} path={nav.path}>
         {nav.page}
      </NavItems>
   ));
