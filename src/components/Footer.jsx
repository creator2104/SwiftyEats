const Footer = () => {
    return(
        <div className="footer bg-orange-400 text-white font-serif flex flex-col items-center ">
            <div className="copyright my-4">
                © 2025 FoodApp. All rights reserved.
            </div>
            <div className="footer-section m-6">
                    <h3>Quick Links</h3>
                    <ul >
                        <li className="hover:bg-orange-500 px-4 py-2"><a href="#">Home</a></li>
                        <li className="hover:bg-orange-500 px-4 py-2"><a href="#">Menu</a></li>
                        <li className="hover:bg-orange-500 px-4 py-2"><a href="#">About Us</a></li>
                        <li className="hover:bg-orange-500 px-4 py-2"><a href="#">Contact</a></li>
                    </ul>
            </div>
            <div className="footer-section flex flex-col items-center m-6">
                    <h3>Follow Us</h3>
                    <div className="social-links flex flex-col">
                        <a href="#" className="hover:bg-orange-500 px-4 py-2">Facebook</a>
                        <a href="#" className="hover:bg-orange-500 px-4 py-2">Instagram</a>
                        <a href="#" className="hover:bg-orange-500 px-4 py-2">Twitter</a>
                    </div>
            </div>
        </div>
    )
}

export default Footer;