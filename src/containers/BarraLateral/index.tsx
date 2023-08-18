import { useDispatch, useSelector } from 'react-redux'
import { FiltroCard } from '../../components/FiltroCard'

import * as S from './styles'
import { Input } from '../../styles/GlobalStyles'
import { RootReducer } from '../../store'
import { changeKeyword } from '../../store/reducers/filtro'
import * as enums from '../../utils/enums/Tarefa'

export const BarraLateral = () => {
  const dispatch = useDispatch()
  const { keyword } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        <Input
          type="text"
          placeholder="buscar"
          value={keyword}
          onChange={(event) => dispatch(changeKeyword(event.target.value))}
        />
      </div>
      <S.Filtros>
        <FiltroCard
          value={enums.Status.PENDENTE}
          criterion="status"
          caption="Pendentes"
        />
        <FiltroCard
          value={enums.Status.CONCLUIDA}
          criterion="status"
          caption="Concluídas"
        />
        <FiltroCard
          value={enums.Priority.URGENTE}
          criterion="prioridade"
          caption="Urgentes"
        />
        <FiltroCard
          value={enums.Priority.IMPORTANTE}
          criterion="prioridade"
          caption="Importantes"
        />
        <FiltroCard
          value={enums.Priority.NORMAL}
          criterion="prioridade"
          caption="Normais"
        />
        <FiltroCard criterion="todas" caption="Todas" />
      </S.Filtros>
    </S.Aside>
  )
}
