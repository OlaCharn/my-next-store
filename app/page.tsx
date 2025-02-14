import Hero from "@/components/home/Hero";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import { Suspense } from "react"; //better to wrap only fetch product, not static content, see in code
import LoadingContainer from "@/components/global/LoadingContainer";

function Homepage() {
  return (
    <>
      <Hero />
      <Suspense fallback={<LoadingContainer />}>
        <FeaturedProducts />
        <div className="flex justify-center items-center h-full w-full mt-10">
          <p>Fake Store</p>
        </div>
      </Suspense>
    </>
  );
}

export default Homepage;
