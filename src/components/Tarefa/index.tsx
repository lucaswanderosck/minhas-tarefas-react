import { useDispatch } from 'react-redux'
import { useState } from 'react'

import * as S from './styles'
import { remove } from '../../store/reducers/tarefas'
import TarefaClass from '../../models/Tarefa'

type Props = TarefaClass

export const Tarefa = ({ priority, description, status, title, id }: Props) => {
  const dispatch = useDispatch()
  const [editing, setEditing] = useState(false)

  return (
    <S.Card>
      <S.Title>{title}</S.Title>
      <S.Tag parameter="priority" priority={priority}>
        {priority}
      </S.Tag>
      <S.Tag parameter="status" status={status}>
        {status}
      </S.Tag>
      <S.Description value={description} />
      <S.ActionBar>
        {editing ? (
          <>
            <S.SaveButton>Salvar</S.SaveButton>
            <S.CancelRemoveButton onClick={() => setEditing(false)}>
              Cancelar
            </S.CancelRemoveButton>
          </>
        ) : (
          <>
            <S.Button onClick={() => setEditing(true)}>Editar</S.Button>
            <S.CancelRemoveButton onClick={() => dispatch(remove(id))}>
              Remover
            </S.CancelRemoveButton>
          </>
        )}
      </S.ActionBar>
    </S.Card>
  )
}
