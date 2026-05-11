function Follow()
{
    return(
        <div>
            <h3 className="text-white uppercase text-xs tracking-widest font-semibold mb-6">
                follow the flock
            </h3>
            <div className="flex items-center gap-[1rem]">
                <article className=" relative text-white">
                    <a className="border border-white rounded-full w-10 h-10 flex items-center justify-center ">IG</a> 
                </article> 
                <article className=" relative text-white">
                    <a className="border border-white rounded-full w-10 h-10 flex items-center justify-center ">PT</a> 
                </article> 
                <article className=" relative text-white">
                    <a className="border border-white rounded-full w-10 h-10 flex items-center justify-center ">FB</a> 
                </article> 
                <article className=" relative text-white">
                    <a className="border border-white rounded-full w-10 h-10 flex items-center justify-center ">X</a> 
                </article> 
                <article className=" relative text-white">
                    <a className="border border-white rounded-full w-10 h-10 flex items-center justify-center ">TT</a> 
                </article> 
                <article className=" relative text-white">
                    <a className="border border-white rounded-full w-10 h-10 flex items-center justify-center ">YT</a> 
                </article> 
            </div>
        </div>
    );
}

export default Follow;