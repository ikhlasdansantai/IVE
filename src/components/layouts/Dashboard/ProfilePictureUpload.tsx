import {
  CldUploadButton,
  CloudinaryUploadWidgetResults,
  CloudinaryUploadWidgetInfo,
  CldImage,
} from "next-cloudinary";
import { Pen, ImagePlus } from "lucide-react";
import { useSession } from "next-auth/react";
import { toast } from "react-hot-toast";

export default function ProfilePictureUpload({
  state,
  setState,
}: {
  state: any;
  setState: any;
}) {
  const { update } = useSession();
  const session = useSession();
  const { id } = session?.data?.user || {};

  async function handleSubmit(results: CloudinaryUploadWidgetResults) {
    const info = results.info as CloudinaryUploadWidgetInfo;

    try {
      const updateImageUser = await fetch("/api/user", {
        method: "PUT",
        body: JSON.stringify({
          userId: id,
          image: info?.secure_url,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (updateImageUser.ok) {
        const response = await updateImageUser.json();
        if (response.status === 404) return toast.error(response.message);
        else {
          setState(info?.secure_url as string);
          update();
          toast.success(response.message);
        }
      }
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <CldUploadButton
      uploadPreset="raih1xf1"
      onSuccess={handleSubmit}
      options={{
        sources: ["local"],
        multiple: false,
        maxFiles: 1,
        maxFileSize: 1048576,
        clientAllowedFormats: ["jpg", "jpeg", "png"],
      }}
      onError={(error) => {
        toast.error("Upload failed: " + error);
      }}
    >
      {state !== undefined ? (
        <figure className="relative">
          <Pen
            className="absolute -right-[1px] -top-[1px] z-10 cursor-pointer bg-white p-2"
            size={34}
          />
          <CldImage
            alt="apa ini ya"
            className="rounded-md"
            src={state}
            crop={{
              type: "auto",
              source: true,
            }}
            style={{ maxWidth: "100%", height: "auto" }}
            width={300}
            height={300}
          />
        </figure>
      ) : (
        <div className="flex h-64 w-64 items-center justify-center rounded-md border bg-slate-100">
          <ImagePlus size={32} />
        </div>
      )}
    </CldUploadButton>
  );
}
