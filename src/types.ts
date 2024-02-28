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
  };
};
