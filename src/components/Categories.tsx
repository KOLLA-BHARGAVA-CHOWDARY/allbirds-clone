import  Cat1 from './Cat1';
import  Cat2 from './Cat2';
import  Cat3 from './Cat3';
import Cat4 from './Cat4';

function Categories()
{
    return (
        <section className="grid gap-4 mx-4 my-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">

            <Cat1 />

            <Cat2 />

            <Cat3 />

            <Cat4 />

        </section>
    );
}

export default Categories;