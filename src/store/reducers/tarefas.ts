import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enums/Tarefa'

type TarefasState = {
  itens: Tarefa[]
}

const initialState: TarefasState = {
  itens: [
    {
      id: 1,
      title: 'Estudar JavaScript',
      description: 'Ver a aula 3 da EBAC',
      priority: enums.Priority.IMPORTANTE,
      status: enums.Status.PENDENTE
    },
    {
      id: 2,
      title: 'Estudar TypeScript',
      description: 'Rever o material de apoio',
      priority: enums.Priority.NORMAL,
      status: enums.Status.CONCLUIDA
    },
    {
      id: 3,
      title: 'Estudar reactJs',
      description: 'Ver a aula 6 da eBAC',
      priority: enums.Priority.URGENTE,
      status: enums.Status.PENDENTE
    }
  ]
}

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState,
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((tarefa) => tarefa.id !== action.payload)
    }
  }
})

export const { remove } = tarefasSlice.actions

export default tarefasSlice.reducer
