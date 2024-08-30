import  { useContext} from 'react'
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
 const filteredProducts = filterProducts(products);
  return {
    filters,
    setFilters,
    filteredProducts

  }
}
