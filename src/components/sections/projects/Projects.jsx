/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";

import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";
import { isMobile } from "react-device-detect";

import { Swiper, SwiperSlide } from "swiper/react";

import Card from "../../card/Card";

import "./projects.scss";
import "swiper/css";

export default function Projects({ projects, refLink, theme }) {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <section ref={refLink} id="Projects" className={theme}>
      <AnimatePresence>
        <div id="Projects_Slider">
          <motion.div
            className="slider_top"
            transition={{ duration: 1 }}
            initial={{ y: "50vh" }}
            animate={{ y: 0 }}
          >
            {!isMobile && (
              <motion.div
                className="slider_arrow"
                key="left"
                whileTap={{ scale: 0.5 }}
                whileHover={{ scale: 1.5 }}
                initial={{ x: "-50vw" }}
                animate={{ x: "0" }}
              >
                <Icon
                  onClick={() => swiperRef.slidePrev()}
                  className="arrow_left"
                  icon="ep:arrow-left-bold"
                  height="50"
                />
              </motion.div>
            )}
            <Swiper
              onSwiper={setSwiperRef}
              slidesPerView={1}
              spaceBetween={100}
              loop={true}
              className="mySwiper"
              id="swiper"
              key="swiper"
            >
              {projects.map(({ title, image, slug, github, live }) => {
                return (
                  <SwiperSlide key={slug}>
                    <Card
                      src={image}
                      slug={slug}
                      title={title}
                      github={github || ""}
                      live={live || ""}
                      theme={theme}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
            {!isMobile && (
              <motion.div
                className="slider_arrow"
                key="right"
                whileTap={{ scale: 0.5 }}
                whileHover={{ scale: 1.5 }}
                initial={{ x: "50vw" }}
                animate={{ x: "0" }}
                exit={{ x: "50vw", transition: { duration: 0.5, delay: 0 } }}
              >
                <Icon
                  onClick={() => swiperRef.slideNext()}
                  className="arrow_right"
                  icon="ep:arrow-right-bold"
                  height="50"
                />
              </motion.div>
            )}
          </motion.div>
          {isMobile && (
            <motion.div
              className="mobile_arrows"
              transition={{ duration: 1 }}
              initial={{ y: "50vh" }}
              animate={{ y: 0 }}
            >
              <motion.div
                className="mobile_arrow mobile_arrow-left"
                transition={{ duration: 1 }}
                initial={{ x: "-50vw" }}
                animate={{ x: 0 }}
              >
                <Icon
                  onClick={() => swiperRef.slidePrev()}
                  className="mobile_arrow-icon"
                  icon="ep:arrow-left-bold"
                />
              </motion.div>
              <motion.div
                className="mobile_arrow mobile_arrow-right"
                transition={{ duration: 1 }}
                initial={{ x: "50vw" }}
                animate={{ x: 0 }}
              >
                <Icon
                  onClick={() => swiperRef.slideNext()}
                  className="mobile_arrow-icon"
                  icon="ep:arrow-right-bold"
                />
              </motion.div>
            </motion.div>
          )}
        </div>
      </AnimatePresence>
    </section>
  );
}
