import Womens from '../images/womens.webp';

function Cat3()
{
    return(
        <article className="relative group overflow-hidden rounded-2xl">
            <img 
                src={Womens}    
                alt='Womens'    
                className="rounded-2xl w-full h-full object-cover group-hover:rounded-full transition-all duration-500" 
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                <button className="w-[120px] border rounded-2xl px-4 py-2 border-white text-white text-xs font-semibold absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 group-hover:border-none group-hover:-translate-y-12 transition-all duration-500">
                    WOMENS
                </button>
                <button className="absolute top-[50%] border rounded-2xl px-4 py-2 border-white text-white text-xs font-semibold opacity-0 group-hover:opacity-100 transform translate-y-5 group-hover:translate-y-0 transition-all duration-500 hover:bg-white hover:text-black duration-200">
                    SHOP WOMEN
                </button>
            </div>
        </article>
    );
}

export default  Cat3;
