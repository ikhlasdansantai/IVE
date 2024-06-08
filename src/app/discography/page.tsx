import Image from "next/image";
import loveDive from "/public/albums/love_dive.png";
import { Play } from "lucide-react";
export default function Page() {
  return (
    <main className="mt-40 min-h-[100dvh] p-4">
      <section className="grid grid-cols-2 gap-20">
        <figure>
          <Image src={loveDive} alt="love dive album" objectFit="contain" />
        </figure>
        <div>
          <figure className="flex items-center gap-2">
            <Play size={32} />
            <figcaption className="text-2xl font-semibold">
              love dive Tracklist
            </figcaption>
          </figure>
          <div className="chats h-[30dvh] space-y-4 overflow-y-scroll border p-4 md:h-96">
            <p className="mt-4 text-sm text-gray-400">No Chats Yet</p>
          </div>
        </div>
      </section>
    </main>
  );
}
