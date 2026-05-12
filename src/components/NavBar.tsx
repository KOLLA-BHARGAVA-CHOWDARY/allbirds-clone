import Left from './Left';
import Menu from './Menu';
import Center from './Center'
import Features from './Features';
import NavBottom from './NavBottom';

function NavBar() 
{
  return (
    <nav className="relative bg-white mx-6 mt-4 rounded-2xl">
      <section className="flex items-center justify-between mx-5 py-2">
        <Left />
        <Center />
        <Menu />
        <Features />
      </section>  
      <section className="bg-[#E0DACF] rounded-b-2xl lg:hidden w-full py-2 overflow-x-auto">
        <NavBottom />
      </section>
    </nav>  
    );
}

export default NavBar;