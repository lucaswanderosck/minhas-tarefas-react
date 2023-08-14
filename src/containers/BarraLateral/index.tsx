import { FiltroCard } from '../../components/FiltroCard'

import * as S from './styles'

export const BarraLateral = () => {
  return (
    <S.Aside>
      <div>
        <S.Input type="text" placeholder="buscar" />
      </div>
      <S.Filtros>
        <FiltroCard legenda="pendentes" contador={1} />
        <FiltroCard legenda="concluídas" contador={4} />
        <FiltroCard legenda="urgentes" contador={3} />
        <FiltroCard legenda="importantes" contador={5} />
        <FiltroCard legenda="normais" contador={2} />
        <FiltroCard legenda="todas" contador={3} active />
      </S.Filtros>
    </S.Aside>
  )
}
