import Logo from '../Logo'
import { Container } from './styles'
import { useRouter } from 'next/router'

type HeaderProps = {}

function Header({}: HeaderProps) {
  const { push } = useRouter()
  const name = localStorage.getItem('user')

  return (
    <Container>
      <Logo />
      <div>
        <span>Boas Vindas {name} </span>
        <button
          onClick={() => {
            localStorage.removeItem('token')
            push('/')
          }}
        >
          LOGOUT
        </button>
      </div>
    </Container>
  )
}

export default Header
