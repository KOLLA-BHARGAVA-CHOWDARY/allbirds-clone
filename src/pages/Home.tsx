import Header from '../components/Header';
import Unisex from '../components/Unisex';
import Categories from '../components/Categories';
import Display from '../components/Display';
import Promotion from '../components/Promotion';
import FtSlider from '../components/FtSlider';
import Seasonal from '../components/Seasonal';
import Info from '../components/Info';
import Footer from '../components/Footer';

function Home() 
{
    return (
        <div className="bg-[#f5f3ef] h-full min-w-full" >
            <Header />
            <Unisex />
            <Categories />
            <Display />
            <Promotion />
            <FtSlider />
            <Seasonal />
            <Info />
            <Footer />
        </div>
    );
}

export default Home;