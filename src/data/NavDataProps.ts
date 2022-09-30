interface NavProps {
   id: string;
   page: string;
   path: string;
}

export const navlink_props: NavProps[] = [
   {
      id: "home",
      page: "Início",
      path: ""
   },
   {
      id: "product",
      page: "Produtos",
      path: "product"
   },
   {
      id: "about",
      page: "Sobre",
      path: "about"
   },
   {
      id: "contact",
      page: "Contatos",
      path: "contact"
   },
]
