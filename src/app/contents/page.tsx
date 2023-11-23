import Image from "next/image";
import logo from "../../assets/logo.svg";

export default function Page() {
  return (
    <div className="section__container space-y-12">
      <figure className="h-[200px] w-full bg-[#F9F3F0] text-white rounded-xl flex flex-col justify-center items-center ">
        <Image src={logo} alt="Ive Logo" width={80} height={0} className="max-w-full h-auto " loading="lazy" />
        <figcaption className="text-[#121212] font-semibold tracking-wide">Time To IVE</figcaption>
      </figure>

      <div className="contents_containers space-y-12">
        <div className="membership__contents ">
          <h2 className="text-xl font-semibold">Ive Special Clip</h2>
          <div className="membership__contents__videos grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4">
            <figure className="h-[200px] w-full bg-black rounded-lg overflow-hidden"></figure>
          </div>
        </div>
        {/* Content 2 */}
        <div className="membership__contents">
          <h2 className="text-xl font-semibold">Ive Log</h2>
          <div className="membership__contents__videos grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 mt-4 gap-8">
            <figure className="h-[200px] w-full bg-black rounded-lg overflow-hidden"></figure>
            <figure className="h-[200px] w-full bg-black rounded-lg overflow-hidden"></figure>
            <figure className="h-[200px] w-full bg-black rounded-lg overflow-hidden"></figure>
            <figure className="h-[200px] w-full bg-black rounded-lg overflow-hidden"></figure>
          </div>
        </div>
        {/* Content 3 */}
        <div className="membership__contents">
          <h2 className="text-xl font-semibold">Dance Practice</h2>
          <div className="membership__contents__videos grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4 gap-8">
            <figure className="h-[200px] w-full bg-black rounded-lg overflow-hidden"></figure>
            <figure className="h-[200px] w-full bg-black rounded-lg overflow-hidden"></figure>
            <figure className="h-[200px] w-full bg-black rounded-lg overflow-hidden"></figure>
            <figure className="h-[200px] w-full bg-black rounded-lg overflow-hidden"></figure>
          </div>
        </div>
      </div>
    </div>
  );
}
