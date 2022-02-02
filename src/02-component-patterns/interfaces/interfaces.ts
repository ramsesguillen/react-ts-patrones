// import { ReactElement } from "react";
import { Props as ProductButtonsProps} from "../components/ProductButtons";
import { Props as ProductCardProps } from "../components/ProductCard";
import { Props as ProductImageProps} from "../components/ProductImage";
import { Props as ProductTitleCard} from "../components/ProductTitle";



export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductContextProps {
  counter: number;
  increaseBy: ( val: number) => void;
  product: Product;
}


export interface ProductCardHOCProps {
  ({ children, product }: ProductCardProps ): JSX.Element,
  Title: ( Props: ProductTitleCard ) => JSX.Element,
  Image: ( Props: ProductImageProps ) => JSX.Element,
  Buttons: ( Props: ProductButtonsProps ) => JSX.Element
}