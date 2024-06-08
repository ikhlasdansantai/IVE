-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('USER', 'ADMIN');

-- CreateEnum
CREATE TYPE "IveMemberName" AS ENUM ('Yujin', 'Gaeul', 'Rei', 'Wonyoung', 'Liz', 'Leeseo');

-- CreateTable
CREATE TABLE "Post" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "tags" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "emailVerified" TIMESTAMP(3),
    "image" TEXT,
    "password" TEXT,
    "role" "UserRole" NOT NULL DEFAULT 'USER',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "IveMemberProfile" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "emoji" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "about" TEXT NOT NULL,
    "stageName" TEXT NOT NULL,
    "birthName" TEXT NOT NULL,
    "birthday" TEXT NOT NULL,
    "positions" TEXT[],
    "nation" TEXT NOT NULL,
    "height" INTEGER NOT NULL,
    "funFacts" TEXT[],
    "votes" INTEGER NOT NULL DEFAULT 0,
    "userId" TEXT,

    CONSTRAINT "IveMemberProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "IveMemberAssets" (
    "id" TEXT NOT NULL,
    "iveMemberProfileId" TEXT NOT NULL,
    "mainProfileImage" TEXT NOT NULL,
    "detailProfileImages" TEXT[],

    CONSTRAINT "IveMemberAssets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VideoWithEmoji" (
    "id" TEXT NOT NULL,
    "videoUrl" TEXT NOT NULL,

    CONSTRAINT "VideoWithEmoji_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Emojis" (
    "id" TEXT NOT NULL,
    "emojiIcon" TEXT NOT NULL,
    "emojiCode" TEXT NOT NULL,
    "emojiTotal" INTEGER NOT NULL,
    "videoWithEmojiId" TEXT NOT NULL,

    CONSTRAINT "Emojis_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReactByUser" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "emojisId" TEXT NOT NULL,

    CONSTRAINT "ReactByUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Chat" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "chatBody" TEXT NOT NULL,
    "userName" TEXT NOT NULL,
    "userProfile" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "videoWithEmojiId" TEXT NOT NULL,

    CONSTRAINT "Chat_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IveMemberProfile" ADD CONSTRAINT "IveMemberProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IveMemberAssets" ADD CONSTRAINT "IveMemberAssets_iveMemberProfileId_fkey" FOREIGN KEY ("iveMemberProfileId") REFERENCES "IveMemberProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Emojis" ADD CONSTRAINT "Emojis_videoWithEmojiId_fkey" FOREIGN KEY ("videoWithEmojiId") REFERENCES "VideoWithEmoji"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReactByUser" ADD CONSTRAINT "ReactByUser_emojisId_fkey" FOREIGN KEY ("emojisId") REFERENCES "Emojis"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Chat" ADD CONSTRAINT "Chat_videoWithEmojiId_fkey" FOREIGN KEY ("videoWithEmojiId") REFERENCES "VideoWithEmoji"("id") ON DELETE CASCADE ON UPDATE CASCADE;
