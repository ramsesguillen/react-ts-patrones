import { useState } from "react";
import { Product, ProductInCard } from "../interfaces/interfaces";



export const useShoppingCard = () => {

  const [shoppingCard, setShoppingCard] = useState<{ [key:string]: ProductInCard }>({});

  const onProductCountChange = ( {count, product}: {count: number, product: Product } ) => {

    setShoppingCard( oldShoppingCard => {

      if ( count === 0 ) {
        const { [product.id]: toDelete, ...rest } = oldShoppingCard;
        return rest;
      }
      return {
        ...oldShoppingCard,
        [product.id]: { ...product, count  }
      }
    });
  }



  return {
    onProductCountChange,
    shoppingCard
  }



}