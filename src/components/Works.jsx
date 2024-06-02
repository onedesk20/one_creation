import React from 'react'

import works from "../dataset/works";
import CarouselWork from './CarouselWork';
import { Image } from 'react-bootstrap';

const Works = () => {
  return (
    <div className="d-flex flex-column justify-content-center sections-works">
      {works.map((work, i) => {
        let directions = ["section-work-normal", "section-work-reverse"]
        let direction = directions[i % 2];
        return (
          <section key={i} className={`d-flex justify-content-between align-items-center section-work ${direction}`}>
            <div className="d-flex flex-column justify-content-center text-center text-description">
              <h4>{work.title}</h4>
              <p>{work.text}</p>
            </div>
            <div>
              {work.images.length > 1 && <CarouselWork images={work.images} path={work.path}/>}
              {work.images.length == 1 && <Image className="image-work" src={`src/assets/${work.path}/${work.images[0]}.png`} />}
              
            </div>
          </section>
        )
      })}

    </div>
  )
}

export default Works