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

const products = [
    {
        image: Ft1,
        status: "NEW COLOR",
        name: "MEN'S CANVAS RUNNER NZ",
        color: "Deep Navy Stripes",
        price: 100,
        colorCode: "#D7D7D2",
    },

    {
        image: Ft2,
        status: "NEW COLOR",
        name: "WOMEN'S TREE GLIDER",
        color: "Burlwood",
        price: 140,
        colorCode: "#AF8D86",
    },

    {
        image: Ft3,
        status: "PANTONE COLOR",
        name: "MEN'S CANVAS CRUISER",
        color: "Cultured Blue",
        price: 75,
        colorCode: "#8EA5B8",
    },

    {
        image: Ft4,
        status: "NEW COLOR",
        name: "WOMEN'S BREEZER MARY JANE",
        color: "Dusty pink",
        price: 115,
        colorCode: "#CCB2A6",
    },

    {
        image: Ft5,
        status: "NEW COLOR",
        name: "MEN'S DASHER NZ",
        color: "Seagrass",
        price: 140,
        colorCode: "#A1ADAA",
    },

    {
        image: Ft6,
        status: "NEW COLOR",
        name: "WOMEN'S VARSITY STRAP",
        color: "Burlwood",
        price: 115,
        colorCode: "#AA8379",
    },

    {
        image: Ft7,
        status: "NEW",
        name: "MEN'S CRUISER SLIP ON TERRY",
        color: "Ochre/Warm White",
        price: 110,
        colorCode: "#A7944E",
    },

    {
        image: Ft8,
        status: "PANTONE COLOR",
        name: "WOMEN'S CANVAS CRUISER",
        color: "Visionary Lilac",
        price: 75,
        colorCode: "#ABA7AC",
    }
];

const slideWidth = 433; // Adjust this value based on the actual width of your slides

function FtSlider()
{
    const sliderRef = useRef<HTMLDivElement>(null);
    const [fwIdx, setFwIdx] = useState(0);

    const scrollToIndex = (newIndex: number) => {
        const container = sliderRef.current;
        if (!container) return;

        const clampIdx = Math.max(0, Math.min(newIndex, products.length-1));
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
                disableNext = { fwIdx === products.length-1 }
            />    
            <Fw 
                ref={sliderRef} 
                products={products}
            />    
        </section>
    );
}

export default FtSlider;