import Image from "next/image";

interface MemberDetailNotFoundProps {
  message: string;
}

export default function MemberDetailNotFound({
  memberProfile,
}: {
  memberProfile: MemberDetailNotFoundProps;
}) {
  return (
    <div className="mt-20 flex flex-col items-center justify-center gap-4 text-center">
      <figure>
        <Image
          src={
            "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2NiMHc1bXRsZTJyOXloNmRnazQ0am0yaTJvYnV3Z2xpYndlOHpmeiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qiKPTZdYCppWo6g3dz/giphy.gif"
          }
          alt="GIF by GIPHY"
          width={400}
          height={400}
          loading="lazy"
        />
      </figure>
      <p className="flex justify-center gap-2 text-xl">
        Sorry, <p className="font-semibold">{memberProfile?.message} :(</p>
      </p>
    </div>
  );
}
