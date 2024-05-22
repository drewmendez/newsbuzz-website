import { Suspense } from "react";
import SearchArticles from "@/components/SearchArticles";

export default function page({
  searchParams,
}: {
  searchParams: { q: string };
}) {
  return (
    <main className="min-h-screen px-4 pb-14 pt-6">
      <div className="mx-auto max-w-[1200px]">
        <div className="max-w-[800px]">
          <h2 className="mb-10 font-heading text-xl font-semibold md:text-4xl">
            Search results for &quot;{searchParams.q}&quot;
          </h2>
          <Suspense fallback="Loading articles...">
            <SearchArticles query={searchParams.q} />
          </Suspense>
        </div>
      </div>
    </main>
  );
}
