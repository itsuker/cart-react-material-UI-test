import  { ReactNode, useContext, useState} from 'react'
import { SelectChangeEvent } from '@mui/material'
import { ProductosJSON } from '../interfaces/productos';
import products from '../mocks/products.json';
//import { Filters } from '../interfaces/FilterProps';
import { FiltersContext } from '../context/FilterProvider';


/*
const initialValue:Filters = {
    category: 'all',
    minPrice: 0,
  }*/


export const useFilter = () => {

   // const [filters, setfilters] = useState(initialValue);
 const {filters ,setFilters} = useContext(FiltersContext);
 const [minprice, setMinprice] = useState(0); //esto para que aparezca el precio seleccionado
 const [category, setCategory] = useState(""); //esto para que apareza la categoria seleccionada

 const filterProducts = ({products}:ProductosJSON):ProductosJSON => {


      return{
        products: products.filter((product) =>{ //lo que hace prodcuts: es que se le asigna el valor de products a la variable products
          return (
            product.price >= (filters.minPrice ?? 0) && // Precio mayor o igual al mínimo seleccionado
            (
              filters.category === 'all' || // Si la categoría seleccionada es 'all' entonces se muestran todos los productos
              product.category === filters.category // Si no, se muestran los productos de la categoría seleccionada
            )
          )
        })
      }
 }

 const hadleChangeMinPrice = (event: Event, newValue: number | number[]) => {

  setMinprice(newValue as number);
  setFilters(
    {
      category: category,
      minPrice: newValue as number,
    }
  )
}

const hadleChangeCategory = (event: SelectChangeEvent<string>, child: ReactNode) => {
  const category = event.target.value;
  setCategory(category);
  setFilters(
    {
      category: category,
      minPrice: minprice,

    }
  )
}
 const filteredProducts = filterProducts(products);
  return {
    filters,
    minprice,
    category,
    filteredProducts, //esto es para que se filtre los productos para generar la lista de productos
    hadleChangeMinPrice,
    hadleChangeCategory,
    filterProducts,
    
   
  }
}
