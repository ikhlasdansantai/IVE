import { db } from "@/lib/prisma";

export const getVideoContentById = async (videoId: string) => {
  try {
    const videoContent = await db.videoWithEmoji.findFirst({
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
    return videoContent;
  } catch (error) {
    return null;
  }
};

export const updateVideoContent = async ({
  videoId,
  emojiId,
  operation,
}: {
  videoId: string;
  emojiId: string;
  operation: "increment" | "decrement";
}) => {
  try {
    await db.videoWithEmoji.update({
      where: {
        id: videoId,
      },
      data: {
        emojis: {
          update: {
            where: {
              id: emojiId,
            },
            data: {
              emojiTotal: { [operation]: 1 },
            },
          },
        },
      },
    });

    const updatedVideoContent = await db.videoWithEmoji.findUnique({
      where: {
        id: videoId,
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

    return updatedVideoContent;
  } catch (error) {
    return null;
  }
};
