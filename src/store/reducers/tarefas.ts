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
      state.itens = [
        ...state.itens.filter((tarefa) => tarefa.id !== action.payload)
      ]
    },
    edit: (state, action: PayloadAction<Tarefa>) => {
      const indexTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )
      if (indexTarefa >= 0) {
        state.itens[indexTarefa] = action.payload
      }
    },
    add: (state, action: PayloadAction<Omit<Tarefa, 'id'>>) => {
      const tarefaExists = state.itens.find(
        (tarefa) =>
          tarefa.title.toLowerCase() === action.payload.title.toLowerCase()
      )

      if (tarefaExists) {
        return alert('Tarefa já cadastrada')
      } else {
        const lastTarefa = state.itens[state.itens.length - 1]
        const newTarefa = {
          ...action.payload,
          id: lastTarefa ? lastTarefa.id + 1 : 1
        }
        state.itens.push(newTarefa)
      }
    },
    changeStatus: (
      state,
      action: PayloadAction<{ id: number; end: boolean }>
    ) => {
      const indexTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )
      if (indexTarefa >= 0) {
        state.itens[indexTarefa].status = action.payload.end
          ? enums.Status.CONCLUIDA
          : enums.Status.PENDENTE
      }
    }
  }
})

export const { remove, edit, add, changeStatus } = tarefasSlice.actions

export default tarefasSlice.reducer
