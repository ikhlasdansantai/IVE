import { getVideoContentById, updateVideoContent } from "@/data/content";
import { getUserById } from "@/data/user";
import { db } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { videoId, id, emojiIcon, emojiCode, chatBody } = await req.json();
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

  if (
    iveVideoDatas?.items[0]?.snippet?.channelTitle !== "IVE" &&
    iveVideoDatas?.items[0]?.snippet?.channelTitle !== "STARSHIP"
  ) {
    return NextResponse.json({
      status: 404,
      message: "This Video is not IVE Video",
    });
  }

  const findVideoWithEmojiByUrl = await getVideoContentById(videoId);

  const findUserById = await getUserById(id);

  if (!findUserById) {
    return NextResponse.json({
      status: 404,
      message: "USER NOT FOUND",
    });
  }

  // ketika user belum melakukan reaction sama sekali
  if (!findVideoWithEmojiByUrl) {
    if (emojiIcon) {
      await db.videoWithEmoji.create({
        data: {
          videoUrl: videoId,
          emojis: {
            create: {
              emojiCode: emojiCode,
              emojiIcon: emojiIcon,
              emojiTotal: +1,
              reactByUsers: {
                create: {
                  name: findUserById?.name as string,
                  userId: id as string,
                },
              },
            },
          },
        },
      });

      const updatedVideoContent = await getVideoContentById(videoId);
      return NextResponse.json({
        status: 201,
        message: "Emoji added successfully",
        dataResponse: updatedVideoContent,
      });
    }
    if (chatBody) {
      await db.videoWithEmoji.create({
        data: {
          videoUrl: videoId,
          chats: {
            create: {
              userId: findUserById?.id as string,
              chatBody,
              userName: findUserById?.name as string,
              userProfile: findUserById?.image as string,
            },
          },
        },
      });

      return NextResponse.json({
        status: 201,
        message: "Chat added successfully",
        dataResponse: "success",
      });
    }

    return NextResponse.json({
      status: 400,
      message: "Something went wrong",
      dataResponse: "fail",
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

    const updatedVideoContent = await getVideoContentById(videoId);
    return NextResponse.json({
      status: 201,
      message: "Update Success!",
      dataResponse: updatedVideoContent,
    });
  }

  // ketika user sudah melakukan reaction
  if (findVideoWithEmojiByUrl) {
    const emoji = findVideoWithEmojiByUrl.emojis.find(
      (emoji) => emoji.emojiIcon === emojiIcon,
    );

    if (emoji) {
      const userReacted = emoji.reactByUsers.some((user) => user.userId === id);

      if (userReacted) {
        await db.reactByUser.delete({
          where: {
            id: emoji?.reactByUsers.find((user) => user?.userId === id)?.id,
          },
        });

        const updatedVideoContent = await updateVideoContent({
          videoId: findVideoWithEmojiByUrl.id,
          emojiId: emoji.id,
          operation: "decrement",
        });

        return NextResponse.json({
          status: 200,
          message: "Reaction removed successfully",
          data: updatedVideoContent,
        });
      } else {
        await db.reactByUser.create({
          data: {
            name: findUserById?.name as string,
            userId: id,
            emojis: {
              connect: {
                id: emoji.id,
              },
            },
          },
        });

        const updatedVideoContent = await updateVideoContent({
          videoId: findVideoWithEmojiByUrl.id,
          emojiId: emoji.id,
          operation: "increment",
        });

        return NextResponse.json({
          status: 200,
          message: "Reaction added successfully",
          data: updatedVideoContent,
        });
      }
    } else {
      await db.emojis.create({
        data: {
          videoWithEmoji: {
            connect: {
              id: findVideoWithEmojiByUrl.id,
            },
          },
          emojiCode: emojiCode as string,
          emojiIcon: emojiIcon as string,
          emojiTotal: +1,
          reactByUsers: {
            create: {
              name: findUserById?.name as string,
              userId: id as string,
            },
          },
        },
      });

      const updatedVideoContent = await getVideoContentById(videoId);
      return NextResponse.json({
        status: 201,
        message: "Emoji kontol added successfully",
        dataResponse: updatedVideoContent,
      });
    }
  }
}

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
