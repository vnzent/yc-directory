import Image from "next/image";
import SearchForm from "../../components/SearchForm";
import StartUpCard from "@/components/StartUpCard";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const posts = [
    {
      _createdAt: "Yesterday",
      views: 55,
      author: { _id: 1 },
      _id: 1,
      description: "This is a description",
      image:
        "https://plus.unsplash.com/premium_photo-1677087123392-3a3c03b69790?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2940",
      category: "Robots",
      title: "We Robots",
    },
  ];

  return (
    <>
      <section className="w-full bg-primary min-h-[530px] flex flex-col justify-center items-center py-10 px-6 pattern">
        <h1 className="uppercase bg-black px-6 py-3 font-work-sans font-extrabold text-white text-[36px] leading-[46px] sm:text-[54px] sm:leading-[64px] max-w-5xl text-center my-5">
          Pitch Your Startup, <br />
          Connect With Entrepreneurs
        </h1>
        <p className="font-medium text-[20px] text-white text-center break-words">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions.
        </p>
        <SearchForm query={query} />
      </section>
      <section className="section-container px-6 py-10 max-w-7xl mx-auto">
        <p className="font-semibold text-[30px] text-black">
          {query ? `Search results for ${query}` : "All Startups"}
        </p>
        <ul className="mt-7 grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {posts?.length > 0 ? (
            posts.map((StartUpCardType, index) => (
              <StartUpCard />
            ))
          ) : (
            <p className="text-black-100 text-sm font-normal">No startups found</p>
          )}
        </ul>
      </section>
    </>
  );
}
