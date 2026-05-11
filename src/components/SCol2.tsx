import S3 from '../images/s3.webp';
import SeasonalContent from './SeasonalContent';

function SCol2()
{
    return (
        <article className="relative">
            <img src={S3} className="rounded-2xl w-full h-[701px] object-cover" />
            <h1 className="absolute text-4xl text-white font-semibold top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 whitespace-nowrap"> 
                New Arrivals
            </h1>
            <SeasonalContent />
        </article>
    );
}

export default SCol2;