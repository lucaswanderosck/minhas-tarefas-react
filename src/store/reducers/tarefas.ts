import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enums/Tarefa'

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState: [
    new Tarefa(
      'Estudar JavaScript',
      enums.Priority.IMPORTANTE,
      enums.Status.PENDENTE,
      '',
      1
    ),
    new Tarefa(
      'Estudar Typescript',
      enums.Priority.NORMAL,
      enums.Status.CONCLUIDA,
      '',
      2
    ),
    new Tarefa(
      'Estudar ReactJs',
      enums.Priority.URGENTE,
      enums.Status.PENDENTE,
      '',
      3
    )
  ],
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state = state.filter((tarefa) => tarefa.id !== action.payload)
    }
  }
})

export const { remove } = tarefasSlice.actions

export default tarefasSlice.reducer
