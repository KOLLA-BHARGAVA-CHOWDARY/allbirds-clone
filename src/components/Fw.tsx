// import Ft1 from '../images/ft1.png';
// import Ft2 from '../images/ft2.png';
// import Ft3 from '../images/ft3.png';
// import Ft4 from '../images/ft4.png';
// import Ft5 from '../images/ft5.png';
// import Ft6 from '../images/ft6.png';
// import Ft7 from '../images/ft7.png';
// import Ft8 from '../images/ft8.png';

import { forwardRef } from 'react';

type FtSliderProps = {
    images: string[];
}

const Fw = forwardRef<HTMLDivElement, FtSliderProps>(function Fw({images}, ref) {
    return (
        // <div className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide">
        //     <article className="shrink-0">
        //         <img src={Ft1} className="rounded-2xl w-auto h-[416px] object-cover" />
        //     </article>
        //     <article className="shrink-0">
        //         <img src={Ft2} className="rounded-2xl w-auto h-[416px] object-cover" />
        //     </article>
        //     <article className="shrink-0">
        //         <img src={Ft3} className="rounded-2xl w-auto h-[416px] object-cover" />
        //     </article>
        //     <article className="shrink-0">
        //         <img src={Ft4} className="rounded-2xl w-auto h-[416px] object-cover" />
        //     </article>
        //     <article className="shrink-0">
        //         <img src={Ft5} className="rounded-2xl w-auto h-[416px] object-cover" />
        //     </article>
        //     <article className="shrink-0">
        //         <img src={Ft6} className="rounded-2xl w-auto h-[416px] object-cover" />
        //     </article>
        //     <article className="shrink-0">
        //         <img src={Ft7} className="rounded-2xl w-auto h-[416px] object-cover" />
        //     </article>
        //     <article className="shrink-0">
        //         <img src={Ft8} className="rounded-2xl w-auto h-[416px] object-cover" />
        //     </article>
        // </div>

        <div ref={ref} className="flex gap-4 overflow-hidden scrollbar-hide">
            {
                images.map( (src, idx) => (
                    <section key={idx} className="relative shrink-0 snap-center required:">
                        <article>   
                            <div>
                                <span className ="absolute bg-[#D8D3C9] rounded-full px-2 py-2 text-xs font-semibold mx-4 my-5" >
                                    NEW COLOR
                                </span>
                                <img src={src} className="rounded-t-2xl w-auto h-[416px] object-cover bg-white" /> 
                            </div>
                        </article>
                        <div className="rounded-b-2xl bg-white p-4">
                            <p className="font-bold">
                                MEN'S CANVAS RUNNER NZ
                            </p>
                            <p>
                                Deep Navy Stripes
                            </p>
                            <div className="flex items-center justify-between mt-2">
                                <div className="border-[1px] border-black rounded-full w-6 h-6 flex items-center justify-center">
                                    <label className=" border-[1px] border-black rounded-full w-[18px] h-[18px] bg-blue-800"></label>
                                </div>
                                <span className="font-bold">
                                    $120
                                </span>
                            </div>
                        </div>
                    </section>     
                ))
            }
        </div>
    );
});

export default Fw;