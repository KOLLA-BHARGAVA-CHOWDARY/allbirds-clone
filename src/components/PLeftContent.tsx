function PLeftContent()
{
    return(
        <div className="absolute top-[330px] -translate-y-1/2 left-1/2 -translate-x-1/2 text-center max-w-md">
            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl mb-5">
                Bold By Nature
            </h1>
            <p className="text-white whitespace-nowrap mb-5"> 
                Show your true colors in eight exclusivePantone-curated shades. 
            </p>
            <button className="text-black bg-white rounded-2xl py-2 px-4 text-xs font-semibold hover:bg-black hover:text-white duration-200">
                SHOP NOW
            </button>    
        </div>
    );
}

export default PLeftContent;