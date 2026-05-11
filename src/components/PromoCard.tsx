import PLeftContent from './PLeftContent';

type PromoCardProps = {
    picture: string;
    banner: string;
    shoe: string;
    shoeColor: string;
}

function PromoCard({picture, banner, shoe, shoeColor}: PromoCardProps)
{
    return (
        <section className="my-[80px] mx-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
                <article className="relative h-full">
                    <img src={picture} alt="Bold By Nature" className="rounded-2xl w-full h-full object-cover" />
                    <PLeftContent />
                </article> 
            </div>
            <div>
                <article className="mb-4">
                    <img src={banner} alt="allbirds x pantone" className="rounded-2xl w-full h-full object-cover" />
                </article>
                <div className="grid grid-cols-2">
                    <article className="relative mr-4">
                        <img src={shoe} alt="shoe" className="rounded-2xl w-full h-full object-cover" />
                        <button className="absolute border border-black rounded-full bottom-4 right-4 bg-white w-8 h-8">
                            👛
                        </button>
                    </article>
                    <article>
                        <img src={shoeColor} alt="shoeColor" className="rounded-2xl w-full h-full object-cover" />
                    </article>
                </div>
            </div>
        </section>
    );
}

export default PromoCard;