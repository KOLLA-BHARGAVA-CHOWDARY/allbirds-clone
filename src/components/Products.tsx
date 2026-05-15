import { useRef, useState } from 'react';
 
import Pro1 from '../images/pro1.png';
import Pro2 from '../images/pro2.png';
import Pro3 from '../images/pro3.png';
import Pro4 from '../images/pro4.png';
import Pro5 from '../images/pro5.png';
import Pro6 from '../images/pro6.png';
import Pro7 from '../images/pro7.png';
import Pro8 from '../images/pro8.png';
import Pro9 from '../images/pro9.png';
import Pro10 from '../images/pro10.png';

import DisplayContent from './DisplayContent';
import DisplayController from './DisplayController';

const PDetails = [
    {
        image: Pro1,
        name: "Canvas Cruiser",
        color: "Cultured Blue (Natural White Sole)",
        price: 75,
        gender: "unisex"
    },
    {
        image: Pro2,
        name: "Canvas Cruiser Slip On",
        color: "Deep Navy Stripes (Blizzard Sole)",
        price: 75,
        gender: "unisex"
    },
    {
        image: Pro3,
        name: "Dasher NZ",
        color: "Seagrass (Parchment Sole)",
        price: 140,
        gender: "unisex"
    },
    {
        image: Pro4,
        name: "Canvas Cruiser",
        color: "Adventurous Auburn (Warm White Sole)",
        price: 75,
        gender: "unisex"
    },
    {
        image: Pro5,
        name: "Cruiser Jersey",
        color: "Light Grey/Anthracite (Blizzard Sole)",
        price: 115,
        gender: "unisex"
    },
    {
        image: Pro6,
        name: "Canvas Cruiser",
        color: "Chestnut (Natural White Sole)",
        price: 75,
        gender: "unisex"
    },
    {
        image: Pro7,
        name: "Allbirds Flip Flop",
        color: "Mid Yellow",
        price: 25,
        gender: "unisex"
    },
    {
        image: Pro8,
        name: "Dasher NZ Relay",
        color: "Seagrass (Parchment Sole)",
        price: 135,
        gender: "unisex"
    },
    {
        image: Pro9,
        name: "Varsity Jersey",
        color: "Light Grey/Syrah (Blizzard Sole)",
        price: 130,
        gender: "men"
    },
    {
        image: Pro10,
        name: "Breezer Mary Jane",
        color: "Dusty Pink (Dusty Pink Sole)",
        price: 115,
        gender: "women"
    },
];

const slideWidth = 780; 

function Products()
{
    const sliderRef = useRef<HTMLDivElement>(null);
    const [prodIdx, setProdIdx] = useState(0);

    const scrollToIdx = (newIdx: number) => {
        const container = sliderRef.current;
        if(!container) return;

        const clampIdx  = Math.max(0, Math.min(newIdx, PDetails.length-1));
        setProdIdx(clampIdx);
        container.scrollTo({
            left: clampIdx * slideWidth,
            behavior: 'smooth'
        });
    }

    return (
        <section>    
            <div ref= {sliderRef} className="flex overflow-x-auto scroll-smooth scrollbar-hide">
                {
                    PDetails.map((product, idx) => (
                        <article key={idx} className="relative shrink-0">
                            <img src={product.image} className="w-[756px] h-auto"/>
                        </article>
                    ))
                }
                {/* <article className="shrink-0">
                        <img src={Pro2} className="w-[756px] h-auto"/>
                    </article>
                    <article className="shrink-0">
                        <img src={Pro3} className="w-[756px] h-auto"/>
                    </article>
                    <article className="shrink-0">
                        <img src={Pro4} className="w-[756px] h-auto"/>
                    </article>
                    <article className="shrink-0">
                        <img src={Pro5} className="w-[756px] h-auto"/>
                    </article>
                    <article className="shrink-0">
                        <img src={Pro6} className="w-[756px] h-auto"/>
                    </article>
                    <article className="shrink-0">
                        <img src={Pro7} className="w-[756px] h-auto"/>
                    </article>
                    <article className="shrink-0">
                        <img src={Pro8} className="w-[756px] h-auto"/>
                    </article>
                    <article className="shrink-0">
                        <img src={Pro9} className="w-[756px] h-auto"/>
                    </article>
                    <article className="shrink-0">
                        <img src={Pro10} className="w-[756px] h-auto"/>
                    </article> */}
            </div>
            <DisplayContent products={PDetails[prodIdx]}/>
            <div>
                <DisplayController 
                    onPrev = { () => scrollToIdx(prodIdx-1) }
                    onNext = { () => scrollToIdx(prodIdx+1) }
                    disablePrev = { prodIdx === 0 }
                    disableNext = { prodIdx === PDetails.length-1 }
                />
            </div>
        </section>    
    );
}

export default Products;