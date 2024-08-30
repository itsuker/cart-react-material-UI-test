export interface Filters  {
    category: string;
    minPrice?: number ;
   }

export interface  FilterProps {
    changeFilter: (filters:Filters ) => void;
}