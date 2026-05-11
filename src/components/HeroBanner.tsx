import NavBar from './NavBar';
import Announcement from './Announcement';

function HeroBanner()
{
    return(
        <section className="mx-4 my-2.5 bg-[#8ea5b8] min-h-[250px] rounded-2xl pt-3">
            <NavBar />
            <Announcement />
        </section>
    );
}

export default HeroBanner;