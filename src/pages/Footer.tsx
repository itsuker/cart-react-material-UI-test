import { useCart } from "../hooks/useCart";
import { useFilter } from "../hooks/useFilter";
import { Filters } from "../interfaces/FilterProps"



export const Footer = () => {
  const { filters} = useFilter();
  const {cart} = useCart();
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
