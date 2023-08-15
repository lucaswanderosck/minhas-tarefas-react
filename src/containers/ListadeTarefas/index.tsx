import { Tarefa } from '../../components/Tarefa'
import { Container } from './styles'
import * as enums from '../../utils/enums/Tarefa'

const tarefas = [
  {
    title: 'Estudar TypeScript',
    description: 'Ver a aula 3 da EBAC',
    priority: enums.Priority.IMPORTANTE,
    status: enums.Status.CONCLUIDA
  },
  {
    title: 'Estudar ReactJs',
    description: 'Ver a aula 9 da EBAC',
    priority: enums.Priority.NORMAL,
    status: enums.Status.CONCLUIDA
  },
  {
    title: 'Estudar JavaScript',
    description: 'Ver a aula 6 da EBAC',
    priority: enums.Priority.URGENTE,
    status: enums.Status.PENDENTE
  }
]
export const ListadeTarefas = () => {
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
