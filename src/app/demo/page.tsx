import { auth, signOut } from "@/auth";
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
  const session = await auth();
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
