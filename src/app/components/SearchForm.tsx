import React from 'react'
import Form from 'next/form';
import SearchFormReset from './SearchFormReset';

const SearchForm = () => {
    const query = "Test"

  return (
    <Form action="/" className="search-form w-full max-w-3xl min-h-[80px] bg-white border-[5px] border-black rounded-full text-2xl mt-8 px-5 flex items-center gap-5">
        <input 
            type="text" 
            className="flex-1 font-bold placeholder:font-semibold placeholder:text-black-100 w-full h-auto outline-none"
            name="query"
            defaultValue={query}
            placeholder="Search Startups" />

        <div className="flex gap-2">
            {query &&  <SearchFormReset />}
            <button type="submit" className="size-[50px] rounded-full bg-black flex justify-center items-center">
                S
            </button>
        </div>
    </Form>
  )
}

export default SearchForm