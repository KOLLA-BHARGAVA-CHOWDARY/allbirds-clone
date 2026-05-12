import ImgContent from './ImgContent';

type UnisexCardProps = {
    picture: string;
}

function UnisexCard({ picture }: UnisexCardProps)
{
    return (
        <article className="relative mx-4 my-2">
            <img 
                src={picture} 
                alt="Male Image"    
                className="w-full h-auto rounded-2xl object-cover" 
            />
            <ImgContent />
        </article>
    );
}

export default UnisexCard;