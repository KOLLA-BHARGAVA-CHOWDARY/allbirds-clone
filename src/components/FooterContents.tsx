function FooterContents()
{
    return(
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-4">
            <div className="col-span-1 text-white text-sm">
                <p className="uppercase mb-10">
                    help
                </p>
                <ul className="grid gap-3">
                    <li><a>Live Chat</a></li>
                    <li><a>Call Us</a></li>
                    <li><a>Text Us</a></li>
                    <li><a>help@allbirds.com</a></li>
                    <li><a>FAQ/Contact Us</a></li>
                    <li><a>Returns/Exchanges</a></li>
                </ul>
            </div>
            <div className="col-span-1 text-white text-sm">
                <p className="uppercase  mb-10">
                    shop
                </p>
                <ul className="grid gap-3">
                    <li><a>Men's Shoes</a></li>
                    <li><a>Women's Shoes</a></li>
                    <li><a>Men's Apparel</a></li>
                    <li><a>Women's Apparel</a></li>
                    <li><a>Socks</a></li>
                    <li><a>Refer a Friend</a></li>
                </ul>
            </div>
            <div className="col-span-1 text-white text-sm">
                <p className="uppercase  mb-10">
                    company
                </p>
                <ul className="grid gap-3">
                    <li><a>Store Locator</a></li>
                    <li><a>Our Story</a></li>
                    <li><a>Our Materials</a></li>
                    <li><a>Sustainability</a></li>
                    <li><a>Investors</a></li>
                    <li><a>Shoe Care</a></li>
                    <li><a>Affiliates</a></li>
                    <li><a>Bulk Orders</a></li>
                </ul>
            </div>
            <div className="col-span-1 text-white text-sm mt-[3.7rem]">
                <ul className="grid gap-3">
                    <li><a>Press</a></li>
                    <li><a>Careers</a></li>
                    <li><a>Allbirds Responsible Disclosure Program</a></li>
                    <li><a>California Transparency Act</a></li>
                    <li><a>Community Offers</a></li>
                    <li><a>Our Blog</a></li>
                    <li><a>Patents</a></li>
                    <li><a>Terms of Use - Wholesale</a></li>
                    <li><a>Allbirds Global Entities</a></li>
                </ul>
            </div>
        </div>
    );
}

export default FooterContents;