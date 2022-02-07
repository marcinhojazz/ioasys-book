import React, { useEffect, useState } from 'react'
import { getBooks } from '../../services/api'
import CardBook from '../CardBook'
import Header from '../Header'
import { MyModal } from '../MyModal'
import Pagination from '../Pagination'
import { Container } from './styles'

type ContainerBooksProps = {}

function ContainerBooks({}: ContainerBooksProps) {
  const [books, setBooks] = useState([])

  const [isModalOpen, setModalState] = React.useState(false)
  const toggleModal = () => setModalState(!isModalOpen)

  useEffect(() => {
    ;(async () => {
      const data = await getBooks(1, 25)
      setBooks(data.data)
      console.log(books)
    })()
  }, [])

  return (
    <>
      <Container>
        <Header />
        {books?.map((book, index) => (
          <CardBook
            onClick={toggleModal}
            imgUrl={book.imageUrl}
            title={book.title}
            key={index}
            authors={book.authors}
            pageCount={book.pageCount}
            publisher={book.publisher}
            published={book.published}
          />
        ))}
        <MyModal
          title={'my modal'}
          isOpen={isModalOpen}
          onClose={toggleModal}
        ></MyModal>
      </Container>
      <Pagination />
    </>
  )
}

export default ContainerBooks
