import * as S from './styles'
import { useState } from 'react'

type Props = {
  title: string
  category: string
  status: string
  description: string
}

export const Tarefa = ({ category, description, status, title }: Props) => {
  const [editing, setEditing] = useState(false)

  return (
    <S.Card>
      <S.Title>{title}</S.Title>
      <S.Tag>{category}</S.Tag>
      <S.Tag>{status}</S.Tag>
      <S.Description value={description} />
      <S.ActionBar>
        {editing ? (
          <>
            <S.Button>Salvar</S.Button>
            <S.Button onClick={() => setEditing(false)}>Cancelar</S.Button>
          </>
        ) : (
          <>
            <S.Button onClick={() => setEditing(true)}>Editar</S.Button>
            <S.Button>Remover</S.Button>
          </>
        )}
      </S.ActionBar>
    </S.Card>
  )
}
