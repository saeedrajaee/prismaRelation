import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, User } from '@prisma/client';
import { CreatePostDto } from './dtos/createPost.dto';
import { CreateGroupPostDto } from './dtos/createGroupPost.dto';

@Injectable()
export class PostsService {
  constructor(private readonly prismaService: PrismaService) {}

  async createPost(data: CreatePostDto) {
    return this.prismaService.post.create({
      data: {
        ...data,
      },
    });
  }

  // async createGroupPosts(userId:number[],
  //     createGroupPostDto: Prisma.GroupPost) {
  //   this.prismaService.groupPost.create({
  //     data: {
  //       ...data,
  //       users: {
  //         create: [{userId:1},{userId:2}],
  //       },
  //     },
  //   });
  // }
}
