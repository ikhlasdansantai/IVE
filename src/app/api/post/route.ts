import { db } from "@/lib/prisma";

export async function GET() {
  const getPostUsers = await db.post.findMany();
  return Response.json({ message: "Success", status: 200, data: getPostUsers });
}

export async function POST(req: Request) {
  const { id, title, tags } = await req.json();
  const findUserById = await db.user.findUnique({ where: { id }, include: { post: true } });
  if (!findUserById) return Response.json({ message: "User not found", status: 404 });

  const createPost = await db.post.create({
    data: {
      title,
      userId: id,
      author: findUserById?.name as string,
      tags,
    },
  });

  const findPostById = await db.post.findUnique({ where: { id: createPost.id } });

  return Response.json({ message: "Post Created!", data: findPostById, status: 200 });
}
