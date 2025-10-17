import Image from "next/image";
import SearchForm from "../components/SearchForm";

export default async function Home({ searchParams }: { searchParams: Promise<{ query?: string }>}) {
  const query = (await searchParams).query;

  return (
    <section className="w-full bg-primary min-h-[530px] flex flex-col justify-center items-center py-10 px-6 pattern">
      <h1 className="uppercase bg-black px-6 py-3 font-work-sans font-extrabold text-white text-[36px] leading-[46px] sm:text-[54px] sm:leading-[64px] max-w-5xl text-center my-5">Pitch Your Startup, <br/>Connect With Entrepreneurs</h1>
      <p className="font-medium text-[20px] text-white text-center break-words">Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions.</p>
      <SearchForm query={query} />
    </section>
  );
}
