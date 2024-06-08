import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Comment() {
  return (
    <div className="col-start-1 col-end-3 flex flex-col items-start justify-center rounded bg-gray-50 p-4 dark:bg-gray-800">
      <h2 className="text-2xl font-semibold">Comment History</h2>
      <div className="cards">
        <ul
          role="list"
          className="mt-10 flex flex-col divide-y divide-gray-200 dark:divide-gray-700"
        >
          <li className="py-3 sm:py-4">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Image
                  className="h-8 w-8 rounded-full"
                  src="/docs/images/people/profile-picture-1.jpg"
                  alt="Neil image"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <div className="ms-4 min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                  ikhlasdansantai
                </p>
                <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                  siganteng@co.com
                </p>
              </div>
            </div>
            <p className="mt-4">
              Hello <span className="text-blue-600">@designteam</span> Lets
              schedule a kick-off meeting and workshop this week. It would be
              great to gather everyone involved in the design project. Let me
              know about your availability in the thread. Looking forward to it!
              Thanks.
            </p>
            {/* Cek If Comments Contain Replies */}
            <div className="mt-4 flex gap-1 text-blue-600">
              <span>4 Replies</span>
              <ChevronDown />
            </div>
          </li>
        </ul>
      </div>
      <p className="text-2xl text-gray-400 dark:text-gray-500"></p>
    </div>
  );
}
