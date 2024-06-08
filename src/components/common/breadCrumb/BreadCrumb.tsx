import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";

interface BreadCrumbProps {
  path: { label: string; href: string }[];
}

export default function BreadCrumb({ path }: BreadCrumbProps) {
  if (!path) return <p>Loading...</p>;

  return (
    <section className="flex">
      <ol className="inline-flex items-center space-x-1 rtl:space-x-reverse md:space-x-2">
        <li className="inline-flex items-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
          >
            <Home /> Home
          </Link>
        </li>

        {path
          .slice(0, path.length - 1)
          .map(({ label, href }: { label: string; href: string }) => (
            <li key={label}>
              <div className="flex items-center">
                <ChevronRight color="rgb(156 163 175)" className="text-sm" />
                <Link
                  href={href}
                  className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white md:ms-2"
                >
                  {label}
                </Link>
              </div>
            </li>
          ))}
        <li aria-current="page">
          <div className="flex items-center">
            <ChevronRight color="rgb(156 163 175)" className="text-sm" />
            <span className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400 md:ms-2">
              {path.slice(path.length - 1)[0]?.label}
            </span>
          </div>
        </li>
      </ol>
    </section>
  );
}
