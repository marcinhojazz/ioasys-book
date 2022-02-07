import { useRouter } from 'next/router'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { loginSubmit } from '../../services/api'
import Button from '../Button'
import Input from '../Input'
import { Container, Wrapper } from './styles'

const FormArea = () => {
  const { push } = useRouter()

  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  const handleSubmit = async () => {
    event.preventDefault()
    const data = await loginSubmit(email, pass)

    if (!!data?.res?.id) {
      localStorage.setItem('token', data?.auth)
      localStorage.setItem('user', data?.res?.name)
      push('/')
      toast.success('Login realizado com sucesso!')
    } else {
      toast.error(data?.res?.errors?.message)
    }
  }

  return (
    <Wrapper>
      <Container>
        <h1>
          <b>ioasys</b> book
        </h1>
        <form onSubmit={() => handleSubmit()}>
          <Input
            onChange={setEmail}
            label="Email"
            placeholder="seu@email.com"
          />
          <Input
            onChange={setPass}
            label="Senha"
            placeholder="Senha"
            type="password"
          />
          <Button>ENTRAR</Button>
        </form>
      </Container>
    </Wrapper>
  )
}

export default FormArea
