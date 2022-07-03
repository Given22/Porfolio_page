/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";

import { Icon } from "@iconify/react";

import { Swiper, SwiperSlide} from "swiper/react";

import Card from "../../card/Card";

import "./projects.scss";
import "swiper/css";

export default function Projects({ projects }) {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <section id="Projects">
      <div id="Projects_Slider">
        <div className="slider_arrow ">
          <Icon
            onClick={() => swiperRef.slidePrev()}
            className="arrow_left"
            icon="ep:arrow-left-bold"
            height="50"
          />
        </div>
        <Swiper
          onSwiper={setSwiperRef}
          slidesPerView={1}
          spaceBetween={100}
          loop={true}
          className="mySwiper"
          id='swiper'
        >
          {projects.map((project) => {
            return (
              <SwiperSlide>
                <Card
                  key={project.slug.current}
                  src={project.mainImage.asset.url}
                  slug={project.slug.current}
                  title={project.title}
                  github={project.github}
                  live={project.live}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="slider_arrow ">
          <Icon
            onClick={() => swiperRef.slideNext()}
            className="arrow_right"
            icon="ep:arrow-right-bold"
            height="50"
          />
        </div>
      </div>
    </section>
  );
}

  // const [index, setIndex] = useState(0);

  // function whichIndex(index) {
  //   if (index === projects.length) {
  //     index = 0;
  //   } else if (index < 0) {
  //     index = projects.length - 1;
  //   }
  //   return index;
  // }

  // const PrevIndex = () => {
  //   setIndex((prev) => {
  //     return whichIndex(prev - 1);
  //   });
  // };

  // const NextIndex = () => {
  //   setIndex((prev) => {
  //     return whichIndex(prev + 1);
  //   });
  // };