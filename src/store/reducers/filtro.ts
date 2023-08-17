import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/Tarefa'

type FilterState = {
  keyword: string
  criterion: 'prioridade' | 'status' | 'todas'
  value?: enums.Priority | enums.Status
}

const initialState: FilterState = {
  keyword: '',
  criterion: 'todas'
}

const FilterSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    changeKeyword: (state, action: PayloadAction<string>) => {
      state.keyword = action.payload
    }
  }
})

export const { changeKeyword } = FilterSlice.actions

export default FilterSlice.reducer
