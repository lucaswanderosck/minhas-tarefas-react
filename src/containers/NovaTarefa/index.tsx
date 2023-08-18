import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import * as enums from '../../utils/enums/Tarefa'

import { Form, Options, RegisterButton } from './styles'
import { MainContainer, Title, Input } from '../../styles/GlobalStyles'
import Tarefa from '../../models/Tarefa'
import { add } from '../../store/reducers/tarefas'

export const NovaTarefa = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState(enums.Priority.NORMAL)

  const registerTarefa = (event: FormEvent) => {
    event.preventDefault()
    const tarefaToAdd = new Tarefa(
      title,
      priority,
      enums.Status.PENDENTE,
      description,
      9
    )
    dispatch(add(tarefaToAdd))
    navigate('/')
  }

  return (
    <MainContainer>
      <Title>Nova Tarefa</Title>
      <Form onSubmit={registerTarefa}>
        <Input
          value={title}
          onChange={({ target }) => setTitle(target.value)}
          type="text"
          placeholder="Título"
        />
        <Input
          as="textarea"
          value={description}
          onChange={({ target }) => setDescription(target.value)}
          placeholder="Descrição da tarefa"
        />
        <Options>
          <p>Prioridade</p>
          {Object.values(enums.Priority).map((prioridade) => (
            <div key={prioridade}>
              <input
                value={prioridade}
                type="radio"
                name="prioridade"
                id={prioridade}
                defaultChecked={prioridade === enums.Priority.NORMAL}
                onChange={({ target }) =>
                  setPriority(target.value as enums.Priority)
                }
              />
              <label htmlFor={prioridade}>{prioridade}</label>
            </div>
          ))}
        </Options>
        <RegisterButton type="submit">Cadastrar</RegisterButton>
      </Form>
    </MainContainer>
  )
}
