import ImageDev from "@/app/member/[name]/ImageDev";

export default function MemberAssets({
  assets,
}: {
  assets: { detailProfileImages: string[] };
}) {
  return (
    <div className="image__profile my-8 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
      {assets?.detailProfileImages.map((image: string, index: number) => {
        return (
          <div key={index} className="relative w-full overflow-hidden">
            <ImageDev src={image} />
          </div>
        );
      })}
    </div>
  );
}
