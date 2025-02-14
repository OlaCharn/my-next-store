import Link from "next/link";
import { Button } from "../ui/button";
import HeroCarousel from "./HeroCarousel";

function Hero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center" >
    <div>
      <h1 className="max-w-2xl font-bold text-4xl tracking-tight sm:text-6xl" >
      Step into the world of vintage comics!
      </h1>
      <p className="mt-8 myx-w-xl text-lg leading-8 text-muted-foreground" >
      Immerse yourself in the world of vintage comics, where each page brings stories of heroism, 
      adventure, and nostalgia. With stunning artwork and timeless tales, 
      rediscover the magic of classic comics that have stood the test of time. 
      Explore hidden gems and iconic heroes, 
      all within a collection that speaks to every fan's heart.
      </p>
      <Button asChild size="lg" className="mt-10"> 
        <Link href="/products" > Our comics </Link>
      </Button>
    </div>
    <HeroCarousel />
    </section>
  )
}

export default Hero;