import { BarraLateral } from './containers/BarraLateral'
import { ListadeTarefas } from './containers/ListadeTarefas'
import { Container, GlobalStyles } from './styles/GlobalStyles'
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Container>
        <BarraLateral />
        <ListadeTarefas />
      </Container>
    </Provider>
  )
}

export default App
