import { Tarefa } from '../../components/Tarefa'
import { Container } from './styles'

const tarefas = [
  {
    title: 'Estudar TypeScript',
    categoty: 'importante',
    status: 'Pendente',
    description: 'Ver a aula 3 da EBAC'
  },
  {
    title: 'Estudar ReactJs',
    categoty: 'importante',
    status: 'Concluída',
    description: 'Ver a aula 9 da EBAC'
  },
  {
    title: 'Estudar JavaScript',
    categoty: 'Urgente',
    status: 'Pendente',
    description: 'Ver a aula 6 da EBAC'
  }
]
export const ListadeTarefas = () => {
  return (
    <Container>
      <ul>
        {tarefas.map((t) => (
          <li key={t.title}>
            <Tarefa
              category={t.categoty}
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
