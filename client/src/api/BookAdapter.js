export class BookAdapter {
  static transform(bookItem) {
    return {
      id: bookItem.id,
      title: bookItem.title,
      author_name: bookItem.author.name,
      author_surname: bookItem.author.surname,
      publication_date: bookItem.publication_date,
      price: bookItem.price,
    };
  }
  static transformArray(bookItems) {
    return {
      rows: bookItems.rows.map((item) => this.transform(item)),
      count: bookItems.count,
    };
  }
}
