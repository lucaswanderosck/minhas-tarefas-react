import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Container, GlobalStyles } from './styles/GlobalStyles'
import store from './store'
import { Home } from './pages/Home'
import { SignUp } from './pages/SignUp'

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/new',
    element: <SignUp />
  }
])

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Container>
        <RouterProvider router={Router} />
      </Container>
    </Provider>
  )
}

export default App
