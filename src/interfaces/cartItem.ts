import { Product } from "./productos"

export  interface CartItemProps {
    item:Product,
    quantity:number
    key:number
    addTocart: () => void
    restToCart: () => void
    clearCart: () => void
    refButtonRemove:React.RefObject<HTMLButtonElement>
}
