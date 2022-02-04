import { useState } from "react";
import { Product, ProductInCard } from "../interfaces/interfaces";



export const useShoppingCard = () => {

  const [shoppingCard, setShoppingCard] = useState<{ [key:string]: ProductInCard }>({});

  const onProductCountChange = ( {count, product}: {count: number, product: Product } ) => {

    setShoppingCard( oldShoppingCard => {

      const productInCard: ProductInCard = oldShoppingCard[product.id] || { ...product, count: 0 }

      if ( Math.max(productInCard.count + count,  0) > 0 ) {
        productInCard.count += count;
        return {
          ...oldShoppingCard,
          [product.id]: productInCard
        }
      }

      const { [product.id]: toDelete, ...rest } = oldShoppingCard;
      return {...rest};

      // if ( count === 0 ) {
      //   const { [product.id]: toDelete, ...rest } = oldShoppingCard;
      //   return rest;
      // }
      // return {
      //   ...oldShoppingCard,
      //   [product.id]: { ...product, count  }
      // }
    });
  }



  return {
    onProductCountChange,
    shoppingCard
  }



}