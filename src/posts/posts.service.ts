import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Post, Prisma } from '@prisma/client';
@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}
  async userPost(authorid: number): Promise<Post[]> {
    return this.prisma.post.findMany({
      where: { authorId: authorid },
    });
  }
  async posts(): Promise<Post[]> {
    return this.prisma.post.findMany();
  }

  async createPost(data: Prisma.PostCreateInput): Promise<Post> {
    return this.prisma.post.create({
      data,
    });
  }
}
