import Product1 from './../assets/product_1.jpg';
import Product2 from './../assets/product_2.jpg';
import Product3 from './../assets/product_3.jpg';
import Product4 from './../assets/product_4.jpg';

export interface CardsItemsProps {
   id?: number;
   name: string;
   price: string;
   image?: any;
}

const carditems: CardsItemsProps[] = [
   {
      id: 1,
      name: "Gary Plus Broom",
      image: Product1,
      price: "8.55"
   },
   {
      id: 2,
      name: "Sanfonado Sink Plunger",
      image: Product2,
      price: "5.10"
   },
   {
      id: 3,
      name: "Lava Bus Wood Base",
      image: Product3,
      price: "6.50"
   },
   {
      id: 4,
      name: "Nylon",
      image: Product4,
      price: "10.00"
   },
   {
      id: 5,
      name: "Nylon2",
      image: Product4,
      price: "100.50"
   },
   {
      id: 6,
      name: "Nylon Thine",
      image: Product4,
      price: "45.00"
   },
]

export {carditems}
