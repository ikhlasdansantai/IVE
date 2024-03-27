"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import AlertDialogDemo from "./cAlertDialog";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { useState } from "react";

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

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <AlertDialogDemo name={name} handleUpdate={handleUpdate}>
            {children}
            {/* <Tunggu /> */}
            {/* <Button
              id="vote__btn"
              variant="outline"
              className={classNames({
                "flex items-center gap-2": true,
                "bg-emerald-300 hover:bg-emerald-200 focus:bg-emerald-200":
                  bias && bias.find((biasItem: any) => biasItem.name === name),
              })}
            >
            </Button> */}
          </AlertDialogDemo>
        </TooltipTrigger>
        <TooltipContent>
          <p>Vote for {name}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
    // <TooltipProvider>
    //   <Tooltip>
    //     <TooltipTrigger asChild>
    //       <AlertDialogDemo name={name} handleUpdate={handleUpdate}>
    //         {/* {bias && bias.find((biasItem: any) => biasItem.name === name) ? (
    //           <Button
    //             id="vote__btn"
    //             variant="outline"
    //             className={classNames({
    //               "flex items-center gap-2 bg-emerald-300 hover:bg-emerald-200 focus:bg-emerald-200":
    //                 true,
    //             })}
    //           >
    //             {children}
    //           </Button>
    //         ) : (
    //           <Button
    //             id="vote__btn"
    //             variant="outline"
    //             className={classNames({
    //               "flex items-center gap-2": true,
    //               "bg-emerald-300 hover:bg-emerald-200 focus:bg-emerald-200":
    //                 bias &&
    //                 bias.find((biasItem: any) => biasItem.name === name),
    //             })}
    //           >
    //             {children}
    //           </Button>
    //         )} */}
    //         <Button>{children}</Button>
    //       </AlertDialogDemo>
    //     </TooltipTrigger>
    //     <TooltipContent>
    //       <p>Vote For {name}</p>
    //     </TooltipContent>
    //   </Tooltip>
    // </TooltipProvider>
  );
}
