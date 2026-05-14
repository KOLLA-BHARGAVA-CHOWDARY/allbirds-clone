import { useRef, useState } from 'react';

import Ft1 from '../images/ft1.png';
import Ft2 from '../images/ft2.png';
import Ft3 from '../images/ft3.png';
import Ft4 from '../images/ft4.png';
import Ft5 from '../images/ft5.png';
import Ft6 from '../images/ft6.png';
import Ft7 from '../images/ft7.png';
import Ft8 from '../images/ft8.png';

import FwController from './FwController';
import Fw from './Fw'; 

 const images = [Ft1, Ft2, Ft3, Ft4, Ft5, Ft6, Ft7, Ft8];
 const slideWidth = 566; // Adjust this value based on the actual width of your slides

function FtSlider()
{
    const sliderRef = useRef<HTMLDivElement>(null);
    const [fwIdx, setFwIdx] = useState(0);

    const scrollToIndex = (newIndex: number) => {
        const container = sliderRef.current;
        if (!container) return;

        const clampIdx = Math.max(0,Math.min(newIndex, images.length-1));
        setFwIdx(clampIdx);
        container.scrollTo({
            left: clampIdx * slideWidth,
            behavior: 'smooth'
        });
    }    
    return (
        <section className="relative mx-4 my-6 h-auto object-cover">
            <FwController 
                onPrev = { () => scrollToIndex(fwIdx-1) }
                onNext = { () => scrollToIndex(fwIdx+1) }   
                disablePrev = { fwIdx === 0 }
                disableNext = { fwIdx === images.length-1 }
            />    
            <Fw 
                ref={sliderRef} 
                images={images}
            />    
        </section>
    );
}

export default FtSlider;