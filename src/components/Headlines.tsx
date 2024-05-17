import { ApiData } from "@/types/apiData";
import { getIndexWithValue } from "@/utils/getIndexWithValue";
import Link from "next/link";

export default async function Headlines() {
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.API_KEY}`,
    {
      next: { revalidate: 86400 }, // data cached for 24 hours
    },
  );
  const data: ApiData = await res.json();
  const headline1 = data.articles[getIndexWithValue(data, 0)];
  const headline2 = data.articles[getIndexWithValue(data, 6)];

  return (
    <div className="md:order-2">
      <article>
        <Link href={headline1.url} target="_blank">
          <img
            className="aspect-video object-cover"
            src={headline1.urlToImage}
            alt={headline1.title}
          />
        </Link>
        <div className="-mt-8">
          <p className="ml-4 inline-block bg-accent p-4 font-tags text-[14.224px] font-[900] uppercase tracking-widest text-[#fdfdfd]">
            {headline1.source.name}
          </p>
          <h2 className="my-2 font-heading text-2xl font-bold sm:text-3xl">
            <Link
              className="duration-300 hover:opacity-70"
              href={headline1.url}
              target="_blank"
            >
              {headline1.title}
            </Link>
          </h2>
          <hr className="h-1 w-28 bg-accent" />
          <p className="my-2 font-heading text-[#444444]">
            <Link href={headline1.url} target="_blank">
              {headline1.description}
            </Link>
          </p>
          <p className="font-heading text-sm font-semibold uppercase text-[#767676]">
            BY{" "}
            {headline1.author === null || headline1.author.includes("https")
              ? "unknown"
              : headline1.author}
          </p>
        </div>
      </article>

      <hr className="my-6 h-px w-full bg-[#e2e2e2]" />

      <article className="grid items-center justify-between gap-4 sm:grid-flow-col sm:gap-8">
        <Link className="sm:order-2" href={headline2.url} target="_blank">
          <img
            className="aspect-square object-cover sm:max-h-[300px]"
            src={headline2.urlToImage}
            alt={headline2.title}
          />
        </Link>

        <div>
          <p className="font-tags text-[14.224px] font-[900] uppercase tracking-widest text-accent">
            {headline2.source.name}
          </p>
          <h2 className="my-2 font-heading text-lg font-bold sm:text-3xl md:text-lg">
            <Link
              className="duration-300 hover:opacity-70"
              href={headline2.url}
              target="_blank"
            >
              {headline2.title}
            </Link>
          </h2>
          <p className="my-2 font-heading text-[#444444]">
            <Link href={headline2.url} target="_blank">
              {headline2.description}
            </Link>
          </p>
          <p className="font-heading text-sm font-semibold uppercase text-[#767676]">
            BY{" "}
            {headline2.author === null || headline2.author.includes("https")
              ? "unknown"
              : headline2.author}
          </p>
        </div>
      </article>
    </div>
  );
}
