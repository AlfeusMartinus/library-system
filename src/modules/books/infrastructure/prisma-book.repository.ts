import { Injectable } from '@nestjs/common';
import { BookRepository } from '../domain/repositories/book.repository';
import { Book } from '../domain/entities/book.entity';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class PrismaBookRepository implements BookRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<Book[]> {
    // Implementation placeholder
    return [];
  }

  async findById(id: string): Promise<Book | null> {
    return null;
  }

  async create(book: Book): Promise<Book> {
    return book;
  }

  async update(book: Book): Promise<Book> {
    return book;
  }

  async delete(id: string): Promise<void> {
    return;
  }
}
