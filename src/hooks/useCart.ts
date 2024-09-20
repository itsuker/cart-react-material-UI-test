import  { useEffect, useRef, useState } from 'react'
//import { Product } from '../interfaces/productos';
import { useCartContex } from './useCartContex';



export const useCart = () => {
  const { cart} = useCartContex();
  const [animated, setanimated] = useState(false);
  const [open, setopen] = useState(false);
  const towgglerDrawer = (isOpen: boolean) => () => {

    setTimeout(() => {
      setopen(isOpen)
    }, 500)
  }

  useEffect(() => {
    if (cart!.length > 0) { //si el carrito tiene elementos
      setanimated(true); //animamos el icono 
      const timer = setTimeout(() => setanimated(false), 1000); //despues de un segundo quitamos la animacion
      return () => clearTimeout(timer);//limpiamos el timer
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart?.length]);

  

  const cartExist = () => { //si el carrito tiene elementos
    return cart!.length > 0;
  }
  const isCartExist = cartExist(); //si el carrito tiene elementos

  const refs = useRef(new Map()); //creamos una referencia para cada item del carrito
  return {
    open,
    isCartExist,
    animated,
    refs,
    towgglerDrawer,
  }
}
