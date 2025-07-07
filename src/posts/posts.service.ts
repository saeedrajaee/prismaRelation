import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User } from '@prisma/client';
import { CreatePostDto } from './dtos/createPost.dto';
 
@Injectable()
export class PostsService {
  constructor(private readonly prismaService: PrismaService) {}
 
   async createPost(post: CreatePostDto, user: User) {
    const categories = post.categoryIds?.map((category) => ({
      id: category,
    }));

    return this.prismaService.post.create({
      data: {
        ...post,
        author: {
          connect: {
            id: user.id,
          },
        },
        categories: {
          connect: categories,
        },
      },
      include: {
        categories: true,
      },
    });
  }
}