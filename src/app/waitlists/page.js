"use client"

import useSWR from "swr";

const WAITLIST_API_URL = "/api/waitlists/"

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function Page() {
  const {data, error, isLoading} = useSWR(WAITLIST_API_URL, fetcher)
  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading..</div>

  
  return (
    
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <div>
        {JSON.stringify(data)}
      </div>
      
    </main>
  );
}
