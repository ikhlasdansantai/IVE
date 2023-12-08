import { NextResponse } from "next/server";

export async function GET() {
  type dataProps = {
    id: number;
    id_user: number;
    id_post: number;
    username: string;
    comment: string;
    tags: string[];
    created_at: string;
  };
  const data: dataProps[] = [
    {
      id: 1,
      id_user: 1,
      id_post: 1,
      username: "ahn yujin",
      comment: "Wonyoung adalah sahabat saya sejak masih di group izone, aku cinta dia💗",
      tags: ["wonyoung", "liz", "leeseo"],
      created_at: "2023-12-06T12:00:00Z",
    },
    {
      id: 2,
      id_user: 2,
      id_post: 2,
      username: "Bibibi",
      comment: "IVE is awesome",
      tags: ["Rei", "leeseo"],
      created_at: "2023-12-06T12:00:00Z",
    },
    {
      id: 3,
      id_user: 3,
      id_post: 3,
      username: "Chaewon",
      comment: "IVE adalah salah satu pembuat musik terbaik yang pernah saya dengar",
      tags: ["Ahn Yujin", "Gaeul"],
      created_at: "2023-12-06T12:00:00Z",
    },
  ];

  return NextResponse.json({ status: 200, message: "Success", data });
}
