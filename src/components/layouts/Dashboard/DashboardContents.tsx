"use client";

import { useEffect, useState } from "react";
import ProfilePictureUpload from "./ProfilePictureUpload";
import ProfileDetails from "./ProfileDetails";
import { useSession } from "next-auth/react";

export default function DashboardContents() {
  const [imageUrl, setImageUrl] = useState<string | undefined>();
  const session = useSession();
  const { image } = session?.data?.user || {};

  useEffect(() => {
    if (image !== null) setImageUrl(image);
  }, []);

  return (
    <>
      <ProfilePictureUpload state={imageUrl} setState={setImageUrl} />
      <ProfileDetails data={session} />
    </>
  );
}
