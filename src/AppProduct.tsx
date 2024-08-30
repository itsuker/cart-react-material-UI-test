import { AppTheme } from './theme'
import { AppRouter } from './Router/AppRouter'
import { FilterProvider } from './context/FilterProvider'


export const AppProduct = () => {





  return (
    <AppTheme>
      <FilterProvider>
        <AppRouter />
      </FilterProvider>
    </AppTheme>
  )
}
