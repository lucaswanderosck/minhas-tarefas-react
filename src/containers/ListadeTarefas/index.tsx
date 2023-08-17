import { useSelector } from 'react-redux'

import { Tarefa } from '../../components/Tarefa'
import { Container } from './styles'
import { RootReducer } from '../../store'

export const ListadeTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  const { keyword } = useSelector((state: RootReducer) => state.filtro)

  const filterTarefas = () => {
    return itens.filter(
      (item) => item.title.toLowerCase().search(keyword.toLowerCase()) >= 0
    )
  }

  return (
    <Container>
      <p>
        2 tarfefas marcadas como &quot;categoria&ldquo; e &quot;{keyword}&ldquo;
      </p>
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
