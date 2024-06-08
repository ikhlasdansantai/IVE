function RightSide() {
  return (
    <div>
      <div className="write-msg">
        <div className="inputBox flex justify-normal gap-2">
          <figure className="animate-pulse  w-14 h-12 rounded-full bg-slate-200"></figure>
          <input type="text" name="text" className="animate-pulse border-2 px-2 bg-slate-200 w-full rounded-lg" />
        </div>
      </div>

      {/* Card Skeleton */}
      <div className="mt-10">
        <h2 className="animate-pulse py-8 bg-slate-200 rounded-lg"></h2>
        <div className="my-4">
          <button className="bg-slate-200 mr-auto block px-10 py-2 rounded-lg"></button>
        </div>
        <div className="animate-pulse h-4 rounded-lg w-40 bg-slate-200"></div>
      </div>

      <div className="mt-10">
        <h2 className="animate-pulse py-8 bg-slate-200 rounded-lg"></h2>
        <div className="my-4 flex gap-3">
          <button className="bg-slate-200 px-10 py-2 rounded-lg"></button>
          <button className="bg-slate-200 px-10 py-2 rounded-lg"></button>
        </div>
        <div className="animate-pulse h-4 rounded-lg w-40 bg-slate-200"></div>
      </div>

      <div className="mt-10">
        <h2 className="animate-pulse py-8 bg-slate-200 rounded-lg"></h2>
        <div className="my-4 flex gap-3">
          <button className="bg-slate-200 px-10 py-2 rounded-lg"></button>
          <button className="bg-slate-200 px-10 py-2 rounded-lg"></button>
          <button className="bg-slate-200 px-10 py-2 rounded-lg"></button>
        </div>
        <div className="animate-pulse h-4 rounded-lg w-40 bg-slate-200"></div>
      </div>
    </div>
  );
}

export default function Loading() {
  return (
    <div className="grid grid-cols-2 text-center max-w-5xl mx-auto mt-40">
      <ul className="space-y-10 text-left">
        <li className="animate-pulse py-6 max-w-[300px] bg-slate-200 rounded-sm"></li>
        <li className="animate-pulse py-6 max-w-[300px] bg-slate-200 rounded-sm"></li>
      </ul>
      <RightSide />
    </div>
  );
}
