export default function Loading() {
  return (
    <section className="member__profile__container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i}>
          <div key={i} className="animate-pulse aspect-[3/4] h-[412px] bg-gray-300"></div>
          <div className="flex items-center justify-between mt-2">
            <div>
              <p className="animate-pulse bg-gray-300 w-20 h-6"></p>
              <p className="animate-pulse bg-gray-300 w-40 h-6 mt-2"></p>
            </div>
            <div className="animate-pulse bg-gray-300 w-16 h-16 mt-2"></div>
          </div>
        </div>
      ))}
    </section>
  );
}
