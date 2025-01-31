import octopus from "@/public/images/octopus.webp";
import catman from "@/public/images/catman.webp";
import indiana from "@/public/images/indiana.webp";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import { CardContent, Card } from "../ui/card";
import Image from "next/image";

const carouselImages = [octopus, catman, indiana];

function HeroCarousel() {
  return (
    <div className="hidden lg:block" >
      <Carousel>
        <CarouselContent>
          {carouselImages.map((image, index) => {
            return (
            <CarouselItem key={index} >
              <Card>
                <CardContent className="p-2" >
                  <Image src={image} alt="hero" className="w-full h-[24rem] rounded-md object-cover "/>
                </CardContent>
              </Card>

            </CarouselItem>
          )} 
          )}
        </CarouselContent>
        <CarouselPrevious/>
        <CarouselNext/>
      </Carousel>
    </div>
  )
}

export default HeroCarousel