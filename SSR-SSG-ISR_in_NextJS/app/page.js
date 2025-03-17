import Image from "next/image";
// SSR - server side rendering[this is default behaviour as everything is rendered on the server side if we dont use "use client"] 
// SSG - static site Generation[Any content which does not have network calls is a static page by default] 
// ISG - incremental static regenration[
  // fetch in next.js caches the response To opt out use:
  // export const dynamic = 'force-dynamic';
  // However, there are exceptions, fetch requests are not cached when:
  
  // Used inside a Server Action.
  // Used inside a Route Handler that uses the POST method.]
export default async function Home() { 
  
  let data = await fetch('https://api.vercel.app/blog',  { next: { revalidate: 3600 } })
  let posts = await data.json()
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}

// export const dynamic = 'force-dynamic'
