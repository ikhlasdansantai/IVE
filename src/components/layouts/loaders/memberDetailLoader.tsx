export default function MemberDetailLoader() {
  return (
    <section>
      <h1 className="h-14 w-80 animate-pulse rounded-md bg-slate-500"></h1>
      <div className="positions mt-4 flex gap-2">
        <p className="h-4 w-14 animate-pulse rounded-md bg-slate-500"></p>
        <p className="h-4 w-14 animate-pulse rounded-md bg-slate-500"></p>
      </div>
      <div className="my-8 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
        <div className="h-[300px] animate-pulse bg-slate-500"></div>
        <div className="h-[300px] animate-pulse bg-slate-500"></div>
        <div className="h-[300px] animate-pulse bg-slate-500"></div>
      </div>

      <div className="member_bio">
        <h2 className="h-18 h-6 w-20 animate-pulse rounded-md bg-slate-500"></h2>
        <p className="mt-2 h-4 w-64 animate-pulse rounded-md bg-slate-500"></p>
        <ul className="mt-4 space-y-3">
          <li className="h-4 w-40 animate-pulse rounded-md bg-slate-500"></li>
          <li className="h-4 w-36 animate-pulse rounded-md bg-slate-500"></li>
          <li className="h-4 w-40 animate-pulse rounded-md bg-slate-500"></li>
          <li className="h-4 w-32 animate-pulse rounded-md bg-slate-500"></li>
          <li className="h-4 w-40 animate-pulse rounded-md bg-slate-500"></li>
          <li className="h-4 w-44 animate-pulse rounded-md bg-slate-500"></li>
          <li className="h-4 w-40 animate-pulse rounded-md bg-slate-500"></li>
        </ul>
      </div>

      <div className="member_bio mt-10">
        <h2 className="h-18 h-6 w-20 animate-pulse rounded-md bg-slate-500"></h2>
        <ul className="mt-4 space-y-3">
          <li className="h-4 w-40 animate-pulse rounded-md bg-slate-500"></li>
          <li className="h-4 w-36 animate-pulse rounded-md bg-slate-500"></li>
          <li className="h-4 w-40 animate-pulse rounded-md bg-slate-500"></li>
        </ul>
      </div>
    </section>
  );
}
