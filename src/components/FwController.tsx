function FwController()
{
    return (
        <div className="flex items-center justify-between mb-6">
            <h1 className="underline underline-offset-8">
                NEW ARRIVALS
            </h1>
            <div>
              <button className="border border-black rounded-full w-10 h-10 mr-4">
                    {"<"}
                 </button>
                <button className="border border-black rounded-full w-10 h-10">
                    {">"}
                </button>
            </div>
        </div>
    );
}

export default FwController;