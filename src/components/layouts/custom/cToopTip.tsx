"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import AlertDialogDemo from "./cAlertDialog";
import { useCurrentUser as UseCurrentUser } from "@/hooks/useCurrentUser";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CTooltip({
  children,
  name,
  revalidator,
}: {
  children: React.ReactNode;
  name: string;
  revalidator: any;
}) {
  const router = useRouter();
  const [votes, setVotes] = useState<null | any>();
  const handleUpdate = async () => {
    const session = await UseCurrentUser();
    // Redirect to login / register page
    if (!session) {
      alert("Please login first");
      router.push("/login");
      return;
    }

    const updateVote = await fetch("/api/profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId: session?.id, bias: name }),
    });
    const response = await updateVote.json();
    setVotes(response.data);
    alert(response.message);
    revalidator();
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <AlertDialogDemo name={name} handleUpdate={handleUpdate}>
            {children}
          </AlertDialogDemo>
        </TooltipTrigger>
        <TooltipContent>
          <p>Vote for {name}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
