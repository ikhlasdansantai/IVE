"use client";

import { getVoteDatas } from "@/actions/getVoteDatas";
import CTooltip from "@/components/layouts/custom/cToopTip";
import { Button } from "@/components/ui/button";
import { useCurrentUser as UseCurrentUser } from "@/hooks/useCurrentUser";
import classNames from "classnames";
import { useEffect, useState } from "react";

type Bias = {
  name: string | any;
};

export default function VoteMember() {
  const [memberEmoji, setMemberEmoji] = useState<null | any>();
  const [bias, setBias] = useState<null | Bias[]>();

  const getMemberEmoji = async () => {
    try {
      const response = await fetch("/api/profile", { method: "GET" });
      if (response.ok) {
        const results = await response.json();
        setMemberEmoji(results?.data);
      } else {
        console.log("Server internal error");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const getMemberBias = async () => {
    const session = await UseCurrentUser();

    if (session) {
      const results = await getVoteDatas({ id: session?.id });
      setBias(results);
    }
  };

  useEffect(() => {
    getMemberEmoji();
  }, []);

  useEffect(() => {
    getMemberBias();
  }, [memberEmoji]);

  return (
    <section className="my-10">
      <h5 className="text-center text-2xl">Vote Your Bias 😎</h5>
      <div className="emojis mt-6 flex flex-wrap items-center justify-center gap-6">
        {!memberEmoji ? (
          <p>Reaction Loading...</p>
        ) : (
          <>
            {memberEmoji.map(
              ({
                emoji,
                name,
                votes,
              }: {
                emoji: string;
                name: string;
                votes: number;
              }) => (
                <CTooltip key={emoji} name={name} revalidator={getMemberEmoji}>
                  <Button
                    id="vote__btn"
                    variant="outline"
                    className={classNames({
                      "flex items-center gap-2": true,
                      "bg-emerald-300 hover:bg-emerald-200 focus:bg-emerald-200":
                        bias &&
                        bias.find((biasItem: any) => biasItem.name === name),
                    })}
                  >
                    <p>{emoji}</p>
                    <p>{votes}</p>
                  </Button>
                </CTooltip>
              ),
            )}
          </>
        )}
      </div>
    </section>
  );
}
