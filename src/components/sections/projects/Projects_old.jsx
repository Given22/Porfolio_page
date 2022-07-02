/* eslint-disable react-hooks/exhaustive-deps */
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import { Icon } from "@iconify/react";
import { useRef } from "react";

import Card from "../../card/Card";

SwiperCore.use([Navigation]);

export default function Foobar({projects}) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section>
      <h2 className="mb-10">foobar</h2>

      <Swiper
        spaceBetween={16}
        slidesPerView={3}
        loop
        navigation={{
          prevEl: prevRef.current ? prevRef.current : undefined,
          nextEl: nextRef.current ? nextRef.current : undefined,
        }}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.update();
        }}
        breakpoints={{
          320: {
            slidesPerView: 1.5,
          },
          991: {
            slidesPerView: 3,
          },
        }}
      >
        {projects.map((project) => {
            return (
              <SwiperSlide>
                  <Card key={project.slug.current} src={project.mainImage.asset.url} alt={project.slug.current} title={project.title}/>
              </SwiperSlide>         
            )
          })}
        <div className="flex flex-row justify-between mt-5 md:mt-10 md:px-8">
          <div ref={prevRef} className="cursor-pointer">
          <Icon ref={prevRef} className='slider_arrow arrow_left' icon="ep:arrow-left-bold" height="50"/>

          </div>
          <div ref={nextRef} className="cursor-pointer">
          <Icon ref={nextRef} className='slider_arrow arrow_right' icon="ep:arrow-right-bold" height="50" />

          </div>
        </div>
      </Swiper>
    </section>
  );
}