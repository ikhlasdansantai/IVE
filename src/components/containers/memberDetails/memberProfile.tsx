type MemberProfileProps = {
  stageName: string;
  emoji: string;
  positions: string[];
};

export default function MemberProfile({
  stageName,
  emoji,
  positions,
}: MemberProfileProps) {
  return (
    <div className="mt-14">
      <h1 className="text-2xl font-semibold sm:text-5xl">
        {stageName}
        {emoji}
      </h1>
      <ul className="mt-4 flex gap-2 text-slate-400">
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
