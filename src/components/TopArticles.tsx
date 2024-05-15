import Link from "next/link";
import { ApiData } from "@/types/apiData";
import { getIndexWithValue } from "@/utils/getIndexWithValue";

export default function TopArticles() {
  return (
    <div className="divide-y md:order-1">
      <TopArticle category="business" />
      <TopArticle category="general" />
      <TopArticle category="entertainment" />
      <TopArticle category="health" />
      <TopArticle category="science" />
      <TopArticle category="sports" />
      <TopArticle category="technology" />
    </div>
  );
}

interface TopArticleProps {
  category: string;
}

async function TopArticle({ category }: TopArticleProps) {
  const res = await fetch(
    `https://newsapi.org/v2/everything?q=${category}&apiKey=${process.env.API_KEY}`,
    {
      next: { revalidate: 86400 }, // data cached for 24 hours
    },
  );
  const data: ApiData = await res.json();

  const article = data.articles[getIndexWithValue(data, 0)];

  return (
    <article className="flex justify-between gap-2 [&:not(:first-child)]:pt-5 [&:not(:last-child)]:pb-5">
      <div>
        <span className="mb-1 block font-tags text-[14.224px] font-[900] uppercase tracking-[1px] text-accent ">
          <Link className="duration-300 hover:opacity-70" href={`/${category}`}>
            {category}
          </Link>
        </span>

        <h2 className="font-heading text-lg font-bold sm:text-2xl md:text-base">
          <Link
            className="duration-300 hover:opacity-70"
            href={article.url}
            target="_blank"
          >
            {article.title}
          </Link>
        </h2>
      </div>
      <Link className="shrink-0" href={article.url} target="_blank">
        <img
          className="aspect-square h-[78px] w-[78px] object-cover sm:h-[100px] sm:w-[100px] md:h-[78px] md:w-[78px]"
          src={article.urlToImage}
          alt={article.title}
        />
      </Link>
    </article>
  );
}
