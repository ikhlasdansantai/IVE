type MemberBioProps = {
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
          Nama Panggung: {name}
        </li>
        <li className="border-l-4 border-red-900 pl-2">
          Nama Lahir: {birthName}
        </li>
        <li className="border-l-4 border-red-900 pl-2">
          Posisi: {positions[0]}
        </li>
        <li className="border-l-4 border-red-900 pl-2">
          Ulang Tahun: {birthday}
        </li>
        <li className="border-l-4 border-red-900 pl-2">Kebangsaan: {nation}</li>
        <li className="border-l-4 border-red-900 pl-2">Zodiak: Pisces</li>
        <li className="border-l-4 border-red-900 pl-2">Tinggi: {height}cm</li>
      </ul>
    </div>
  );
}
