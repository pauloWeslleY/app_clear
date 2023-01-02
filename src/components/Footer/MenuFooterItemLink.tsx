import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { NAV } from "./index";

import styles from "./styles.module.scss";

interface MenuFooterProps {
   path: string;
   children: ReactNode;
}

export function MenuFooterItemLink() {
   const scrollUp = () => {
      window.scrollTo({
         top: 0,
         behavior: "smooth",
      });
   };

   const MenuItemsLink = ({ children, path }: MenuFooterProps) => (
      <Link to={`/${path}`} onClick={scrollUp}>
         <button className={styles.menu__footer_items}>{children}</button>
      </Link>
   );

   return (
      <>
         {NAV.map((props) => (
            <MenuItemsLink key={props.id} path={props.path}>
               {props.page}
            </MenuItemsLink>
         ))}
      </>
   );
}
