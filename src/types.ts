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
  src: string;
  alt: string;
  counter: number;
  reactByUsers: { idUser: string; name: string }[];
};

export const baseEmojis: EmojiProps[] = [
  {
    src: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f631/512.gif",
    alt: "😱",
    counter: 1,
    reactByUsers: [
      {
        idUser: "user456",
        name: "Skrillex",
      },
    ],
  },
  {
    src: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f60d/512.gif",
    alt: "😍",
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
    src: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f970/512.gif",
    alt: "🥰",
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
    src: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f60e/512.gif",
    alt: "😎",
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
    src: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f525/512.gif",
    alt: "🔥",
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
    src: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f496/512.gif",
    alt: "💖",
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
  { label: "Profile", href: "/profiles" },
  { label: "Contents", href: "/contents" },
  { label: "Community", href: "/community" },
];