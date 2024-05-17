import { ApiData } from "@/types/apiData";
import { getIndexWithValue } from "@/utils/getIndexWithValue";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function CategoryHeadline({
  category,
}: {
  category: string;
}) {
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${process.env.API_KEY}`,
    {
      next: { revalidate: 86400 }, // data cached for 24 hours
    },
  );

  if (res.status !== 200) {
    notFound();
  }

  const data: ApiData = await res.json();

  if (data.totalResults === 0) {
    notFound();
  }

  const headline = data.articles[getIndexWithValue(data, 0)];

  return (
    <article>
      <Link href={headline.url} target="_blank">
        <img
          className="aspect-video object-cover"
          src={headline.urlToImage}
          alt={headline.title}
        />
      </Link>
      <div className="-mt-8">
        <p className="ml-4 inline-block bg-accent p-4 font-tags text-[14.224px] font-[900] uppercase tracking-widest text-[#fdfdfd]">
          {headline.source.name}
        </p>
        <h2 className="my-2 font-heading text-2xl font-bold sm:text-3xl">
          <Link className="duration-300 hover:opacity-70" href={headline.url}>
            {headline.title}
          </Link>
        </h2>
        <hr className="h-1 w-28 bg-accent" />
        <p className="my-2 font-heading text-[#444444]">
          <Link href={headline.url}>{headline.description}</Link>
        </p>
        <p className="font-heading text-sm font-semibold uppercase text-[#767676]">
          BY {headline.author ? headline.author : "unknown"}
        </p>
      </div>
    </article>
  );
}
