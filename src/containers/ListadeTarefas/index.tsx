import { useSelector } from 'react-redux'

import { Tarefa } from '../../components/Tarefa'
import { Container } from './styles'
import { RootReducer } from '../../store'

export const ListadeTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)

  return (
    <Container>
      <ul>
        {itens.map((t) => (
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
