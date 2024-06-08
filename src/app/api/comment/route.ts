// import { createPost, getAllPost }
import { NextRequest, NextResponse } from "next/server";

type ResponseData = {
  id: string;
  title: string;
  author: string;
  tags: string;
  createdAt: Date;
};

type Comment = {
  id: string;
  createdAt: any;
  author: string;
  tags: string;
  title: string;
  message: string;
};

// export async function GET() {
//   const comments: any = await getAllPost();
//   return NextResponse.json({ status: 200, message: "lu sih anjay", data: comments });
// }

// export async function POST(req: NextRequest) {
//   const { author, tags, title }: ResponseData = await req.json();
//   const newComment = await createPost(title, author, tags);

  // if (!newComment) {
  //   return NextResponse.json({
  //     status: 404,
  //     // message: "OK",
  //     error: "Belum Login",
  //   });
  // }

  // return NextResponse.json({
  //   status: 200,
  //   message: "OK!",
  //   data: newComment,
  // });

  // return NextResponse.json({
  //   status: 200,
  //   message: "OK",
  //   data: newComment,
  // });
// }

// switch (req.method) {
//   case "POST": {
//     const { author, tags, title } = req.body;
//     const new_comment = await createComment(author, tags, title);

//     return res.status(201).json(new_comment);
//   }

//   case "GET": {
//     const comments = await getAllComment();
//     return res.status(200).json(comments);
//   }

//   case "DELETE": {
//     const { id } = req.query;

//     await deleteComment(id);
//     return res.status(200).json({ message: `Pesan Berhasil Di Hapus` });
//   }
// }
