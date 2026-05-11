import { Link } from 'react-router-dom'; 

function Center()
{
    return(
        <article className="static lg:text-lg font-bold italic">
            <Link to="/">
                allbirds clone 
            </Link> 
        </article>
    );
}

export default Center;