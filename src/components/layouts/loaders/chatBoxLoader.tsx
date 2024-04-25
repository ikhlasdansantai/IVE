export default function ChatBoxLoader() {
  return (
    <div className="loader mt-4 space-y-6">
      {Array.from({ length: 5 }).map((_, index) => (
        <div key={index} className="chat__box flex items-start gap-4 text-left">
          <figure className="aspect-square w-10 animate-pulse rounded-full bg-slate-400"></figure>
          <div className="chat__profile w-full space-y-2">
            <h5 className="h-4 w-48 animate-pulse rounded-md bg-slate-400"></h5>
            <p className="h-6 w-full animate-pulse rounded-md bg-slate-400"></p>
          </div>
        </div>
      ))}
    </div>
  );
}
