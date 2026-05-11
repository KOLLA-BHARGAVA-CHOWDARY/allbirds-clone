import NewArrivals from '../images/newarrival.webp';

function Cat1()
{
    return(
        <article className="relative group overflow-hidden rounded-2xl">
            <img 
                src={NewArrivals} 
                alt='New Arrivals' 
                className="rounded-2xl w-full h-full object-cover group-hover:rounded-full transition-all duration-500" 
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                <button className="w-auto border rounded-full px-4 py-2 border-white text-white text-xs font-semibold absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 group-hover:border-none group-hover:-translate-y-12 transition-all duration-500">
                    NEW ARRIVAL
                </button>
                <div className="flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-8 absolute top-[49%] group-hover:translate-y-0">
                    <button className="w-auto border rounded-full px-4 py-2 border-white text-white text-xs font-semibold transition-all hover:bg-white hover:text-black duration-200">
                        SHOP MEN
                    </button>
                    <button className="w-auto border rounded-full px-4 py-2 border-white text-white text-xs font-semibold transition-all hover:bg-white hover:text-black duration-200">
                        SHOP WOMEN
                    </button>
                </div>    
            </div>    
        </article>
    ); 
}

export default Cat1;