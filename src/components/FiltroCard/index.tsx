import * as S from './styles'

export type Props = {
  active?: boolean
  contador: number
  legenda: string
}

export const FiltroCard = ({ active, contador, legenda }: Props) => {
  return (
    <S.Card active={active}>
      <S.Contador>{contador}</S.Contador>
      <S.Label>{legenda}</S.Label>
    </S.Card>
  )
}
