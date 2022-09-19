interface NavProps {
   id: string;
   page: string;
   path: string;
}

export const navlink_props: NavProps[] = [
   {
      id: "home",
      page: "Home",
      path: ""
   },
   {
      id: "product",
      page: "Product",
      path: "product"
   },
   {
      id: "about",
      page: "About",
      path: "about"
   },
   {
      id: "contact",
      page: "Contact",
      path: "contact"
   },
]
