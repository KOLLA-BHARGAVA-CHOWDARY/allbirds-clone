import { useState, useEffect } from 'react';
import MaleImg from './MaleImg';
import FemaleImg from './FemaleImg';

function Unisex()
{
    const [img, setImg] = useState(true);

    useEffect(()=> {
        const interval = setInterval(()=>{
            setImg(prev => !prev);
        }, 3000);
        return () => clearInterval(interval);
     },[]);

     return (
        <section>
            {img ? <MaleImg /> : <FemaleImg />}
        </section>
    );
}

export default Unisex;