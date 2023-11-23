import { NextResponse } from "next/server";

export async function GET() {
  const data = [
    {
      id: 1,
      name: "yujin",
      nickname: "Yujin 🐶",
      age: 19,
      assets: ["https://i.pinimg.com/236x/58/8f/45/588f45be0cfe080cfbb31fb029e4329d.jpg", "https://i.pinimg.com/236x/75/72/85/757285dcc36a7878e5e61ce8510d44f1.jpg", "https://i.pinimg.com/236x/fd/b2/13/fdb213030f4d71e82e0969c46b5ea978.jpg"],
    },
    {
      id: 2,
      name: "gaeul",
      nickname: "Gaeul 🦊",
      age: 19,
      assets: ["https://i.pinimg.com/564x/97/29/8f/97298f0c74bb844ca076c3960826545e.jpg", "https://i.pinimg.com/564x/dc/c0/2e/dcc02e1a116c46767a5460078fd9b01e.jpg", "https://i.pinimg.com/564x/69/cc/0f/69cc0f5dd3ca093296748998228d7966.jpg"],
    },
    {
      id: 3,
      name: "rei",
      nickname: "Rei 🐥",
      age: 19,
      assets: ["https://i.pinimg.com/564x/bc/d0/83/bcd083c947bf43a3b6d5720d3e78aa77.jpg", "https://i.pinimg.com/564x/d7/fd/31/d7fd3124a714fccf0969dca1b3097aca.jpg", "https://i.pinimg.com/564x/1b/60/11/1b601131915bacc1ef16b0338918c1e7.jpg"],
    },
    {
      id: 4,
      name: "wonyoung",
      nickname: "Wonyoung 🐰",
      age: 19,
      assets: ["https://i.pinimg.com/564x/4c/b7/4d/4cb74d7ccf79eb0805e8e38b6b3c6b92.jpg", "https://i.pinimg.com/736x/53/b3/09/53b309a1c12beedf9da4eca0267c0c70.jpg", "https://i.pinimg.com/564x/ed/88/27/ed8827824305f81fd5538c6269bf546c.jpg"],
    },
    {
      id: 5,
      name: "liz",
      nickname: "Liz 🐱",
      age: 18,
      assets: ["https://i.pinimg.com/564x/f7/13/14/f713141717b2f874dc6be0eee9e47da6.jpg", "https://i.pinimg.com/564x/e9/64/8d/e9648debaf6cc9ea43c1d30e3f156413.jpg", "https://i.pinimg.com/564x/f1/2e/eb/f12eeb7b26c38ba607a28c63a3ad7664.jpg"],
    },
    {
      id: 6,
      name: "leeseo",
      nickname: "Leeseo 🦁",
      age: 18,
      birthday: "21 February 2007",
      positions: ["Vokalis", "Penari", "Visual", "Maknae"],
      assets: ["https://i.pinimg.com/564x/28/c5/13/28c513cea7b2c55a9ef6a1bb182534c3.jpg", "https://i.pinimg.com/564x/8e/bc/31/8ebc313ed56b9dc5315ca3d015c82af9.jpg", "https://i.pinimg.com/564x/25/86/64/258664bffb2ffebedfb282eb76b22aab.jpg"],
      funFacts: [
        "Karakter MINIVE -nya adalah anak harimau, bernama ERANG-E",
        "Dia adalah model untuk SM Kids",
        "Yujin memilihnya sebagai yang paling sulit diurus karena Leeseo memiliki banyak teman dan tidak mendengarkan ketika teman-temannya ada.",
        "",
      ],
    },
  ];

  return NextResponse.json({ data });
}
// export default functi
