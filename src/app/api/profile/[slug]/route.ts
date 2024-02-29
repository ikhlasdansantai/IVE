import { db } from "@/lib/prisma";

export async function GET(
  req: Request,
  { params }: { params: { slug: string } },
) {
  const slug = params.slug;
  const getMemberProfile = await db.iveMemberProfile.findFirst({
    where: { name: slug[0].toUpperCase() + slug.slice(1) },
    include: {
      assets: { select: { detailProfileImages: true } },
    },
  });

  if (!getMemberProfile)
    return Response.json({ message: "Member not found", status: 404 });

  return Response.json({
    message: "Success",
    status: 200,
    slug: slug[0].toUpperCase() + slug.slice(1),
    data: getMemberProfile,
  });
}
