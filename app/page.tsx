import FeaturedNews from "@/components/featured-news";
import NewsCard from "@/components/news-card";
import Image from "next/image";

export default function Home() {
return (
   <div className="w-full flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold text-center mt-36">Byte size pieces of Tech<br/>to have a good start.</h1>
      <p className="text-xl text-primary-foreground/70">Start your day with a byte-sized serving of the latest tech trends, curated just for you.</p>
      <div>
        <FeaturedNews/>
      </div>
    </div>
  )
}
