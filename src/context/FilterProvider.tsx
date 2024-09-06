import React, {createContext, useState} from 'react'
import { Filters } from '../interfaces/FilterProps';


export interface FilterContextProps {
    filters: Filters; //esto es para que pueda recibir varios elementos
    setFilters: React.Dispatch<React.SetStateAction<Filters>>; //esto un metodo para que pueda recibir varios elementos 
} 

interface FilterProviderProps {
    children: React.ReactNode | React.ReactNode[]; //esto es para que pueda recibir varios elementos
    }

//este es el que tenemos que consumir
export const FiltersContext = createContext({} as FilterContextProps  )


const initialValue:Filters  = {
    category: 'all',
    minPrice: 0,
} 



export const FilterProvider = ({children}:FilterProviderProps) => {
 const [filters, setFilters] = useState(initialValue);
  return (
    <FiltersContext.Provider value={{filters, setFilters}}>
        {children}
    </FiltersContext.Provider>
  )
}
