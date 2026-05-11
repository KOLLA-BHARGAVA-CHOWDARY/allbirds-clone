import Products from './Products';
import DisplayContent from './DisplayContent';

function Display()
{
    return (
        <section className="relative mx-4 my-12 w-full h-auto">
            <h1 className="absolute underline underline-offset-8 top-[80px] left-1/2 -translate-x-1/2 text-lg">
                NEW ARRIVALS
            </h1>    

            <Products />

            <DisplayContent />
        </section>
    );
}

export default Display;