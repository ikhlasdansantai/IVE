import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const createPost = async (title, author, tags) => {
  const post = await prisma.post.create({
    data: {
      title,
      author,
      tags,
    },
  });

  return post;
};

export const getAllPost = async () => {
  const posts = await prisma.post.findMany();

  return posts;
};

export const deletePost = async (id) => {
  const post = await prisma.post.delete({
    where: {
      id: id,
    },
  });

  return post;
};
