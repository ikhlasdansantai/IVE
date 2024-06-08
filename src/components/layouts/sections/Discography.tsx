import Image from "next/image";
import tripleIve from "/public/albums/after_like.png";
import waveIve from "/public/albums/eleven.png";
import loveDive from "/public/albums/love_dive.png";
import mine from "/public/albums/mine.png";

const albums = [tripleIve, waveIve, loveDive, mine];
export default function Discography() {
  return (
    <section className="mx-auto mt-20 max-w-7xl p-4">
      <h2 className="text-3xl lg:text-4xl">Discography</h2>
      <div className="albums__container mt-10 grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {albums.map((album, index) => (
          <figure key={index + 1}>
            <Image
              src={album}
              alt="Ive Album"
              width={350}
              height={350}
              className="block aspect-square max-w-full object-cover"
            />
          </figure>
        ))}
      </div>
    </section>
  );
}
