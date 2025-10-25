
// RSC - React Server Component

import Link from "next/link";
import MainNav from "@/components/main-nav";

export default function MoviesPage() {

  return (

   <div className="min-h-screen flex flex-col relative">
    <MainNav />

  <main className="flex flex-col justify-center items-center gap-4 flex-12 bg-purple-400 text-4xl py-16">
     This is MoviesPage
    <Link href="/" className="text-white text-sm bg-black p-4 rounded-full">Goto Home Page</Link>
   
  </main>
  </div>
 
  );
}
