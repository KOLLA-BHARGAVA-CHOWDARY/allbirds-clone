import SCol1 from './SCol1';
import SCol2 from './SCol2';
import SCol3 from './SCol3';

function Seasonal()
{
    return (
        <section className="mx-4 my-10 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 h-auto">
            <SCol1 />
            <SCol2 />
            <SCol3 />
        </section>
    );
}

export default Seasonal;