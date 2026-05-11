function DisplayProducts()
{

    return (
        <div className="absolute flex gap-4 left-1/2 -translate-x-1/2">
            <div>
                <button className="text-xs font-semibold border border-black rounded-full px-4 py-2">
                    SHOP MEN
                </button>
            </div>
            <div>
                <button className="text-xs font-semibold border border-black rounded-full px-4 py-2">
                    SHOP WOMEN
                </button>
            </div>
        </div>
    );
}

export default DisplayProducts;