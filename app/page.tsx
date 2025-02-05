import Hero from "@/components/home/Hero"
import FeaturedProducts from "@/components/home/FeaturedProducts";
import { Suspense } from "react"; //better to wrap only fetch product, not static content, see in code
import LoadingContainer from "@/components/global/LoadingContainer";

function Homepage() {
  return (
    <>
      <Hero />
      <Suspense fallback={<LoadingContainer /> }>

        <FeaturedProducts />
      </Suspense>
    </>
  )
}

export default Homepage;