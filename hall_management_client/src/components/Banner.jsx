import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y ,EffectFlip,Autoplay} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



import Container from './ui/Container';



const Banner = () => {
  return (
  <Container>
     <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y,EffectFlip,Autoplay]}
      spaceBetween={50}
      centeredSlides={true}
      autoplay={{
        delay: 7000,
        disableOnInteraction: false,
      }}
      // effect="flip"
      slidesPerView={1}
      navigation={true}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      >
    <SwiperSlide>

      <img src='https://i.ibb.co/YTMQJVS/IMG20231208114348.jpg' alt="" style={{width: '100%',height: '91vh'}}/>
      {/* <p className="absolute top-0 left-0 text-black text-xl font-extrabold p-4">Your text here</p> */}
      
    </SwiperSlide>
    <SwiperSlide>
    <img src="https://i.ibb.co/gwbb19h/IMG20231208114152.jpg" alt="" style={{width: '100%',height: '91vh'}} />
    </SwiperSlide>
    <SwiperSlide>
    <img src="https://i.ibb.co/RYyrkgn/IMG20231208114358.jpg" alt="" style={{width: '100%',height: '91vh'}}/>
    </SwiperSlide>
    <SwiperSlide>
    <img src="https://i.ibb.co/gwbb19h/IMG20231208114152.jpg" alt="" style={{width:'100%', height:'91vh'}}/>
    </SwiperSlide>
    <SwiperSlide>
      <img src='https://i.ibb.co/C63MMhV/IMG20231208114223.jpg' alt="" style={{width:'100%', height:'91vh'}}/>
    </SwiperSlide>
    <SwiperSlide>
    <img src="https://i.ibb.co/BK2rsgq/IMG20231208114205.jpg" alt="" style={{width:'100%', height:'91vh'}}/>
    </SwiperSlide>
    <SwiperSlide>
    <img src="https://i.ibb.co/yg38LrQ/IMG20231208114446.jpg" alt="" style={{width:'100%', height:'91vh'}}/>
    </SwiperSlide>
    <SwiperSlide>
    <img src="https://i.ibb.co/QKcFZ26/IMG20231208114303.jpg" alt="" style={{width:'100%', height:'91vh'}}/>
    </SwiperSlide>
  </Swiper>
  </Container>
  )
}

export default Banner