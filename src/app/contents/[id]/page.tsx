import ContentDetail from "@/app/components/containers/content-detail-section/content-detail";
import { notFound } from "next/navigation";
require("dotenv").config();

export const dynamicParams = true;
const key = process.env.SECRET_KEY;

export async function generateStaticParams() {
  const getData = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?playlistId=PLPhtNKiHTFyrqcqn1itKo8EoPDw4L0PhQ&channelId=UC-Fnix71vRP64WXeo0ikd0Q&key=${key}&part=snippet&order=date&maxResults=42`);

  const data = await getData.json();

  return data.items.map((dat: any) => ({
    id: dat.snippet?.resourceId?.videoId,
  }));
}

async function getContentDetail(id: string) {
  const getData = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?key=${key}&part=snippet&id=${id}`, {
    next: {
      revalidate: 60,
    },
  });
  const data = await getData.json();

  if (!getData.ok) {
    notFound();
  }

  if (data.items && data.items.length > 0 && data.items[0].id === id) {
    return data;
  } else {
    notFound();
  }
}

export default async function Page({ params }: any) {
  const data = await getContentDetail(params.id);
  return (
    <div className="section__container border-4">
      {data.items.map((data: any, index: number) => (
        <div key={index}>
          <div className="video__player">
            <iframe src={`https://www.youtube.com/embed/${data.id}`} className="border-4 w-full aspect-video"></iframe>
          </div>
          <ContentDetail title={data.snippet.title} desc={data.snippet.description} />
        </div>
      ))}
    </div>
  );
}
