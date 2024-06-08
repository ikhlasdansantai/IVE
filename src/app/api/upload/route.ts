import multer from "multer";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

const storage = multer.diskStorage({
  destination: "./public/uploads",
  filename: (_, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

export async function POST(req: NextRequest) {
  const { image } = await req.json();
  //   const fields = await upload.fields(image);
  //   const imageField = fields.image[0];

  return NextResponse.json({ status: 200, data: image });
}
