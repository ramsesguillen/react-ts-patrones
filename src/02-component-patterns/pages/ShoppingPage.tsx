// import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components/ProductCard"
// import { useState } from "react";
import { ProductCard } from "../components"
import { ProductButtons, ProductImage, ProductTitle } from "../components"
// import { Product } from '../interfaces/interfaces';
import '../styles/custom-styles.css';
import { products } from '../data/products';
import { useShoppingCard } from '../hooks/useShoppingCard';





export const ShoppingPage = () => {

  const { onProductCountChange, shoppingCard } = useShoppingCard();

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <div style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap"
        }}
      >
        {
          products.map( product => (
            <ProductCard
              product={ product }
              className='bg-dark text-white'
              key={ product.id }
              onChange={ (event) => onProductCountChange(event) }
              value={ shoppingCard[product.id]?.count || 0 }
            >
              <ProductImage className='custom-image' />
              <ProductTitle className='text-white text-bold' />
              <ProductButtons className='custom-buttons' />
            </ProductCard>
          ))
        }


        <div className="shopping-card">
          {
            Object.entries( shoppingCard ).map(([key, product]) => (
              <ProductCard
                key={ key }
                product={ product }
                className='bg-dark text-white'
                style={{ width: "100px" }}
                value={ product.count }
                onChange={ (event) => onProductCountChange(event) }
              >
                {/* onChange={ () => onProductCountChange() } */}
                <ProductImage className='custom-image' />
                <ProductButtons
                  className='custom-buttons'
                  style={{
                    display: "flex",
                    justifyContent: "center"
                  }}
                />
              </ProductCard>
            ))
          }
        </div>
      </div>
    </div>
  )
}

