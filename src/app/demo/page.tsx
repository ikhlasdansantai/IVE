// import { auth, signOut } from "@/auth";
import { BugIcon, Home, Settings, Trophy } from "lucide-react";

function HeaderUserDashboard() {
  return (
    <section className="flex flex-col items-center justify-center p-4 text-center">
      <div className="h-40 w-40 overflow-hidden rounded-xl bg-black"></div>
      <div className="user__info mb-8 mt-4 space-y-1">
        <h5 className="text-xl font-bold">Ikhlasdansantai</h5>
        <p>ikhsan@ganteng.com</p>
      </div>

      <ul className="space-y-8">
        <li className="flex cursor-pointer items-center gap-7 text-pink-500">
          <Home /> Dashboard
        </li>
        <li className="flex cursor-pointer items-center gap-7">
          <Trophy /> My Rewards
        </li>
        <li className="flex cursor-pointer items-center gap-7">
          <BugIcon /> Bug Report
        </li>
        <li className="flex cursor-pointer items-center gap-7">
          <Settings /> Settings
        </li>
      </ul>
    </section>
  );
}

export default async function DemoPage() {
  // const session = await auth();
  return (
    <main
      className="mt-10 grid min-h-[100dvh] w-full grid-cols-4"
      style={{
        gridTemplateColumns:
          "minmax(200px, 20rem) minmax(0, 1fr) minmax(0, 1fr) minmax(200px, 20rem)",
      }}
    >
      <div className="grid__1 col-start-1 col-end-1 flex max-w-xs flex-col items-center justify-between">
        <HeaderUserDashboard />
        <div className="mb-[10dvh] block h-20 w-20 overflow-hidden rounded-xl bg-black"></div>
      </div>
      <div className="grid__2 col-start-2 col-end-4 border-l border-r px-8">
        <b className="text-2xl">Hello Ikhsan ganteng</b>
        <p>Congratulations, Youre now officialy become a member</p>

        <div className="grid__again__cols__2 grid grid-cols-2">
          <div className="col-start-1">
            <h5>Your Bias</h5>
            <div className="cards flex gap-4">
              <figure className="h-20 w-20 rounded-xl bg-gray-600"></figure>
              <figure className="h-20 w-20 rounded-xl bg-gray-600"></figure>
              <figure className="h-20 w-20 rounded-xl bg-gray-600"></figure>
            </div>
          </div>
        </div>
      </div>
      <div className="grid__3 col-start-4">
        <h2 className="text-center text-xl font-semibold">
          Information And Updates!
        </h2>
      </div>
    </main>
  );
}

// import { Box, Button, Container } from "@mui/material";
// import { CldImage, CldUploadButton, CloudinaryUploadWidgetResults, CldUploadEventCallback, CldUploadButtonProps } from "next-cloudinary";
// import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
// import styles from "./page.module.css";
import { useState } from "react";

// export default function UploadImage() {
//   const [imageUrl, setImageUrl] = useState<string | undefined>();
//   const [publicId, setPublicId] = useState("");

//   const handleSubmit = (results: CloudinaryUploadWidgetResults) => {
//     console.log(results);
//     console.log({ results });

//     const info = results.info as object;

//     if ("secure_url" in info && "public_id" in info) {
//       const url = info.secure_url as string;
//       const public_id = info.public_id as string;
//       setImageUrl(url);

//       console.log({ url });
//       console.log({ public_id });
//     }
//   };

//   const handleRemoveImg = (e: React.FormEvent) => {
//     e.preventDefault();
//   };

//   return (
//     <Container
//       component="main"
//       maxWidth="xl"
//       sx={{ marginTop: 26, marginInline: "auto" }}
//     >
//       <CldUploadButton
//         uploadPreset="raih1xf1"
//         className={styles.upload__profile__button}
//         onSuccess={handleSubmit}
//         options={{
//           sources: ["local"],
//           multiple: false,
//           maxFiles: 1,
//         }}
//       >
//         <>
//           {imageUrl !== undefined ? (
//             <CldImage
//               alt="apa ini ya"
//               src={imageUrl} // Use this sample image or upload your own via the Media Explorer
//               // width="500" // Transform the image: auto-crop to square aspect_ratio
//               // height="500"
//               fill
//               crop={{
//                 type: "auto",
//                 source: true,
//               }}
//               style={{ marginTop: "2rem" }}
//             />
//           ) : (
//             <Box component="figure">
//               <AddPhotoAlternateOutlinedIcon />
//             </Box>
//           )}
//         </>
//       </CldUploadButton>

//       {publicId && <Button>Delete Profile</Button>}
//     </Container>
//   );
// }

// Used Later
{
  /* <pre>{JSON.stringify(session)}</pre>
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <button>SignOut</button>
        </form> */
}
