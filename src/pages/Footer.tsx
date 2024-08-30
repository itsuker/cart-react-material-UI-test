import { useFilter } from "../hooks/useFilter";
import { Filters } from "../interfaces/FilterProps"



export const Footer = () => {
  const { filters} = useFilter();
  return (
    <footer>
        {
            JSON.stringify(filters)
        }
    </footer>
  )
}
