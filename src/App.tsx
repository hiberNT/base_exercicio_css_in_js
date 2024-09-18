import { ThemeProvider } from 'styled-components'
import EstiloGloblal, { Container } from './styles'
import Sobre from './containers/sobre'
import ListaVagas from './containers/ListaVagas'
import cores from './cores/Principais.'

function App() {
  return (
    <ThemeProvider theme={cores}>
      <Container>
        <EstiloGloblal />
        <Sobre />
        <ListaVagas />
      </Container>
    </ThemeProvider>
  )
}

export default App
