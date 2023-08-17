import { useDispatch, useSelector } from 'react-redux'
import { FiltroCard } from '../../components/FiltroCard'

import * as S from './styles'
import { RootReducer } from '../../store'
import { changeKeyword } from '../../store/reducers/filtro'

export const BarraLateral = () => {
  const dispatch = useDispatch()
  const { keyword } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        <S.Input
          type="text"
          placeholder="buscar"
          value={keyword}
          onChange={(event) => dispatch(changeKeyword(event.target.value))}
        />
      </div>
      <S.Filtros>
        <FiltroCard legenda="Pendentes" contador={1} />
        <FiltroCard legenda="Concluídas" contador={4} />
        <FiltroCard legenda="Urgentes" contador={3} />
        <FiltroCard legenda="Importantes" contador={5} />
        <FiltroCard legenda="Normais" contador={2} />
        <FiltroCard legenda="Todas" contador={3} active />
      </S.Filtros>
    </S.Aside>
  )
}
