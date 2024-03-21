"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import AlertDialogDemo from "./cAlertDialog";
import classNames from "classnames";
import { Button } from "@/components/ui/button";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { useEffect, useState } from "react";
import { getVoteDatas } from "@/actions/demoVote";

export default function CTooltip({
  children,
  name,
  revalidator,
}: {
  children: React.ReactNode;
  name: string;
  revalidator: any;
}) {
  const [votes, setVotes] = useState<null | any>();
  const [bias, setBias] = useState<any>();
  const handleUpdate = async () => {
    const session = await useCurrentUser();
    // Redirect to login / register page
    if (!session) return alert("Please login first");

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

  // Demo
  useEffect(() => {
    const coba = async () => {
      const session = await useCurrentUser();
      console.log(session);

      if (session) {
        const results = await getVoteDatas({ id: session?.id });
        setBias(results);
        console.log("client", results);
      }
    };
    coba();
  }, [votes]);

  const temp = bias && bias.find((bias: any) => bias.name === name);

  if (bias) {
    console.log("bias", bias);
    console.log("name", name);
    console.log("res", temp);
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <AlertDialogDemo name={name} handleUpdate={handleUpdate}>
            <Button
              id="vote__btn"
              variant="outline"
              className={classNames({
                "flex items-center gap-2 ": true,
                "bg-emerald-300 hover:bg-emerald-200 focus:bg-emerald-200":
                  temp,
              })}
            >
              {children}
            </Button>
          </AlertDialogDemo>
        </TooltipTrigger>
        <TooltipContent>
          <p>Vote For {name}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
