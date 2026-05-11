import  Mens from '../images/mens.webp';

function Cat2()
{
    return(
        <article className="relative group overflow-hidden rounded-2xl">
            <img 
                src={Mens} 
                alt='Mens' 
                className="rounded-2xl w-full h-full object-cover group-hover:rounded-full transition-all duration-500" 
            />
            <div className="flex flex-col items-center justify-center text-center px-4 absolute inset-0">
                <button className="w-[90px] px-4 py-2 border rounded-full border-white text-white text-xs font-bold absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 group-hover:border-none group-hover:-translate-y-11 transition-all duration-500">
                    MENS
                </button>
                <button className="absolute top-[51%] left-1/2 border border-white text-white text-xs font-semibold rounded-full px-4 py-2 opacity-0 group-hover:opacity-100 transition-all -translate-x-1/2 duration-500 transform translate-y-5 group-hover:translate-y-0">
                    SHOP MEN
                </button>
            </div>    
        </article>
    );
}

export default Cat2;