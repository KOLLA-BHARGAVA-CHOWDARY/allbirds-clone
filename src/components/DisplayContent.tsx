type product = {
    image: string;
    name: string;
    color: string;
    price: number;
    gender: string;
}

type ProductsProps = {
    products: product;
}

function DisplayContent({products}:ProductsProps)
{
    return (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col gap-y-6 item-center justify-center">
            <h3 className="text-center text-5xl"> 
                {products.name}
            </h3>
            <div className="flex gap-2 items-center justify-center text-xs">
                <p>
                    {products.color} -
                </p>
                <span className="font-bold">
                    ${products.price}
                </span>
            </div>
            <div className="flex gap-4 items-center justify-center">
                {(products.gender === "men" || products.gender === "unisex") && (
                    <div>
                        <button className="text-xs font-semibold border border-black rounded-full px-7 py-2">
                            SHOP MEN
                        </button>
                    </div>
                )}
                {(products.gender === "women" || products.gender === "unisex") && (
                    <div>
                        <button className="text-xs font-semibold border border-black rounded-full px-4 py-2">
                            SHOP WOMEN
                        </button>
                    </div>
                )}
            </div>
        </div>    
    );
}

export default DisplayContent;