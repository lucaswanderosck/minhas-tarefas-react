import styled from 'styled-components'
import colors from '../../styles/colors'

type TagProps = {
  priority?: string
  status?: string
}

const backgroundColorReturn = (props: TagProps): string => {
  if ('status' in props) {
    if (props.status === 'Pendente') return colors.yellow
    if (props.status === 'Concluída') return colors.green
  } else if ('priority' in props) {
    if (props.priority === 'Urgente') return colors.red
    if (props.priority === 'Importante') return colors.yellow2
  }
  return '#ccc'
}

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;
`
export const Title = styled.h3`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 16px;
`
export const Tag = styled.span<TagProps>`
  padding: 4px 8px;
  font-size: 10px;
  font-weight: bold;
  color: #fff;
  background-color: ${(props) => backgroundColorReturn(props)};
  border-radius: 8px;
  margin-right: 16px;
  display: inline-block;
`
export const Description = styled.textarea`
  resize: none;
  border: none;
  background: none;
  color: #8b8b8b;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 100%;
  margin: 16px 0;
`
export const ActionBar = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`
export const Button = styled.button`
  font-size: 12px;
  color: #fff;
  font-weight: bold;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: #2f3640;
  border-radius: 8px;
  margin-right: 8px;
`
export const SaveButton = styled(Button)`
  background-color: ${colors.green};
`

export const CancelRemoveButton = styled(Button)`
  background-color: ${colors.red};
`
