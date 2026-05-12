//it is rendering component for promotion page, it is rendering promo card component and passing data to it
// import { useState, useEffect } from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, EffectFade} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

import PromoCard from './PromoCard';

import Female1 from '../images/female1.jpg';
import Female2 from '../images/female2.png';
import Female3 from '../images/female3.png';
import Male1 from '../images/male1.png';
import Male2 from '../images/male2.png';

import Banner1 from '../images/banner1.webp';
import Banner2 from '../images/banner2.webp';
import Banner3 from '../images/banner3.webp';
import Banner4 from '../images/banner4.webp';
import Banner5 from '../images/banner5.webp';

import Shoe1 from '../images/shoe1.webp';
import Shoe2 from '../images/shoe2.webp';
import Shoe3 from '../images/shoe3.webp';
import Shoe4 from '../images/shoe4.webp';
import Shoe5 from '../images/shoe5.webp';

import ShoeColor1 from '../images/shoecolor1.webp';
import ShoeColor2 from '../images/shoecolor2.webp';
import ShoeColor3 from '../images/shoecolor3.webp';
import ShoeColor4 from '../images/shoecolor4.webp';
import ShoeColor5 from '../images/shoecolor5.webp';

function Promo()
{
    const promoData = [
        {
            picture: Female1,
            banner: Banner1,
            shoe: Shoe1,
            shoeColor: ShoeColor1
        },

        {
            picture: Female2,
            banner: Banner2,
            shoe: Shoe2,
            shoeColor: ShoeColor2
        },

        {
            picture: Female3,
            banner: Banner3,
            shoe: Shoe3,
            shoeColor: ShoeColor3
        },

        {
            picture: Male1,
            banner: Banner4,
            shoe: Shoe4,
            shoeColor: ShoeColor4
        },

        {
            picture: Male2,
            banner: Banner5,
            shoe: Shoe5,
            shoeColor: ShoeColor5
        }
    ];

    // const [activeIndex, setActiveIndex] = useState(0);
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setActiveIndex(prev => (prev+1) % promoData.length);
    //     }, 5000);
    //         return () => clearInterval(interval);
    // }, [promoData.length]);

    // const activePromo = promoData[activeIndex];

    return (

        <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            autoplay={{
                delay:3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: false
            }}
            loop={true}
            slidesPerView={1}
            spaceBetween={0}
            speed={300}
        > 
            {
                promoData.map((promo, index) => (
                <SwiperSlide key={index}>
                    <PromoCard 
                        picture={promo.picture}
                        banner={promo.banner}
                        shoe={promo.shoe}
                        shoeColor={promo.shoeColor}
                    />
                </SwiperSlide> 
            ))}
        </Swiper>

        // <PromoCard
        //     picture={activePromo.picture}
        //     banner={activePromo.banner}
        //     shoe={activePromo.shoe}
        //     shoeColor={activePromo.shoeColor}
        // />   
    );
}

export default Promo;