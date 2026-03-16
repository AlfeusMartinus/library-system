import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
// NOTE: This assumes @prisma/client is installed. 
// If not, this file might have lint errors until dependencies are set up.
// import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService /* extends PrismaClient */ implements OnModuleInit, OnModuleDestroy {
  async onModuleInit() {
    // await this.$connect();
  }

  async onModuleDestroy() {
    // await this.$disconnect();
  }
}
