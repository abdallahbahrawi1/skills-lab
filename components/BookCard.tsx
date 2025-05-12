
interface Book {
  id: string | number;
  title: string;
  author: string;
}

const BookCard = ({book}: {book: Book}) => {
  return (
    <>
      <h1>{book.id}</h1>
      <h2>{book.title}</h2>
      <p>{book.author}</p>
    </>
  )
}

export default BookCard