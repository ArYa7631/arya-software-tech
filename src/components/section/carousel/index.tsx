// CarouselComponent.tsx
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

interface ImageData {
    src: string;
    alt: string;
    legend: string;
}

interface CarouselProps {
    imageData: ImageData[];
}

const CarouselComponent = ({ imageData }:CarouselProps) => {
    const imageStyle = {
        maxHeight: "500px"
    };

    return (
        <section>
            <Carousel showArrows autoFocus autoPlay infiniteLoop className="mt-2">
                {imageData.map((item, index) => (
                    <div key={index}>
                        <img src={item.src} style={imageStyle} alt={item.alt} />
                        <p className="legend">{item.legend}</p>
                    </div>
                ))}
            </Carousel>
        </section>
    )
};

export default CarouselComponent;

