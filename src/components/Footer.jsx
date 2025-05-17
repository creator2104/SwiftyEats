const Footer = () => {
    return(
        <div className="footer">
            <div className="copyright">
                © 2025 FoodApp. All rights reserved.
            </div>
            <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Menu</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
            </div>
            <div className="footer-section">
                    <h3>Follow Us</h3>
                    <div className="social-links">
                        <a href="#">Facebook</a>
                        <a href="#">Instagram</a>
                        <a href="#">Twitter</a>
                    </div>
            </div>
        </div>
    )
}

export default Footer;