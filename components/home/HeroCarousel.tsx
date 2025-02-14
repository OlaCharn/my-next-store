import ai3 from "@/public/images/1.webp";
import ai from "@/public/images/4.webp";
import ai2 from "@/public/images/5.webp";


import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import { CardContent, Card } from "../ui/card";
import Image from "next/image";

const carouselImages = [ai, ai2, ai3];

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
                  <Image src={image} alt="hero" priority className="w-full h-[24rem] rounded-md object-cover "/>
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