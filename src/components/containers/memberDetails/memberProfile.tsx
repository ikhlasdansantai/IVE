import { MemberProfileDetailProps } from "@/types";

export default function MemberProfile({
  stageName,
  emoji,
  positions,
}: MemberProfileDetailProps) {
  return (
    <div className="mt-8 md:mt-14">
      <h1 className="text-2xl font-semibold sm:text-5xl">
        {stageName}
        {emoji}
      </h1>
      <ul className="mt-1 flex gap-2 text-slate-400 md:mt-4">
        {positions?.map((data: string, index: number) => (
          <li key={index}>
            {data}
            {data !== positions[positions.length - 1] ? "," : "."}
          </li>
        ))}
      </ul>
    </div>
  );
}
