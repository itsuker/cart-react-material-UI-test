import { Product } from "./productos";


export interface Cart {
    product: Product;
    quantity: number;

}



export interface CartContextProps {
    cart?: Cart[];
    setCart:React.Dispatch<React.SetStateAction<any[]>>;
    addToCart: (product:Product) => void;
    restToCart: (product:Product) => void;
    removeCart: (product:Product) => void;
    clearCart: () => void;
}

export  interface CartProviderProps {
    children: React.ReactNode | React.ReactNode[];
}