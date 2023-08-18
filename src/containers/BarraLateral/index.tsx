import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { FiltroCard } from '../../components/FiltroCard'

import * as S from './styles'
import { Input } from '../../styles/GlobalStyles'
import { RootReducer } from '../../store'
import { changeKeyword } from '../../store/reducers/filtro'
import * as enums from '../../utils/enums/Tarefa'
import { Button } from '../../components/Tarefa/styles'

type Props = {
  showFilter: boolean
}

export const BarraLateral = ({ showFilter }: Props) => {
  const dispatch = useDispatch()
  const { keyword } = useSelector((state: RootReducer) => state.filtro)
  const navigate = useNavigate()

  return (
    <S.Aside>
      <div>
        {showFilter ? (
          <>
            <Input
              type="text"
              placeholder="buscar"
              value={keyword}
              onChange={(event) => dispatch(changeKeyword(event.target.value))}
            />
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
          </>
        ) : (
          <Button type="button" onClick={() => navigate('/')}>
            Voltar para a lista de tarefas
          </Button>
        )}
      </div>
    </S.Aside>
  )
}
