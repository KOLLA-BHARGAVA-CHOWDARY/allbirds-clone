function Subscribe()
{
    return (
        <div className="space-y-6">
            <p className="font-mono text-sm tracking-widest uppercase">
                SUBSCRIBE TO OUR EMAILS
            </p>
            <div className="relative max-w-xl text-lg">
                <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="rounded-full w-[24rem] border disabled:border-0 bg-white text-black px-5 py-2" 
                />
                <button className="absolute text-xs text-black right-[13rem] top-3.5 -translate-y-1/2 font-bold mt-2.5">
                    SIGN UP
                </button>
            </div>
        </div>        
    );
}

export default Subscribe;