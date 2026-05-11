import Ft1 from '../images/ft1.png';
import Ft2 from '../images/ft2.png';
import Ft3 from '../images/ft3.png';
import Ft4 from '../images/ft4.png';
import Ft5 from '../images/ft5.png';
import Ft6 from '../images/ft6.png';
import Ft7 from '../images/ft7.png';
import Ft8 from '../images/ft8.png';

function Fw()
{
    return (
        <div className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide">
            <article className="shrink-0">
                <img src={Ft1} className="rounded-2xl w-[550px] h-[410px] object-cover" />
            </article>
            <article className="shrink-0">
                <img src={Ft2} className="rounded-2xl w-[550px] h-[410px] object-cover" />
            </article>
            <article className="shrink-0">
                <img src={Ft3} className="rounded-2xl w-[550px] h-[410px] object-cover" />
            </article>
            <article className="shrink-0">
                <img src={Ft4} className="rounded-2xl w-[550px] h-[410px] object-cover" />
            </article>
            <article className="shrink-0">
                <img src={Ft5} className="rounded-2xl w-[550px] h-[410px] object-cover" />
            </article>
            <article className="shrink-0">
                <img src={Ft6} className="rounded-2xl w-[550px] h-[410px] object-cover" />
            </article>
            <article className="shrink-0">
                <img src={Ft7} className="rounded-2xl w-[550px] h-[410px] object-cover" />
            </article>
            <article className="shrink-0">
                <img src={Ft8} className="rounded-2xl w-[550px] h-[410px] object-cover" />
            </article>
        </div>
    );
}

export default Fw;