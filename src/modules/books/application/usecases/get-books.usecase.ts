import { Injectable, Inject } from '@nestjs/common';
import * as bookRepository_1 from '../../domain/repositories/book.repository';
import { Book } from '../../domain/entities/book.entity';

@Injectable()
export class GetBooksUseCase {
  constructor(
    @Inject('BookRepository')
    private readonly bookRepository: bookRepository_1.BookRepository,
  ) {}

  async execute(): Promise<Book[]> {
    return this.bookRepository.findAll();
  }
}
