import { ChevronDown } from "lucide-react";

export default function Comment() {
  return (
    <div className="flex flex-col items-start col-start-1 col-end-3 justify-center p-4 rounded bg-gray-50 dark:bg-gray-800">
      <h2 className="text-2xl font-semibold">Comment History 🤞</h2>
      <div className="cards">
        <ul role="list" className="flex flex-col divide-y divide-gray-200 dark:divide-gray-700 mt-10">
          <li className="py-3 sm:py-4">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Neil image" />
              </div>
              <div className="flex-1 min-w-0 ms-4">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">ikhlasdansantai</p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">siganteng@co.com</p>
              </div>
            </div>
            <p className="mt-4">
              Hello <span className="text-blue-600">@designteam</span> Let's schedule a kick-off meeting and workshop this week. It would be great to gather everyone involved in the design project. Let me know about your availability in the
              thread. Looking forward to it! Thanks.
            </p>
            {/* Cek If Comments Contain Replies */}
            <div className="flex gap-1 mt-4 text-blue-600">
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
