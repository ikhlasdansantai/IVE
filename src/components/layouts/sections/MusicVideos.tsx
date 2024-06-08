import SectionHeader from "../section-header/SectionHeader";
import MusicVideosLayout from "../../containers/music-videos-section/musicVideosLayout";
import { Suspense } from "react";
import Loading from "@/app/loading";
import { getYoutubeApi } from "@/lib/apiLibs";

require("dotenv").config();
export default async function MusicVideos() {
  const getVideos = await getYoutubeApi(
    `https://www.googleapis.com/youtube/v3/playlistItems`,
    `playlistId=PLPhtNKiHTFyrqcqn1itKo8EoPDw4L0PhQ&channelId=UC-Fnix71vRP64WXeo0ikd0Q&part=snippet&order=date&maxResults=9`,
  );
  return (
    <main className="section__container">
      <SectionHeader title="Music videos" link="/contents" />
      <Suspense fallback={<Loading />}>
        <MusicVideosLayout videos={getVideos.items} />
      </Suspense>
    </main>
  );
}
