import Headlines from "@/components/Headlines";
import TopArticles from "@/components/TopArticles";

export default function Home() {
  return (
    <main className="px-4 pt-6">
      <div className="mx-auto grid max-w-[1200px] justify-between gap-12 md:grid-cols-[300px_1fr]">
        <Headlines />
        <TopArticles />
      </div>
    </main>
  );
}
