import { useSelector } from 'react-redux'

import { Tarefa } from '../../components/Tarefa'
import { Container } from './styles'
import { RootReducer } from '../../store'

export const ListadeTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  const { keyword, criterion, value } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filterTarefas = () => {
    let filteredTarefas = itens
    if (keyword !== undefined) {
      filteredTarefas = filteredTarefas.filter(
        (item) => item.title.toLowerCase().search(keyword.toLowerCase()) >= 0
      )

      if (criterion === 'prioridade') {
        filteredTarefas = filteredTarefas.filter(
          (item) => item.priority === value
        )
      } else if (criterion === 'status') {
        filteredTarefas = filteredTarefas.filter(
          (item) => item.status === value
        )
      }
      return filteredTarefas
    } else {
      return itens
    }
  }

  return (
    <Container>
      <ul>
        {filterTarefas().map((t) => (
          <li key={t.title}>
            <Tarefa
              id={t.id}
              priority={t.priority}
              title={t.title}
              description={t.description}
              status={t.status}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}
