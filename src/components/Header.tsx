import TopBar from './TopBar';
import NavBar from './NavBar';
import HeroBanner from './HeroBanner';

function Header()
{
    return (
        <section>
            <div className="fixed top-0 left-0 right-0 z-50">    
                <TopBar />
                <NavBar />
            </div>     
            <HeroBanner />
        </section>
    );
}

export default Header;