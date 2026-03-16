export class Book {
  id: string;
  title: string;
  author: string;
  isbn: string;
  isAvailable: boolean;

  constructor(props: Partial<Book>) {
    Object.assign(this, props);
  }
}
