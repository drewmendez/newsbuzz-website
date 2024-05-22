import { ApiData } from "@/types/apiData";
import { Article } from "@/types/article";
import Link from "next/link";

export default async function CategoryArticles({ query }: { query: string }) {
  const res = await fetch(
    `https://newsapi.org/v2/everything?q=${query}&apiKey=${process.env.API_KEY}`,
    {
      next: { revalidate: 86400 }, // data cached for 24 hours
    },
  );
  const data: ApiData = await res.json();
  const articles = data.articles.filter(
    (article) => article.urlToImage !== null,
  );

  if (articles.length === 0) {
    return <p className="font-heading text-red-500">No Articles.</p>;
  }

  return (
    <div className="divide-y">
      {articles.map((article, index) => (
        <ArticleCard key={index} article={article} />
      ))}
    </div>
  );
}

function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="grid grid-cols-[25%_1fr] gap-4 py-4">
      <Link className="" href={article.url} target="_blank">
        <img className="w-full" src={article.urlToImage} alt={article.title} />
      </Link>

      <div className="grid content-between justify-start">
        <h2 className="line-clamp-2 font-heading text-sm font-bold sm:text-base">
          <Link
            className="duration-300 hover:opacity-70"
            href={article.url}
            target="_blank"
          >
            {article.title}
          </Link>
        </h2>
        <p className="font-heading text-xs font-semibold uppercase text-[#767676] sm:text-sm">
          BY{" "}
          {article.author === null || article.author.includes("https")
            ? "unknown"
            : article.author}
        </p>
      </div>
    </article>
  );
}
