import { Book } from '../entities/book.entity';

export interface BookRepository {
  findAll(): Promise<Book[]>;
  findById(id: string): Promise<Book | null>;
  create(book: Book): Promise<Book>;
  update(book: Book): Promise<Book>;
  delete(id: string): Promise<void>;
}
