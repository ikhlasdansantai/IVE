import ContentDetail from "@/components/containers/content-detail-section/content-detail";
import { notFound } from "next/navigation";
import ShowEmojis from "@/components/common/emojis/showEmojis";
import ContentDetailChats from "@/components/containers/content-detail-chats/page";
const key = process.env.SECRET_KEY;

async function getContentDetail(id: string) {
  const getData = await fetch(
    `https://youtube.googleapis.com/youtube/v3/videos?key=${key}&part=snippet&id=${id}`,
  );
  const data = await getData.json();
  if (!getData.ok) notFound();

  if (data.items && data.items.length > 0 && data.items[0].id === id)
    return data;
  else notFound();
}

export default async function ContentDetailPage({ params }: any) {
  const { id } = params;
  const data = await getContentDetail(id);

  return (
    <main className="mx-auto mt-[5.6rem] grid min-h-[100dvh] w-full max-w-7xl grid-cols-1 items-stretch gap-4 overflow-y-hidden p-4 max-[640px]:overflow-y-scroll md:my-40 md:grid-cols-3">
      {data.items.map((data: any, index: number) => (
        <section key={index} className="md:col-span-2">
          <iframe
            src={`https://www.youtube.com/embed/${data.id}`}
            className="aspect-video w-full overflow-hidden rounded-lg"
          ></iframe>
          <ShowEmojis />
          <ContentDetail
            title={data.snippet.title}
            desc={data.snippet.description}
          />
          {/* Live Chat For Mobile */}
          <ContentDetailChats id={id} className="mt-8 md:hidden" />
        </section>
      ))}
      <ContentDetailChats id={id} className="hidden md:block " />
    </main>
  );
}
