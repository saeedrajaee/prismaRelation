import {
  Body,
  Controller,
  Post,
  Req,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreatePostDto } from './dtos/createPost.dto';
import { PostsService } from './posts.service';
import RequestWithUser from './dtos/requestWithUser.interface';
import { CreateGroupPostDto } from './dtos/createGroupPost.dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}
  @Post()
  async createPost(
    @Body()
    createPostDto: CreatePostDto,
  ) {
    return this.postsService.createPost(createPostDto);
  }

  // @Post('group')
  // @UsePipes(ValidationPipe)
  // async createGroupPosts(
  //   @Body() userId:number[],
  //   createGroupPostDto: CreateGroupPostDto,
  // ) {
  //   // return this.postsService.createPost(createPostDto);
  // }
}
