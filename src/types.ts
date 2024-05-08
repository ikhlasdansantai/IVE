export type MemberProfileProps = {
  status: number;
  message: string;
  data: {
    name: string;
    nickname: string;
    images: string[];
    age: number;
    funFacts: string[];
    stageName: string;
    birthName: string;
    birthday: string;
    nation: string;
    height: number;
    positions: string[];
    assets: {
      0: {
        detailProfileImages: string[];
      };
    };
  };
};

export type VoteDataProps = {
  emoji: string;
  name: string;
  count: number;
};

export const voteDatas: VoteDataProps[] = [
  {
    emoji: "🐱",
    name: "Liz",
    count: 199,
  },
  {
    emoji: "🐶",
    name: "Yujin",
    count: 199,
  },

  {
    emoji: "🐰",
    name: "Wonyoung",
    count: 199,
  },
  {
    emoji: "🦊",
    name: "Gaeul",
    count: 199,
  },
  {
    emoji: "🐥",
    name: "Rei",
    count: 199,
  },
  {
    emoji: "🦁",
    name: "Leeseo",
    count: 199,
  },
];

export type EmojiProps = {
  emojiCode: string;
  emojiIcon: string;
  counter: number;
  reactByUsers: { idUser: string; name: string }[];
};

export const baseEmojis: EmojiProps[] = [
  {
    emojiCode: "1f631",
    emojiIcon: "😱",
    counter: 1,
    reactByUsers: [
      {
        idUser: "user456",
        name: "Skrillex",
      },
    ],
  },
  {
    emojiCode: "1f60d",
    emojiIcon: "😍",
    counter: 12,
    reactByUsers: [
      {
        idUser: "user123",
        name: "Iksan Ganteng",
      },
      {
        idUser: "user456",
        name: "Skrillex",
      },
    ],
  },
  {
    emojiCode: "1f970",
    emojiIcon: "🥰",
    counter: 13,
    reactByUsers: [
      {
        idUser: "user123",
        name: "Iksan Ganteng",
      },
      {
        idUser: "user456",
        name: "Skrillex",
      },
    ],
  },
  {
    emojiCode: "1f60e",
    emojiIcon: "😎",
    counter: 14,
    reactByUsers: [
      {
        idUser: "user123",
        name: "Iksan Ganteng",
      },
      {
        idUser: "user456",
        name: "Skrillex",
      },
    ],
  },
  {
    emojiCode: "1f525",
    emojiIcon: "🔥",
    counter: 15,
    reactByUsers: [
      {
        idUser: "user123",
        name: "Iksan Ganteng",
      },
      {
        idUser: "user456",
        name: "Skrillex",
      },
    ],
  },
  {
    emojiCode: "1f496",
    emojiIcon: "💖",
    counter: 1,
    reactByUsers: [
      {
        idUser: "user123",
        name: "Iksan Ganteng",
      },
      {
        idUser: "user456",
        name: "Skrillex",
      },
    ],
  },
];

export type linkProps = {
  label: string;
  href: string;
};

export const links: linkProps[] = [
  { label: "Home", href: "/" },
  { label: "Profiles", href: "/profiles" },
  { label: "Contents", href: "/contents" },
  // { label: "Community", href: "/community" },
];

export type MemberProfileDetailProps = {
  stageName: string;
  emoji: string;
  positions: string[];
};

export type MemberBioProps = {
  name: string;
  stageName: string;
  emoji: string;
  positions: string[];
  about: string;
  birthday: string;
  height: string;
  nation: string;
  birthName: string;
};
