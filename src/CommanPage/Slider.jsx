
import { Navigation, Pagination, Scrollbar,EffectFade, A11y ,Autoplay} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Slide1 from '../assets/Slider/1.webp';
import Slide2 from '../assets/Slider/2.webp';
import Slide3 from '../assets/Slider/3.webp';
import Slide4 from '../assets/Slider/4.webp';
import Slide5 from '../assets/Slider/5.webp';
import Slide6 from '../assets/Slider/6.webp';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/scrollbar';
import { Container ,Box } from '@chakra-ui/react';

export default () => {
  return (
    <Box p="1rem">
      <Swiper
      modules={[Navigation,EffectFade, Pagination,Autoplay, Scrollbar, A11y]}
      spaceBetween={50}
      effect={'fade'}
      slidesPerView={1}
      autoplay={{
        delay: 2600,
      }}
      pagination={{ clickable: true }}
    >
      <SwiperSlide><img src={Slide1} /></SwiperSlide>
      <SwiperSlide><img src={Slide2} /></SwiperSlide>
      <SwiperSlide><img src={Slide3} /></SwiperSlide>
      <SwiperSlide><img src={Slide4} /></SwiperSlide>
      <SwiperSlide><img src={Slide5} /></SwiperSlide>
      <SwiperSlide><img src={Slide6} /></SwiperSlide>
      
    </Swiper>
    </Box>
  );
};