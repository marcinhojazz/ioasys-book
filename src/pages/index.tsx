import Head from 'next/head'
import ContainerBooks from '../components/ContainerBooks'
import LoginPage from './login'

const Home = () => {
  if (!globalThis?.localStorage?.getItem('token')) {
    return <LoginPage />
  }

  return (
    <>
      <Head>
        <title>Lista de livros</title>
      </Head>
      <ContainerBooks />
    </>
  )
}

export default Home
