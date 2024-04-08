import { db } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { videoId, id, emojiIcon, userId, chatBody } = await req.json();
  const key = process.env.SECRET_KEY;
  const getIveVideos = await fetch(
    `https://youtube.googleapis.com/youtube/v3/videos?key=${key}&part=snippet,contentDetails&id=${videoId}`,
  );
  // https://youtube.googleapis.com/youtube/v3/videos?key=AIzaSyA6h7jPY-oC0-lWjG5GM2U5QOFIb_8BTMw&part=snippet,contentDetails&id=osu0o7AyDAg
  const iveVideoDatas = await getIveVideos.json();

  if (iveVideoDatas?.items?.length === 0) {
    return NextResponse.json({
      status: 404,
      message: "Video is not found",
    });
  }

  if (iveVideoDatas?.items[0]?.snippet?.channelTitle !== "IVE") {
    return NextResponse.json({
      status: 404,
      message: "This Video is not IVE Video",
    });
  }

  const findVideoWithEmojiByUrl = await db.videoWithEmoji.findFirst({
    where: {
      videoUrl: videoId,
    },
    include: {
      chats: true,
      emojis: {
        include: {
          reactByUsers: true,
        },
      },
    },
  });
  const findUserById = await db.user.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      name: true,
      image: true,
    },
  });

  if (!findUserById) {
    return NextResponse.json({
      status: 404,
      message: "USER NOT FOUND",
    });
  }

  // Jika ada chat dan video yang masuk ke list video with emoji
  if (findVideoWithEmojiByUrl && chatBody) {
    await db.chat.create({
      data: {
        userId: findUserById?.id as string,
        chatBody,
        userName: findUserById?.name as string,
        userProfile: findUserById?.image as string,
        videoWithEmoji: {
          connect: {
            id: findVideoWithEmojiByUrl?.id,
          },
        },
      },
    });
  }

  await db.emojis.create({
    data: {
      emojiIcon: emojiIcon,
      emojiTotal: 1,
      reactByUsers: {
        create: {
          name: findUserById?.name as string,
          userId: id,
        },
      },
      videoWithEmoji: {
        connect: {
          id: findVideoWithEmojiByUrl?.id,
        },
      },
    },
  });

  return NextResponse.json({
    status: 200,
    message: "Emoji created successfully",
  });
}
//   if (findVideoWithEmojiByUrl) {
//     const emoji = findVideoWithEmojiByUrl.emojis.find(
//       (emoji) => emoji.emojiIcon === emojiIcon,
//     );

//     if (emoji) {
//       const userReacted = emoji.reactByUsers.some((user) => user.userId === id);

//       if (userReacted) {
//         await db.reactByUser.delete({
//           where: {
//             id: emoji?.reactByUsers.find((user) => user?.userId === id)?.id,
//           },
//         });

//         await db.emojis.update({
//           where: {
//             id: emoji.id,
//           },
//           data: {
//             emojiTotal: { decrement: 1 },
//           },
//         });

//         return NextResponse.json({
//           status: 200,
//           message: "Reaction removed successfully",
//           data: findVideoWithEmojiByUrl,
//         });
//       } else {
//         await db.reactByUser.create({
//           data: {
//             name: findUserById?.name as string,
//             userId: id,
//             emojis: {
//               connect: {
//                 id: emoji.id,
//               },
//             },
//           },
//         });

//         await db.emojis.update({
//           where: {
//             id: emoji.id,
//           },
//           data: {
//             emojiTotal: { increment: 1 },
//           },
//         });

//         return NextResponse.json({
//           status: 200,
//           message: "Reaction added successfully",
//           data: findVideoWithEmojiByUrl,
//         });
//       }
//     } else {
//       await db.emojis.create({
//         data: {
//           emojiIcon: emojiIcon,
//           emojiTotal: 1,
//           reactByUsers: {
//             create: {
//               name: findUserById?.name as string,
//               userId: id,
//             },
//           },
//           videoWithEmoji: {
//             connect: {
//               id: findVideoWithEmojiByUrl.id,
//             },
//           },
//         },
//       });

//       return NextResponse.json({
//         status: 200,
//         message: "Emoji created successfully",
//       });
//     }
//   } else {
//     return NextResponse.json({
//       status: 404,
//       message: "Video not found",
//       data: iveVideoDatas,
//     });
//   }
// }

export async function GET() {
  const getVideoWithEmojiModel = await db.videoWithEmoji.findMany({
    include: {
      chats: true,
      emojis: {
        include: {
          reactByUsers: true,
        },
      },
    },
  });

  return NextResponse.json({
    status: 201,
    message: "SUCCESS",
    data: { getVideoWithEmojiModel },
  });
}

export async function DELETE() {
  const deleteAll = await db.videoWithEmoji.delete({
    where: {
      id: "cltnzdves0000juixx5hul4ub",
    },
    include: {
      emojis: true,
    },
  });
  return NextResponse.json({
    status: 201,
    message: "DELETE SUCCESS",
    data: { deleteAll },
  });
}

// export async function PATCH({req: Request}){
//   const { videoId, emojiIcon } = await req.json();
//   await db.videoWithEmoji.create({
//     data: {
//       videoUrl: videoId,
//       emojis: {
//         create: [
//           {
//             emojiIcon,
//             emojiTotal: 1,
//           },
//         ],
//       },
//     },
//   });

//   return NextResponse.json({
//     status: 201,
//     message: "DELETE SUCCESS",
//     data: { null },
//   });
// }
