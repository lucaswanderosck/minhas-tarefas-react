import { useDispatch } from 'react-redux'
import { ChangeEvent, useEffect, useState } from 'react'

import * as S from './styles'
import { remove, edit, changeStatus } from '../../store/reducers/tarefas'
import TarefaClass from '../../models/Tarefa'
import * as enums from '../../utils/enums/Tarefa'

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

  const changeStatusTarefa = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      changeStatus({
        id,
        end: event.target.checked
      })
    )
  }

  return (
    <S.Card>
      <label htmlFor={title}>
        <input
          type="checkbox"
          id={title}
          checked={status === enums.Status.CONCLUIDA}
          onChange={changeStatusTarefa}
        />
        <S.Title>
          {editing && <em>Editando: </em>}
          {title}
        </S.Title>
      </label>

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
