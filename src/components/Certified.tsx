import BCorp from '../images/b-corp.png';

function Certified()
{
    return(
        <div className="col-span-1 mt-[6rem] flex items-center justify-start gap-8">
            <article>
                <img src={BCorp} alt="B_Corp_Certified" className="h-20" />
            </article>
            <div>
                <select className="bg-black text-white pr-3">
                    <option>US</option>
                    <option>UK</option>
                    <option>CA</option>
                </select>
            </div>                           
        </div>
    );
}

export default Certified;