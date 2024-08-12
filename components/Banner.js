import { useEffect, useState } from "react";
import { A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import dayjs from "dayjs";
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";
import 'swiper/css';
import Image from 'next/image';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'

export function Banner() {
  const [news, setNews] = useState([])
  useEffect(() => {
    fetch(`https://dev.to/api/articles?username=paul_freeman&per_page=9`)
      .then((response) => { return response.json() })
      .then((data) => { setNews(data) });
  },
    [])
  const SwiperButtonNext = ({ children }) => {
    const swiper = useSwiper()
    return <button onClick={() => swiper.slideNext()}>{children}</button>
  };
  const SwiperButtonPrev = ({ children }) => {
    const swiper = useSwiper()
    return <button onClick={() => swiper.slidePrev()}>{children}</button>
  };
  return (
    <Swiper
      // modules={[A11y, EffectFade]}
      spaceBetween={50}
      effect="fade"
      slidesPerView={1}>
      {news.map((item, index) => (
        <SwiperSlide key={item.id}>
          <Image src={item.social_image} width={6000} height={400} alt="Image" />
          <div className='w-1/2 h-2/5 aspect-video bg-white border-border-card-color border p-10 rounded-xl absolute left-[11px] bottom-[13px] flex flex-col gap-4'>
            <div className='flex flex-col gap-2'>
              <div className="badge badge-primary">{item.tags}</div>
              <p className='text-title-color font-semibold text-4xl'>{item.title}</p>
            </div>

          </div>
        </SwiperSlide>
      ))}
      <SwiperButtonPrev><IoIosArrowDropleft size={32} /></SwiperButtonPrev>
      <SwiperButtonPrev><IoIosArrowDropright size={32} /></SwiperButtonPrev>
    </Swiper>
  )
}


{/* <div className="max-w-[500px] h-[250px] bg-[#FFFFFF] rounded-2xl p-9 mt-[335px] ml-[11px]">
  <div className="bg-[#4B6BFB] w-[97px] font-medium text-white px-2 py-1 rounded-md text-sm text-center">
    Technology
  </div>
  <h1 className="text-[#181A2A] font-semibold text-4xl mt-[16px]">
    Grid system for better Design User Interface
  </h1>
  <div className="text-[#97989F] mt-[25px]">August 20, 2022</div>
</div>  */}