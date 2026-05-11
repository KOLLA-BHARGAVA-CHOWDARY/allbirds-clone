import Female1 from '../images/female1.jpg';
import PLeftContent from './PLeftContent';
import Banner1 from '../images/banner1.webp';
import Shoe1 from '../images/shoe1.webp';
import ShoeColor1 from '../images/shoecolor1.webp';

function Promo1()
{
    return (
        <section className="my-[80px] mx-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
                <article className="relative h-full">
                    <img src={Female1} alt="Bold By Nature" className="rounded-2xl w-full h-full object-cover" />
                    <PLeftContent />
                </article> 
            </div>
            <div>
                <article className="mb-4">
                    <img src={Banner1} alt="allbirds x pantone" className="rounded-2xl w-full h-full object-cover" />
                </article>
                <div className="grid grid-cols-2">
                    <article className="relative mr-4">
                        <img src={Shoe1} alt="shoe" className="rounded-2xl w-full h-full object-cover" />
                        <button className="absolute border border-black rounded-full bottom-4 right-4 bg-white w-8 h-8">
                            👛
                        </button>
                    </article>
                    <article>
                        <img src={ShoeColor1} alt="shoeColor" className="rounded-2xl w-full h-full object-cover" />
                    </article>
                </div>
            </div>
        </section>
    );
}

export default Promo1;