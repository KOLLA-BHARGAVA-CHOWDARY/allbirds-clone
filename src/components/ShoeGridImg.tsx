import ImgContent from "./ImgContent";
import NavBar from "./NavBar";
import TopBar from "./TopBar";
import Shoes from "../images/shoes.webp";
function ShoeGridImg()
{
    return(
        <div>
            <div>
                <TopBar />
            </div>
            <article className="relative mx-4 my-2">
                <div className="absolute mt-3 w-full h-full">
                    <NavBar />
                </div>
                <img src={Shoes} alt="relative Shoe Grid" className=" w-full h-auto rounded-2xl" />
                <ImgContent />    
            </article>
        </div>
    );
}

export default ShoeGridImg;