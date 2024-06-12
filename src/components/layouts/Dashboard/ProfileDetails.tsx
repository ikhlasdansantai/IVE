import { Button } from "@/components/ui/button";

export default function ProfileDetails({ data }: { data: any }) {
  const { name, email } = data?.data?.user;

  return (
    <div className="w-full">
      <div className="dashboard__header flex items-center justify-between">
        <h1 className="text-xl font-semibold">My Profile</h1>
        <Button variant="default" size="lg">
          Edit Profile
        </Button>
      </div>
      <ul className="mt-6 flex gap-10">
        <li className="space-y-3">
          <h5 className="font-semibold">Name</h5>
          <p>{name}</p>
        </li>
        <li className="space-y-3">
          <h5 className="font-semibold">Email</h5>
          <p>{email}</p>
        </li>
      </ul>
    </div>
  );
}
