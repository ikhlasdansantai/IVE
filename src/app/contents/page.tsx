import Image from "next/image";
import logo from "../../assets/logo.svg";
import { getYoutubeApi } from "@/lib/apiLibs";
import Link from "next/link";

async function DataList({ api, title }: any) {
  return (
    <main>
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="membership__contents__videos mt-4 grid grid-cols-1 gap-8  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {api?.map(({ snippet }: any) => (
          <Link
            key={snippet?.id?.resourceId?.videoId}
            href={`/contents/${snippet?.resourceId?.videoId}`}
          >
            <figure className="overflow-hidden">
              <Image
                src={snippet?.thumbnails?.high?.url}
                alt="Ini Gambar"
                width={400}
                height={400}
                className="block aspect-[16/9] object-cover"
              />
            </figure>
            <h2>{snippet?.title}</h2>
          </Link>
        ))}
      </div>
    </main>
  );
}

export default async function Page() {
  const mvVideos = await getYoutubeApi(
    "https://www.googleapis.com/youtube/v3/playlistItems",
    "playlistId=PLPhtNKiHTFyrqcqn1itKo8EoPDw4L0PhQ&channelId=UC-Fnix71vRP64WXeo0ikd0Q&part=snippet&order=date&maxResults=11",
  );
  const specialClip = await getYoutubeApi(
    `https://www.googleapis.com/youtube/v3/playlistItems`,
    `playlistId=PLPhtNKiHTFyqMMl8NXyBWJzyZ-qRB7bCw&channelId=UC-Fnix71vRP64WXeo0ikd0Q&part=snippet&order=date&maxResults=11`,
  );
  const iveLog = await getYoutubeApi(
    `https://www.googleapis.com/youtube/v3/playlistItems`,
    `playlistId=PLPhtNKiHTFyojdj9Vh58iGG2NEYxMMx1P&channelId=UC-Fnix71vRP64WXeo0ikd0Q&part=snippet&order=date&maxResults=11`,
  );
  const dancePractice = await getYoutubeApi(
    `https://www.googleapis.com/youtube/v3/playlistItems`,
    `playlistId=PLPhtNKiHTFyr-iGUGeQ4bgQmrwl95EenR&channelId=UC-Fnix71vRP64WXeo0ikd0Q&part=snippet&order=date&maxResults=11`,
  );

  return (
    <section className="section__container mt-32 space-y-12">
      <figure className="flex h-[200px] w-full flex-col items-center justify-center rounded-xl bg-[#F9F3F0] text-white ">
        <Image
          src={logo}
          alt="Ive Logo"
          width={80}
          height={0}
          className="h-auto max-w-full "
          loading="lazy"
        />
        <figcaption className="font-semibold tracking-wide text-[#121212]">
          Time To IVE
        </figcaption>
      </figure>

      <div className="contents_containers space-y-12">
        <div className="membership__contents ">
          <DataList api={mvVideos?.items} title={"MV"} />
        </div>
        <div className="membership__contents ">
          <DataList api={specialClip?.items} title={"Special Video"} />
        </div>
        <div className="membership__contents">
          <DataList api={iveLog?.items} title={"IVE Log"} />
        </div>
        <div className="membership__contents">
          <DataList api={dancePractice?.items} title={"Dance Practice"} />
        </div>
      </div>
    </section>
  );
}
