import SectionHeader from "../section-header/SectionHeader";
import MusicVideosLayout from "../../containers/music-videos-section/musicVideosLayout";
import { Suspense } from "react";
import Loading from "@/app/loading";
import { useVideoStore } from "@/store/videoStore";

require("dotenv").config();
const getMusicVideos = async () => {
  // ORI https://www.googleapis.com/youtube/v3/playlistItems?playlistId=PLPhtNKiHTFyrqcqn1itKo8EoPDw4L0PhQ&channelId=UC-Fnix71vRP64WXeo0ikd0Q&key=rahasiaBoy&part=snippet&order=date&maxResults=42
  await new Promise((res) => setTimeout(res, 4000));
  const key = process.env.SECRET_KEY;
  const data = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?playlistId=PLPhtNKiHTFyrqcqn1itKo8EoPDw4L0PhQ&channelId=UC-Fnix71vRP64WXeo0ikd0Q&key=${key}&part=snippet&order=date&maxResults=42`);

  if (!data) console.log("Server Error");
  return data.json();
};

export default async function MusicVideos() {
  const setKey = useVideoStore.getState().addApiKey;
  const setApi = useVideoStore.getState().fetchingVideos;

  const key = process.env.SECRET_KEY;
  await setKey(key);

  const getKey = useVideoStore.getState().ApiKey;
  await setApi(`https://www.googleapis.com/youtube/v3/playlistItems?playlistId=PLPhtNKiHTFyrqcqn1itKo8EoPDw4L0PhQ&channelId=UC-Fnix71vRP64WXeo0ikd0Q&key=${getKey}&part=snippet&order=date&maxResults=42`);

  const getVideos = useVideoStore.getState().videos;

  return (
    <main className="section__container">
      <SectionHeader title="Music videos" link="kosong" />
      <Suspense fallback={<Loading />}>
        <MusicVideosLayout videos={getVideos} />
      </Suspense>
    </main>
  );
}
