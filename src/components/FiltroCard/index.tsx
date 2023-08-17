import { useDispatch, useSelector } from 'react-redux'
import { changeFilter } from '../../store/reducers/filtro'
import * as S from './styles'
import * as enums from '../../utils//enums/Tarefa'
import { RootReducer } from '../../store'

export type Props = {
  caption: string
  criterion: 'status' | 'prioridade' | 'todas'
  value?: enums.Priority | enums.Status
}

export const FiltroCard = ({ caption, criterion, value }: Props) => {
  const dispatch = useDispatch()
  const { filtro, tarefas } = useSelector((state: RootReducer) => state)

  const setIsActive = () => {
    return filtro.criterion === criterion && filtro.value === value
  }

  const countTarefas = () => {
    if (criterion === 'todas') return tarefas.itens.length
    if (criterion === 'prioridade') {
      return tarefas.itens.filter((item) => item.priority === value).length
    }
    if (criterion === 'status') {
      return tarefas.itens.filter((item) => item.status === value).length
    }
  }

  const filter = () => {
    dispatch(
      changeFilter({
        criterion,
        value
      })
    )
  }

  const active = setIsActive()
  const counter = countTarefas()

  return (
    <S.Card active={active} onClick={filter}>
      <S.Counter>{counter}</S.Counter>
      <S.Label>{caption}</S.Label>
    </S.Card>
  )
}
