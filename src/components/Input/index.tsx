import { Container } from './styles'
import { InputProps } from './types'

const Input = ({
  label,
  placeholder,
  type = 'email',
  onChange,
}: InputProps) => {
  return (
    <Container>
      <label htmlFor="">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        onChange={v => onChange(v.target.value)}
      />
    </Container>
  )
}

export default Input
