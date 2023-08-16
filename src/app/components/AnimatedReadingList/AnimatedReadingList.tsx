'use client';

import * as React from 'react';
import DATA from './data';

import BookGrid from './BookGrid';
import ReadingList from './ReadingList';
import styles from './BookPage.module.scss';

// should be in a separate file but for the sake of the example
interface Book {
  isbn: string;
  name: string;
  author: string;
  abstract: string;
  coverSrc: string;
  selected?: boolean;
}

function AnimatedReadingList() {
  const [books, setBooks] = React.useState<Book[]>(DATA);

  function toggleBook(toggledBook: Book) {
    const nextBooks = books.filter((book) => book.isbn !== toggledBook.isbn);

    nextBooks.push({
      ...toggledBook,
      selected: !toggledBook.selected,
    });

    setBooks(nextBooks);
  }

  const selectedBooks = books.filter((book) => book.selected);
  const unselectedBooks = books.filter((book) => !book.selected);

  return (
    <>
      <h1 className="mt-24 mb-12 text-4xl text-center underline text-bold">
        Animated Reading List
      </h1>
      <div className={styles.wrapper}>
        <BookGrid
          className={styles.grid}
          books={unselectedBooks}
          handleSelectBook={toggleBook}
        />
        {selectedBooks.length > 0 && (
          <ReadingList books={selectedBooks} handleRemoveBook={toggleBook} />
        )}
      </div>
    </>
  );
}

export default AnimatedReadingList;
