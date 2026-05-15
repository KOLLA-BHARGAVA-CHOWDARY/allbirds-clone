type ProductsProps = {
    onPrev: () => void;
    onNext: () => void;
    disablePrev?: boolean;
    disableNext?: boolean;
}

function DisplayController({onPrev, onNext, disablePrev, disableNext}: ProductsProps)
{
    return (
        <div>    
            <h1 className="absolute underline underline-offset-8 top-[80px] left-1/2 -translate-x-1/2 text-lg">
                NEW ARRIVALS
            </h1>
            <div className= "absolute top-[77px] right-12"> {/*right indicates the right side but the value of right move the component to left, vice versa for the left and same concept works for the top and the bottom*/} 
                <button onClick={onPrev} disabled={disablePrev} className="border border-black rounded-full w-8 h-8 mr-2 pb-0.5">
                    {"<"}
                </button>

                <button onClick={onNext} disabled={disableNext} className="border border-black rounded-full w-8 h-8 pb-0.5">
                    {">"}
                </button>
            </div>
        </div>    
    );
}

export default DisplayController;