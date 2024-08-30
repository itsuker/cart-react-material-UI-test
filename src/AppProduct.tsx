import { AppTheme } from './theme'
import { AppRouter } from './Router/AppRouter'
import { FilterProvider } from './context/FilterProvider'
import 'animate.css';


export const AppProduct = () => {





  return (
    <AppTheme>{/*paleta de estilos globales asia ciertos componentes */}
      <FilterProvider> {/*contexto global para los filtros */}
        <AppRouter />
      </FilterProvider>
    </AppTheme>
  )
}
