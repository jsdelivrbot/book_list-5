export function selectBook(book) {
  return {
    // selectBook is an ActionCreator, it needs to return an action
    // an object with a type property
    type: 'BOOK_SELECTED',
    payload: book
  };
}
