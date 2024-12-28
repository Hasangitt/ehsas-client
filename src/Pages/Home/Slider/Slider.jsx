import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import slider1 from "../../../assets/images/slider/slider1.jpg";
import slider2 from "../../../assets/images/slider/slider2.jpg";
import slider3 from "../../../assets/images/slider/slider3.jpg";
import slider4 from "../../../assets/images/slider/slider4.jpg";
import slider5 from "../../../assets/images/slider/slider5.jpg";
import slider6 from "../../../assets/images/slider/slider6.jpg";
import slider7 from "../../../assets/images/slider/slider7.jpg";
import slider8 from "../../../assets/images/slider/slider8.jpg";

const Slider = () => {
  return (
    <div>
      <Swiper
        pagination={true}
        modules={[Pagination]}
        className="mySwiper h-[550px] md:h-[600px] lg:h-[800px] w-full"
      >
        <SwiperSlide className="relative">
          <img
            className="h-[550px] md:h-[600px] lg:h-[800px] w-[700px] md:w-full lg:w-full"
            src={slider1}
            alt=""
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-transparent">
            <div className="relative flex h-full items-end p-6 md:p-10">
              <div>
                <h2 className="text-white text-4xl font-bold">
                  Bold & Beautiful
                </h2>
                <p className="text-white mt-2">Style is a way to say who you are without having to speak</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img
            className="h-[550px] md:h-[600px] lg:h-[800px] w-[700px] md:w-full lg:w-full"
            src={slider2}
            alt=""
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-transparent">
            <div className="relative flex h-full items-end p-6 md:p-10">
            <div>
                <h2 className="text-white text-4xl font-bold">
                Fashion is freedom.
                </h2>
                <p className="text-white mt-2">Elevate your wardrobe with timeless pieces that never go out of style.</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img
            className="h-[550px] md:h-[600px] lg:h-[800px] w-[700px] md:w-full lg:w-full"
            src={slider3}
            alt=""
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-transparent">
            <div className="relative flex h-full items-end p-6 md:p-10">
            <div>
                <h2 className="text-white text-4xl font-bold">
                Wear what makes you happy.
                </h2>
                <p className="text-white mt-2">Where luxury meets comfort – discover your perfect fit.</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img
            className="h-[550px] md:h-[600px] lg:h-[800px] w-[700px] md:w-full lg:w-full"
            src={slider4}
            alt=""
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-transparent">
            <div className="relative flex h-full items-end p-6 md:p-10">
            <div>
                <h2 className="text-white text-4xl font-bold">
                Style never goes out of fashion.
                </h2>
                <p className="text-white mt-2">Embrace the art of dressing well – because first impressions matter.</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img
            className="h-[550px] md:h-[600px] lg:h-[800px] w-[700px] md:w-full lg:w-full"
            src={slider5}
            alt=""
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-transparent">
            <div className="relative flex h-full items-end p-6 md:p-10">
            <div>
                <h2 className="text-white text-4xl font-bold">
                Dress to impress.
                </h2>
                <p className="text-white mt-2">Express yourself with the season’s must-have styles</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img
            className="h-[550px] md:h-[600px] lg:h-[800px] w-[700px] md:w-full lg:w-full"
            src={slider6}
            alt=""
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-transparent">
            <div className="relative flex h-full items-end p-6 md:p-10">
            <div>
                <h2 className="text-white text-4xl font-bold">
                Fashion is confidence.
                </h2>
                <p className="text-white mt-2">Explore the latest trends and create your own fashion story</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img
            className="h-[550px] md:h-[600px] lg:h-[800px] w-[700px] md:w-full lg:w-full"
            src={slider7}
            alt=""
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-transparent">
            <div className="relative flex h-full items-end p-6 md:p-10">
            <div>
                <h2 className="text-white text-4xl font-bold">
                Simplicity is the ultimate sophistication.
                </h2>
                <p className="text-white mt-2">Your style is your identity. Make it unforgettable.</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img
            className="h-[550px] md:h-[600px] lg:h-[800px] w-[700px] md:w-full lg:w-full"
            src={slider8}
            alt=""
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-transparent">
            <div className="relative flex h-full items-end p-6 md:p-10">
            <div>
                <h2 className="text-white text-4xl font-bold">
                Be your own style icon.
                </h2>
                <p className="text-white mt-2">Fashion is the armor to survive the reality of everyday life.</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
