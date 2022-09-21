import { Body, Controller, Get, Post } from '@nestjs/common';
import { PostsService } from './posts.service';
import { Post as PostModel } from '@prisma/client';
// import { CreatePostDto } from './posts.dto';

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}
  @Get()
  async getPosts(): Promise<PostModel[]> {
    return this.postsService.posts();
  }
  @Post()
  async createPost(
    @Body() postData: { title: string; content?: string; authorid: number },
  ): Promise<PostModel> {
    const { title, content, authorid } = postData;
    return this.postsService.createPost({
      title,
      content,
      author: {
        connect: { id: authorid },
      },
    });
  }
}
