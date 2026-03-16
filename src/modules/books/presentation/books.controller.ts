import { Controller, Get } from '@nestjs/common';
import { GetBooksUseCase } from '../application/usecases/get-books.usecase';

@Controller('books')
export class BooksController {
  constructor(private readonly getBooksUseCase: GetBooksUseCase) {}

  @Get()
  async getBooks() {
    return this.getBooksUseCase.execute();
  }
}
