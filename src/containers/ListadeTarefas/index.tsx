import { useSelector } from 'react-redux'

import { Tarefa } from '../../components/Tarefa'
import { Container } from './styles'
import { RootReducer } from '../../store'

export const ListadeTarefas = () => {
  const { tarefas } = useSelector((state: RootReducer) => state)

  return (
    <Container>
      <ul>
        {tarefas.map((t) => (
          <li key={t.title}>
            <Tarefa
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
