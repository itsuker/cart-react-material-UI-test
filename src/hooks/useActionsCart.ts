import { Product } from '../interfaces/productos'
import { useDispatch, useSelector } from 'react-redux'
import { onAddToCart, onRestToCart , onRemoveCart ,onClearCart } from '../store'
import { AppDispatch, RootState } from '../store/store' //Importamos el store y el dispatch

export const useActionsCart = () => {
  const dispatch:AppDispatch = useDispatch()
  const {cart} = useSelector((state:RootState) => state.product)
  const addToCart = (product: Product) => { //Funcion para agregar al carrito
    dispatch(onAddToCart(product));
  }
  const restToCart = (product:Product) =>{ //Funcion para restar al carrito
    dispatch(onRestToCart(product));
  }
const removeCart = (product:Product) =>{ //Funcion para remover del carrito
  dispatch(onRemoveCart(product))
}

const clearCart = () =>{ //Funcion para limpiar el carrito completos
  dispatch(onClearCart());
}
  return {
    cart, //Retorna el carrito
    addToCart,
    restToCart,
    removeCart,
    clearCart,
  }
}
