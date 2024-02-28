import Image from "next/image";

import Liz from "../../../../assets/members/liz.jpg";
import Leeseo from "../../../../assets/members/leeseo.jpg";
import Gaeul from "../../../../assets/members/gaeul.jpg";
import Rei from "../../../../assets/members/rei.jpg";
import Wonyoung from "../../../../assets/members/wonyoung.jpg";
import Yujin from "../../../../assets/members/yujin.jpg";
import { Suspense } from "react";
import Loading from "@/app/loading";

// const members = [
//   {
//     name: "Yujin",
//     age: 19,
//     image: Yujin,
//   },
//   {
//     name: "Gaeul",
//     age: 19,
//     image: Gaeul,
//   },
//   {
//     name: "Rei",
//     age: 19,
//     image: Rei,
//   },
//   {
//     name: "Wonyoung",
//     age: 19,
//     image: Wonyoung,
//   },
//   {
//     name: "Liz",
//     age: 18,
//     image: Liz,
//   },
//   {
//     name: "Leeseo",
//     age: 19,
//     image: Leeseo,
//   },
// ];
const members = [{ image: Yujin }, { image: Gaeul }, { image: Rei }, { image: Wonyoung }, { image: Liz }, { image: Leeseo }];

export default function MemberProfile() {
  return (
    <div className="section__container text-center py-20 px-4">
      <h2 className="text-3xl lg:text-4xl">Member's Profile</h2>
      <div className="member__profile__container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
        <Suspense fallback={<Loading />}>
          {members.map((member, index) => {
            return (
              <div key={index} className="">
                <figure className="w-full h-[500px] border-4 ">
                  <Image src={member.image} alt={`${member.image} img`} width={400} height={100} quality={10} placeholder="blur" loading="lazy" className="max-w-full h-auto" />
                </figure>
                {/* <span className="block py-3 bg-white text-black absolute left-0 right-0 bottom-0 z-10 transition duration-500 translate-y-[100%] text-lg group-hover:translate-y-[0]">{member.name}</span> */}
              </div>
            );
          })}
        </Suspense>
      </div>
    </div>
  );
}
