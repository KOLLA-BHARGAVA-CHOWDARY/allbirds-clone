import Pro1 from '../images/pro1.png';
import Pro2 from '../images/pro2.png';
import Pro3 from '../images/pro3.png';
import Pro4 from '../images/pro4.png';
import Pro5 from '../images/pro5.png';
import Pro6 from '../images/pro6.png';
import Pro7 from '../images/pro7.png';
import Pro8 from '../images/pro8.png';
import Pro9 from '../images/pro9.png';
import Pro10 from '../images/pro10.png';

function Products()
{
    return (
        <div className="flex overflow-x-auto scroll-smooth scrollbar-hide">
            <article className="shrink-0">
                <img src={Pro1} className="w-[756px] h-auto"/>
            </article>
            <article className="shrink-0">
                <img src={Pro2} className="w-[756px] h-auto"/>
            </article>
            <article className="shrink-0">
                <img src={Pro3} className="w-[756px] h-auto"/>
            </article>
            <article className="shrink-0">
                <img src={Pro4} className="w-[756px] h-auto"/>
            </article>
            <article className="shrink-0">
                <img src={Pro5} className="w-[756px] h-auto"/>
            </article>
            <article className="shrink-0">
                <img src={Pro6} className="w-[756px] h-auto"/>
            </article>
            <article className="shrink-0">
                <img src={Pro7} className="w-[756px] h-auto"/>
            </article>
            <article className="shrink-0">
                <img src={Pro8} className="w-[756px] h-auto"/>
            </article>
            <article className="shrink-0">
                <img src={Pro9} className="w-[756px] h-auto"/>
            </article>
            <article className="shrink-0">
                <img src={Pro10} className="w-[756px] h-auto"/>
            </article>
        </div>
    );
}

export default Products;