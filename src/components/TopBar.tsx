function TopBar() 
{
    return (
        // here the base size is xs which is by default applied to the mobile and the remaining sizes applied to the tab and desktop
        <article className="bg-black text-white text-center sm:text-sm text-xs py-2"> 
            30% off your order when you spend $140+. Discount automatically applied at checkout.<a href="/"> *Exclusions apply </a>
        </article>
    );
}

export default TopBar;