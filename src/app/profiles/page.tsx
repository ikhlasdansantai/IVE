import MemberProfile from "@/components/layouts/sections/MemberProfile";
import VoteMember from "@/components/common/voteMember/page";

export default function IveMemberProfilesPage() {
  return (
    <main className="md:mt-30 mx-auto mt-24 max-w-7xl p-4">
      <MemberProfile />
      <VoteMember />
    </main>
  );
}
