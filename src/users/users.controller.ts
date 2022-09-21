import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/createuser.dto';
import { User } from './user.model';
import { UserService } from './users.service';
import { PostsService } from 'src/posts/posts.service';
import { post } from 'src/posts/post.model';

@Controller('users')
export class UsersController {
  constructor(
    private userService: UserService,
    private postsService: PostsService,
  ) {}
  @Get()
  async getUsers(): Promise<User[]> {
    return this.userService.users();
  }
  @Get('/:id')
  async getUser(@Param('id') id: string): Promise<User> {
    return this.userService.user({ id: Number(id) });
  }
  @Post()
  async createUser(@Body() createUserDTO: CreateUserDto): Promise<User> {
    return this.userService.createUser(createUserDTO);
  }
  @Get('/:id/posts')
  async getUserPosts(@Param('id') id: string): Promise<post[]> {
    return this.postsService.userPost(Number(id));
  }
}
