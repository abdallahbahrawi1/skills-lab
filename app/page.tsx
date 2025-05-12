import {books} from "@/data/books";
import BookCard from "../components/BookCard"

export default function Home() {
  return (
    <>
      {
        books.map(book => (
          <BookCard key={book.id} book={book}/>
        ))
      }
    </>
  );
}
