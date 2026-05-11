import maleImg from '../images/male.webp';
import ImgContent from './ImgContent';

function MaleImg()
{
    return (
        <article className="relative mx-4 my-2">
            <img src={maleImg} alt="Male Image" className="w-full h-auto rounded-2xl object-cover" />
            <ImgContent />
        </article>
    );
}

export default MaleImg;