import styled from 'styled-components'
import colors from '../../styles/colors'
import { Button } from '../../components/Tarefa/styles'

export const Form = styled.form`
  max-width: 547px;
  width: 100%;
  font-size: 14px;
  font-weight: bold;
  color: #666;

  textarea {
    resize: none;
    margin: 16px 0;
  }
`
export const Options = styled.div`
  margin-bottom: 16px;

  p {
    margin-bottom: 6px;
  }

  label {
    margin-right: 6px;
  }

  div {
    display: inline;
    text-transform: capitalize;
  }
`
export const RegisterButton = styled(Button)`
  background-color: ${colors.green};
`
