import Subscribe from './Subscribe';
import FooterContents from './FooterContents';
import Follow from './Follow';
import Certified from './Certified';
import BottomFooter from './BottomFooter';

function Footer()
{
    return (
        <footer className="bg-black text-white w-full">
            <div className="mx-auto max-w-10xl px-5 pt-[110px] lg:px-10">
                <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
                    <Subscribe />
                    <FooterContents />
                </div>
                <div className="grid gap-8 grid-cols-1 lg:grid-cols-2">
                    <div className="relative col-span-1">
                        <Follow />
                        <Certified />
                    </div>   
                    <BottomFooter />
                </div>        
            </div>
        </footer>
    );
}

export default Footer;