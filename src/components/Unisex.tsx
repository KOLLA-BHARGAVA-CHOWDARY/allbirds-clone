import { useState, useEffect } from 'react';
import UnisexCard from './UnisexCard';
import MaleImg from '../images/male.webp';
import FemaleImg from '../images/female.webp';


function Unisex()
{
    // const [img, setImg] = useState(true);

    // useEffect(()=> {
    //     const interval = setInterval(()=>{
    //         setImg(prev => !prev);
    //     }, 3000);
    //     return () => clearInterval(interval);
    //  },[]);

    const [activeImg, setActiveImg] = useState(true);
    const [fade, setFade] = useState(false);
    useEffect(() => {
        const interval = setInterval(() => {
            setFade(true);
            setTimeout(() => {
                setActiveImg(prev => !prev);
                setFade(false);
            }, 300);
        }, 3000);
        return () => clearInterval(interval);
    }, []);
    const ActiveImage = activeImg ? MaleImg : FemaleImg;

    return (
        // <section>
        //     {img ? <MaleImg /> : <FemaleImg />}
        // </section>
        
        <div className={fade ? 'fade-out':'fade-in'}>
            <UnisexCard picture={ActiveImage} />
        </div>
    );
}

export default Unisex;