import { FiPlus } from 'react-icons/fi'
import { ButtonAdd } from './styles'

export const Button = () => {
  return (
    <ButtonAdd to="/new">
      <FiPlus size={40} />
    </ButtonAdd>
  )
}
