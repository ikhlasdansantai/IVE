import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const createComment = async (title, author, tags, isLoggin) => {
  if (!isLoggin) {
    return false;
  } else {
    return true;
  }
  const comment = await prisma.comment.create({
    data: {
      title,
      author,
      tags,
    },
  });

  return comment;
};

export const getAllComment = async () => {
  const comments = await prisma.comment.findMany();

  return comments;
};

export const deleteComment = async (id) => {
  const comment = await prisma.comment.delete({
    where: {
      id: id,
    },
  });

  return comment;
};
