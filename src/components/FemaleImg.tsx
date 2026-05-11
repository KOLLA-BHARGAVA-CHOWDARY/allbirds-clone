import femaleImg from '../images/female.webp';
import ImgContent from './ImgContent';

function FemaleImg()
{
    return (
        <article className="relative mx-4 my-2">
            <img    
                src={femaleImg}     
                alt="Female Image"  
                className="w-full h-auto rounded-2xl object-cover" 
            />
            <ImgContent />
        </article>
    );    
}

export default FemaleImg;