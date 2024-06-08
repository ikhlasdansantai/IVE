import { MemberBioProps } from "@/types";

export default function MemberBio({
  name,
  positions,
  about,
  birthday,
  height,
  nation,
  birthName,
}: MemberBioProps) {
  return (
    <div className="member_bio">
      <h2 className="text-2xl">About</h2>
      <p className="mt-2">{about}</p>
      <ul className="mt-6 space-y-3">
        <li className="border-l-4 border-red-900 pl-2">
          Stage name: {name}
        </li>
        <li className="border-l-4 border-red-900 pl-2">
          BirthName: {birthName}
        </li>
        <li className="border-l-4 border-red-900 pl-2">
          Positions: {positions[0]}
        </li>
        <li className="border-l-4 border-red-900 pl-2">
          Birthday: {birthday}
        </li>
        <li className="border-l-4 border-red-900 pl-2">Nationality: {nation}</li>
        <li className="border-l-4 border-red-900 pl-2">Zodiak: Pisces</li>
        <li className="border-l-4 border-red-900 pl-2">Height: {height}cm</li>
      </ul>
    </div>
  );
}
