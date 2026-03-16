import { Module } from '@nestjs/common';
import { BooksController } from './presentation/books.controller';
import { GetBooksUseCase } from './application/usecases/get-books.usecase';
import { PrismaBookRepository } from './infrastructure/prisma-book.repository';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  controllers: [BooksController],
  providers: [
    GetBooksUseCase,
    PrismaService,
    {
      provide: 'BookRepository',
      useClass: PrismaBookRepository,
    },
  ],
  exports: [GetBooksUseCase],
})
export class BooksModule {}
