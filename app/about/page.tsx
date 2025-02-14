import Image from "next/image";
import { Suspense } from "react";
import image from "@/public/images/5.webp";

function AboutPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <section>
        <h1 className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center text-4xl font-bold leading-none tracking-wide sm:text-6xl">
          We love
          <span className="bg-primary py-2 px-4 rounded-lg tracking-widest text-white">
            comics!
          </span>
        </h1>
        <p className="mt-6 mb-6 text-lg tracking-wide leading-8 max-w-2xl mx-auto text-muted-foreground">
        Immerse yourself in the world of vintage comics, where each page brings stories of heroism, 
      adventure, and nostalgia. With stunning artwork and timeless tales, 
      rediscover the magic of classic comics that have stood the test of time. 
      Explore hidden gems and iconic heroes, 
      all within a collection that speaks to every fan's heart.
        </p>
        <Image
        src={image}
        alt="hero"
        priority
        className="w-full  h-[36rem] rounded-md object-cover "
      />

      </section>
    </Suspense>
  );
}
export default AboutPage;
