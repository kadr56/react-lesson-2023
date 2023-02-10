import { Swiper, SwiperSlide } from "swiper/react";
import images from "../data/images";
import { useState, useRef } from "react";
import { Thumbs, Freemode } from "swiper";

const SwiperUI = function () {
  const swiperRef = useRef(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const slides = images.map((image) => {
    return (
      <SwiperSlide>
        <img src={image.url} alt="slider image" />
      </SwiperSlide>
    );
  });

  return (
    <div>
      <h1>Day-60 - Swiper JS with React</h1>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Thumbs]}
      >
        {slides}
      </Swiper>

      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        // onSwiper={setThumbsSwiper}
        modules={[Thumbs]}
        watchSlidesProgress
        onSwiper={setThumbsSwiper}
      >
        {slides}
      </Swiper>
    </div>
  );
};

export { SwiperUI };
