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
  const [highlightedIndex, setHighlightedIndex] = React.useState<Number | null>(
    null
  );

  return (
    <>
      <div
        className={styles.wrapper}
        onMouseLeave={() => {
          setHighlightedIndex(null);
        }}
      >
        <h2>Reading List</h2>
        <ol className={styles.books}>
          {books.map((book, bookIndex) => {
            const reverseBookIndex = books.length - bookIndex - 1;

            let height = Math.max(50 - reverseBookIndex * 5, 10);

            if (bookIndex === highlightedIndex) {
              height = 100;
            }
            return (
              <li
                key={book.isbn}
                style={{ height: height }}
                onMouseEnter={() => {
                  setHighlightedIndex(bookIndex);
                }}
              >
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
                  onFocus={() => {
                    setHighlightedIndex(bookIndex);
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
