export type CardBookProps = {
  imgUrl: string
  title: string
  authors: string[]
  text?: string
  pageCount: number
  publisher: string
  published: number
  onClick?: () => void
}
