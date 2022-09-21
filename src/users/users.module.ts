import { Module } from '@nestjs/common';
import { PostsModule } from 'src/posts/posts.module';
import { PrismaService } from 'src/prisma.service';
import { UsersController } from './users.controller';
import { UserService } from './users.service';

@Module({
  imports: [PostsModule],
  controllers: [UsersController],
  providers: [UserService, PrismaService],
})
export class UsersModule {}
