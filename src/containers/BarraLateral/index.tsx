import { FiltroCard } from '../../components/FiltroCard'

import * as S from './styles'

export const BarraLateral = () => {
  return (
    <S.Aside>
      <div>
        <S.Input type="text" placeholder="buscar" />
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
