import MemberProfile from "@/components/layouts/sections/MemberProfile";
import VoteMember from "@/components/common/voteMember/page";

export default function IveMemberProfilesPage() {
  return (
    <main className="mx-auto mt-32 max-w-7xl p-4">
      <MemberProfile />
      <VoteMember />
    </main>
  );
}
