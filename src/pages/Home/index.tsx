import { Button } from '../../components/Button'
import { BarraLateral } from '../../containers/BarraLateral'
import { ListadeTarefas } from '../../containers/ListadeTarefas'

export const Home = () => {
  return (
    <>
      <BarraLateral />
      <ListadeTarefas />
      <Button />
    </>
  )
}
