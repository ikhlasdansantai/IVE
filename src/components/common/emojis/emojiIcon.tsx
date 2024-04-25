"use client";

export default function EmojiIcon({
  emojiCode,
  alt,
  total,
  onClick,
}: {
  emojiCode: string;
  alt: string;
  total?: number;
  onClick?: any;
}) {
  // function handleClickEmoji({
  //   alt,
  //   emojiCode,
  // }: {
  //   alt: string;
  //   emojiCode: string;
  // }) {
  //   console.log("emojiIcon", alt);
  //   console.log("emojiUnicode", emojiCode);

  //   // const findEmoji = baseEmojis.find((emoji) => emoji.alt === alt);
  //   // const existingUser = findEmoji?.reactByUsers.find(
  //   //   (user) => user.idUser === "user123",
  //   // );
  //   // if (existingUser) return alert("Kamu sudah nge react emojinya!");
  //   // if (findEmoji) {
  //   //   findEmoji.counter = findEmoji.counter + 1;
  //   //   findEmoji.reactByUsers.push({
  //   //     idUser: "user123",
  //   //     name: "Ikhsan Ganteng",
  //   //   });
  //   //   alert(findEmoji.counter);
  //   //   console.log("user yang berhasil react emoji", findEmoji?.reactByUsers);
  //   // }
  // }
  return (
    <figure
      onClick={onClick}
      className="inline-flex cursor-pointer items-center gap-1 rounded-xl bg-[#f0f0f0] px-3 py-1"
    >
      <img
        src={`https://fonts.gstatic.com/s/e/notoemoji/latest/${emojiCode}/512.gif`}
        alt={alt}
        className="block h-auto w-6"
      />

      {total && (
        <figcaption className="text-base text-[#151515]">{total}</figcaption>
      )}
    </figure>
  );
}
