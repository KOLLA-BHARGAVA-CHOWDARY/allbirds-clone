type FtSliderProps = {
    onPrev: () => void;
    onNext: () => void;
    disablePrev?: boolean;
    disableNext?: boolean;
}

function FwController({ onPrev, onNext, disablePrev, disableNext }: FtSliderProps)
{
    return (
        <div className="flex items-center justify-between mb-6">
            <h1 className="underline underline-offset-8">
                NEW ARRIVALS
            </h1>
            <div>
                <button onClick={onPrev} disabled={disablePrev} className="border border-black rounded-full w-10 h-10 mr-4 hover:bg-black hover:text-white">
                    {"<"}
                </button>
                <button onClick={onNext} disabled={disableNext} className="border border-black rounded-full w-10 h-10 hover:bg-black hover:text-white">
                    {">"}
                </button>
            </div>
        </div>
    );
}

export default FwController;