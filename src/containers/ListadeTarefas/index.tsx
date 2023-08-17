import { useSelector } from 'react-redux'

import { Tarefa } from '../../components/Tarefa'
import { Container, Result } from './styles'
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

  const displayFilterResult = (quantity: number) => {
    let message = ''
    const complementation =
      keyword !== undefined && keyword.length > 0 ? `e "${keyword}" ` : ''

    if (criterion === 'todas') {
      message = `${quantity} tarefa(s) encontrada(s) como: todas ${complementation}`
    } else {
      message = `${quantity} tarefa(s) encontrada(s) como: "${`${criterion}=${value}`}" ${complementation}`
    }
    return message
  }

  const tarefas = filterTarefas()
  const message = displayFilterResult(tarefas.length)

  return (
    <Container>
      <Result>{message}</Result>
      <ul>
        {tarefas.map((t) => (
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
