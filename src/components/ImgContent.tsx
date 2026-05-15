function ImgContent()
{
    return(
        <div className="absolute bottom-[50px] md:right-[70px] text-left md:text-right pl-5">
            <div className="mb-5">
                <h1 className="text-white text-xl md:text-2xl lg:text-3xl">
                    The New Canvas Cruiser Collection
                </h1>
            </div>  
            <div className="flex gap-4 justify-start md:justify-end">
                <div>
                    <button className="bg-white px-7 py-2 rounded-full text-xs font-semibold hover:bg-black hover:text-white duration-200">
                        SHOP MEN
                    </button>
                </div>
                <div>
                    <button className="bg-white px-4 py-2 rounded-full text-xs font-semibold hover:bg-black hover:text-white duration-200">    
                        SHOP WOMEN
                    </button>
                </div> 
            </div>
        </div>
    );
}

export default ImgContent;