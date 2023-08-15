import * as S from './styles'
import { useState } from 'react'

type Props = {
  title: string
  priority: string
  status: string
  description: string
}

export const Tarefa = ({ priority, description, status, title }: Props) => {
  const [editing, setEditing] = useState(false)

  return (
    <S.Card>
      <S.Title>{title}</S.Title>
      <S.Tag priority={priority}>{priority}</S.Tag>
      <S.Tag status={status}>{status}</S.Tag>
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
            <S.CancelRemoveButton>Remover</S.CancelRemoveButton>
          </>
        )}
      </S.ActionBar>
    </S.Card>
  )
}
