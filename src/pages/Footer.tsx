import { useCart } from "../hooks/useCart";
import { useCartContex } from "../hooks/useCartContex";
import { useFilter } from "../hooks/useFilter";
import { Filters } from "../interfaces/FilterProps"



export const Footer = () => {
  const { filters} = useFilter();
  const {cart} = useCartContex();
  return (
    <footer>
        {
           // JSON.stringify(filters)
            
        }
        {
            JSON.stringify(cart)
        }
    </footer>
  )
}
