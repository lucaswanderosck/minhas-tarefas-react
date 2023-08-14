import { BarraLateral } from './containers/BarraLateral'
import { ListadeTarefas } from './containers/ListadeTarefas'
import { Container, GlobalStyles } from './styles/GlobalStyles'

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <BarraLateral />
        <ListadeTarefas />
      </Container>
    </>
  )
}

export default App
