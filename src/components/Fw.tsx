// import Ft1 from '../images/ft1.png';
// import Ft2 from '../images/ft2.png';
// import Ft3 from '../images/ft3.png';
// import Ft4 from '../images/ft4.png';
// import Ft5 from '../images/ft5.png';
// import Ft6 from '../images/ft6.png';
// import Ft7 from '../images/ft7.png';
// import Ft8 from '../images/ft8.png';

import { forwardRef } from 'react';

type product = {
    image: string;
    status: string;
    name: string;
    color: string;
    price: number;
    colorCode: string;
}

type FtSliderProps = {
    products: product[];
}

const Fw = forwardRef<HTMLDivElement, FtSliderProps>(function Fw({products}, ref) {
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
                products.map( (product, idx) => (
                    <section key={idx} className="relative shrink-0 snap-center required:">
                        <article>   
                            <div>
                                <span className ="absolute bg-[#D8D3C9] rounded-full px-2 py-2 text-xs font-semibold mx-4 my-5" >
                                    {product.status}
                                </span>
                                <img src={product.image} className="rounded-t-2xl w-auto h-[416px] object-cover bg-white" /> 
                            </div>
                        </article>
                        <div className="rounded-b-2xl bg-white p-4">
                            <p className="font-semibold">
                                {/* MEN'S CANVAS RUNNER NZ */}
                                {product.name}
                            </p>
                            <p>
                                {/* Deep Navy Stripes */}
                                {product.color}
                            </p>
                            <div className="flex items-center justify-between mt-2">
                                <div className="border-[1px] border-black rounded-full w-6 h-6 flex items-center justify-center">
                                    <label className=" border-[1px] border-black rounded-full w-[18px] h-[18px]" style={{backgroundColor: product.colorCode}}></label>
                                </div>
                                <span className="font-semibold">
                                    {/* $120 */}
                                    ${product.price}
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