import { useEffect, useRef, useState } from "react";
import { onChangeArgs, Product, InitialValues } from '../interfaces/interfaces';


interface useProductArgs {
  product: Product;
  onChange?: ( args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues
}


export const useProduct = ( { onChange, product, value = 0, initialValues }: useProductArgs ) => {
  const [counter, setCounter] = useState( initialValues?.count || value );
  const isMounted = useRef(false);

  const increaseBy = ( val: number ) => {

    // if ( initialValues?.maxCount === counter ) return;
    let newValue = Math.max(counter + val, 0);
    if ( initialValues?.maxCount ) {
      newValue = Math.min( newValue, initialValues.maxCount );
    }


    setCounter( newValue );
    onChange && onChange({ count: newValue, product });
  }


  const reset = () => {
    setCounter( initialValues?.count || value );
  }


  useEffect(() => {
    if ( !isMounted.current ) return;

    setCounter( value );
  }, [value]);


  useEffect(() => {
    isMounted.current = true;
  }, []);


  return {
    counter,
    increaseBy,
    isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
    maxCount: initialValues?.maxCount,
    reset
  }
}

