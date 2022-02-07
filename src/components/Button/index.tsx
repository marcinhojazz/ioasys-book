import { ButtonContainer } from './styles'
import { ButtonProps } from './types'

const Button = ({ children }: ButtonProps) => {
  return <ButtonContainer type="submit">{children}</ButtonContainer>
}

export default Button
