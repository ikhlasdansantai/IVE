"use client";

import { useState } from "react";

export default function ContentDetail({ title, desc }: any) {
  const [showContent, setShowContent] = useState(false);
  return (
    <div className="content__detail mt-8">
      <h1 className="text-3xl text-[#121212]">{title}</h1>
      <span className="block text-xs mt-2">10 Hari Yang Lalu</span>

      {showContent ? (
        <ShowContentDetail desc={desc} setState={setShowContent} />
      ) : (
        <button onClick={() => setShowContent(true)} className="mt-4 underline text-gray-700 font-semibold">
          Show More
        </button>
      )}
    </div>
  );
}

function ShowContentDetail({ setState, desc }: any) {
  return (
    <div className="mt-6">
      <p>{desc}</p>

      <button onClick={() => setState(false)} className="mt-4 underline text-gray-700 font-semibold">
        Show Less
      </button>
    </div>
  );
}
