import { getMemberProfiles } from "@/actions/getMemberProfiles";
import Header from "@/components/layouts/Header/headerContents";
import Discography from "@/components/layouts/sections/Discography";
import MusicVideos from "@/components/layouts/sections/MusicVideos";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

export default async function Home() {
  const memberProfiles = await getMemberProfiles();

  return (
    <main className="mb-20 mt-10 min-h-[100dvh] space-y-20 md:mt-0">
      <Header />
      <StickyScroll content={memberProfiles} />
      <MusicVideos />
      <Discography />
    </main>
  );
}
