import { configureStore } from '@reduxjs/toolkit'
import tarefasReducer from './reducers/tarefas'
import filterReducer from './reducers/filtro'

const store = configureStore({
  reducer: {
    tarefas: tarefasReducer,
    filtro: filterReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
