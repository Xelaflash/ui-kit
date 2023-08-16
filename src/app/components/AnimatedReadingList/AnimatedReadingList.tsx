'use client';

import * as React from 'react';
import DATA from './data';

import BookGrid from './BookGrid';
import ReadingList from './ReadingList';
import styles from './BookPage.module.scss';

function AnimatedReadingList() {
  const [books, setBooks] = React.useState(DATA);

  function toggleBook(toggledBook) {
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
