import { Link } from "react-router-dom";

const Footer = () => {
    return(
        <div className="footer bg-orange-400 text-white font-serif flex flex-col items-center ">
            <div className="copyright my-4">
                © 2025 FoodApp. All rights reserved.
            </div>
            <div className="footer-section m-6">
                    <h3>Quick Links</h3>
                    <ul >
                        <li className="hover:bg-orange-500 px-4 py-2 pt-4"><Link to="/">Home</Link></li>
                        <li className="hover:bg-orange-500 px-4 py-2"><Link to="/grocery">Grocery</Link></li>
                        <li className="hover:bg-orange-500 px-4 py-2"><Link to="/about">About Us</Link></li>
                        <li className="hover:bg-orange-500 px-4 py-2"><Link to="/contact">Contact</Link></li>
                    </ul>
            </div>
            <div className="footer-section flex flex-col items-center m-6">
                    <h3>Follow Us</h3>
                    <div className="social-links flex flex-col">
                        <a href="#" className="hover:bg-orange-500 px-4 py-2 pt-4">Facebook</a>
                        <a href="#" className="hover:bg-orange-500 px-4 py-2">Instagram</a>
                        <a href="#" className="hover:bg-orange-500 px-4 py-2">Twitter</a>
                    </div>
            </div>
        </div>
    )
}

export default Footer;