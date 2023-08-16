import * as React from 'react';
import { motion } from 'framer-motion';
import styles from './BookGrid.module.scss';

// should be in a separate file but for the sake of the example
interface Book {
  isbn: string;
  name: string;
  author: string;
  abstract: string;
  coverSrc: string;
  selected?: boolean;
}

interface BookGridProps extends React.HTMLAttributes<HTMLElement> {
  books: Book[];
  handleSelectBook: (book: Book) => void;
}

function BookGrid({
  books,
  handleSelectBook,
  ...delegated
}: BookGridProps): JSX.Element {
  return (
    <section {...delegated}>
      <ul className={styles.wrapper}>
        {books.map((book) => (
          <li key={book.isbn}>
            <button
              className={styles.bookBtn}
              onClick={() => handleSelectBook(book)}
            >
              <motion.img
                layoutId={`book-cover-${book.isbn}`}
                alt={book.name}
                src={book.coverSrc}
                className={styles.bookCover}
                draggable={false}
              />
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default BookGrid;
