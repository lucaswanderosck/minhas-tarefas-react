import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'

import * as S from './styles'
import { remove, edit } from '../../store/reducers/tarefas'
import TarefaClass from '../../models/Tarefa'

type Props = TarefaClass

export const Tarefa = ({
  priority,
  description: originDescription,
  status,
  title,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [editing, setEditing] = useState(false)

  const [description, setDescription] = useState('')

  useEffect(() => {
    if (originDescription.length > 0) {
      setDescription(originDescription)
    }
  }, [originDescription])

  const cancelEdit = () => {
    setEditing(false)
    setDescription(originDescription)
  }

  return (
    <S.Card>
      <S.Title>{title}</S.Title>
      <S.Tag parameter="priority" priority={priority}>
        {priority}
      </S.Tag>
      <S.Tag parameter="status" status={status}>
        {status}
      </S.Tag>
      <S.Description
        disabled={!editing}
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <S.ActionBar>
        {editing ? (
          <>
            <S.SaveButton
              onClick={() => {
                dispatch(
                  edit({
                    priority,
                    description: originDescription,
                    status,
                    title,
                    id
                  })
                )
                setEditing(false)
              }}
            >
              Salvar
            </S.SaveButton>
            <S.CancelRemoveButton onClick={cancelEdit}>
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
