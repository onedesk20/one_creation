import React from 'react'
import { Carousel, Image } from 'react-bootstrap';

const CarouselWork = ({images, path}) => {
  return (
    <Carousel className="image-work">
      {images.map((img, i) => {
        return (
          <Carousel.Item className="image-work" key={i} interval={3000}>
            <Image className="image-work" src={`/one_creation/assets/${path}/${img}.png`}/>
          </Carousel.Item>
        )
      })}
    </Carousel>
  )
}

export default CarouselWork;