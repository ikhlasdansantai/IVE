import Header from "./components/layouts/Header/Header";
// import MemberProfile from "./components/layouts/sections/MemberProfile";
import MusicVideos from "./components/layouts/sections/MusicVideos";

export default function Home() {
  // Mengambil semua store yang ada di useAppStore
  // const store = useAppStore();
  // console.log({ store });

  // Kita gunakan function selector untuk handle ini
  // const count = useAppStore((state) => state.count);
  // const increaseCount = useAppStore((state) => state.increase);

  // Kita Sederhanakan (cara lama)
  // const { count, increase } = useAppStore((state) => ({ count: state.count, increase: state.increase }), shallow);

  // Kita Sederhanakan (cara baru)
  // const { count, increase } = useAppStore(useShallow((state) => ({ count: state.count, increase: state.increase })));

  return (
    <main className="space-y-20">
      <Header />
      {/* <MemberProfile /> */}
      <MusicVideos />
    </main>
  );
}

{
  // import Header from "./components/layouts/Header/Header";
  // import Events from "./components/layouts/sections/Events";
  // import MemberProfile from "./components/layouts/sections/MemberProfile";
  // import MusicVideos from "./components/layouts/sections/MusicVideos";
  /* <MemberProfile />
      <Header />

      <MusicVideos />
      <Events />

      <div className="bg-black py-10 px-10 mx-auto">
         <p className="text-lg text-white relative z-10">
           <a href="" className="subscribe-main w-full relative mr-2">
            Subscribe
          </a> 
           for full access to read stories from National Geographics.
        </p> 
        <p className="text-xl font-semibold text-white text-center">SHOW WHAT I HAVE</p>
      </div> */
}
