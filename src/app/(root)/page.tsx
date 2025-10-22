import Image from "next/image";
import SearchForm from "../../components/SearchForm";
import StartUpCard from "@/components/StartUpCard";
import { STARTUP_QUERY } from "@/sanity/lib/queries"; 
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { STARTUP_QUERYResult } from "@/sanity/types";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const params = { search: query || null }
  const {data: posts} = await sanityFetch({ query: STARTUP_QUERY, params });

  return (
    <>
      <section className="w-full bg-primary min-h-[530px] flex flex-col justify-center items-center py-10 px-6 pattern">
        <h1 className="uppercase bg-black px-6 py-3 font-work-sans font-extrabold text-white text-[36px] leading-[46px] sm:text-[54px] sm:leading-[64px] max-w-5xl text-center my-5">
          Pitch Your Startup, <br />
          Connect With Entrepreneurs
        </h1>
        <p className="font-medium text-[20px] text-white text-center break-words">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </p>
        <SearchForm query={query} />
      </section>
      <section className="section-container px-6 py-10 max-w-7xl mx-auto">
        <p className="font-semibold text-[30px] text-black">
          {query ? `Search results for ${query}` : "All Startups"}
        </p>
        <ul className="mt-7 grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {posts?.length > 0 ? (
            posts.map((post: STARTUP_QUERYResult[number]) => <StartUpCard key={post._id} post={post} />)
          ) : (
            <p className="text-black-100 text-sm font-normal">
              No startups found
            </p>
          )}
        </ul>
      </section>
      <SanityLive />
    </>
  );
}
