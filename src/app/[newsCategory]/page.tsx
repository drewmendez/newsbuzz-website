import CategoryArticles from "@/components/CategoryArticles";
import CategoryHeadline from "@/components/CategoryHeadline";

export default function NewsCategoryPage({
  params,
}: {
  params: { newsCategory: string };
}) {
  return (
    <main className="px-4 pt-6">
      <div className="mx-auto max-w-[1200px]">
        <div className="max-w-[800px]">
          <div className="mb-8 ml-4 inline-block rounded-lg border-2 border-black p-4 [box-shadow:-10px_10px_0px_3px_rgba(250,204,21,1)] sm:border-4">
            <h1 className="font-tags text-3xl font-bold uppercase sm:text-5xl">
              {params.newsCategory}
            </h1>
          </div>
          <CategoryHeadline category={params.newsCategory} />
          <p className="mt-20 font-tags text-3xl font-bold sm:text-5xl">
            More in{" "}
            <span className="uppercase text-accent">{params.newsCategory}</span>
          </p>
          <hr className="my-3 h-0.5 w-full bg-[#3B3B3B]" />
          <CategoryArticles category={params.newsCategory} />
        </div>
      </div>
    </main>
  );
}
