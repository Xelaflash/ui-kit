import * as React from 'react';
import { motion } from 'framer-motion';
import { X } from 'react-feather';

import VisuallyHidden from '../VisuallyHidden/VisuallyHidden';
import styles from './ReadingList.module.scss';

// should be in a separate file but for the sake of the example
interface Book {
  isbn: string;
  name: string;
  author: string;
  abstract: string;
  coverSrc: string;
  selected?: boolean;
}

type ReadingListProps = {
  books: Book[];
  handleRemoveBook: (book: Book) => void;
};
function ReadingList({
  books,
  handleRemoveBook,
}: ReadingListProps): JSX.Element {
  return (
    <>
      <div className={styles.wrapper}>
        <h2>Reading List</h2>
        <ol className={styles.books}>
          {books.map((book, bookIndex) => {
            return (
              <li key={book.isbn}>
                <motion.img
                  layoutId={`book-cover-${book.isbn}`}
                  alt={book.name}
                  src={book.coverSrc}
                  draggable={false}
                  className={styles.bookCover}
                  transition={{
                    type: 'spring',
                    stiffness: 400,
                    damping: 60,
                  }}
                />
                <motion.button
                  layout="position"
                  className={styles.deleteBtn}
                  onClick={() => handleRemoveBook(book)}
                  transition={{
                    type: 'spring',
                    stiffness: 400,
                    damping: 60,
                  }}
                >
                  <X />
                  <VisuallyHidden>Remove {book.name}</VisuallyHidden>
                </motion.button>
              </li>
            );
          })}
        </ol>
      </div>
    </>
  );
}

export default ReadingList;
