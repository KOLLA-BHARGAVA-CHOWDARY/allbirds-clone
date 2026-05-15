import BestSellers from '../images/bestsellers.webp';

function Cat4()
{
    return(
        <article className="relative group overflow-hidden rounded-2xl">
            <img 
                src={BestSellers}   
                alt='Best Sellers'  
                className="rounded-2xl w-full h-full object-cover group-hover:rounded-full transition-all duration-500" 
            />
            <button className="w-[120px] border rounded-2xl px-4 py-2 border-white text-white text-xs font-bold absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 group-hover:border-none group-hover:-translate-y-12 transition-all duration-500">
                BEST SELLERS
            </button>
            <div className="flex flex-col gap-2 items-center justify-center text-center absolute top-[14%] inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-10 group-hover:translate-y-0 ">
                <button className="w-[120px] border rounded-2xl px-4 py-2 border-white text-white text-xs font-bold">
                    SHOP MEN
                </button>
                <button className="w-[120px] border rounded-2xl px-4 py-2 border-white text-white text-xs font-bold">
                    SHOP WOMEN
                </button>
            </div>    
        </article>
    );
}

export default Cat4;
