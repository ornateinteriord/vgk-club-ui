import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "../../assets/logo.png";

export default function Footer() {
  return (
    <footer className="vgk-footer">
      <div className="vgk-footer-main">
        {/* Column 1: Brand */}
        <div className="vgk-footer-col vgk-footer-brand">
          <img src={logo} alt="VGK HUB Logo" className="vgk-footer-logo" />
          <p className="vgk-footer-desc">
            VGK HUB, a part of the Vishwa Gurukulam Foundation, is dedicated to promoting health and well-being for citizens across India through a diverse range of products and services.
          </p>
          <Link to="/about" className="vgk-footer-link-bold">Learn More</Link>
        </div>

        {/* Column 2: Information */}
        <div className="vgk-footer-col">
          <h3 className="vgk-footer-title">Information</h3>
          <ul className="vgk-footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
          </ul>
        </div>

        {/* Column 3: Shop */}
        <div className="vgk-footer-col">
          <h3 className="vgk-footer-title">Shop</h3>
          <ul className="vgk-footer-links">
            <li><Link to="/#recommended">Recommended</Link></li>
            <li><Link to="/shop">More Items</Link></li>
            <li><Link to="/collections">Other Collections</Link></li>
            <li><Link to="/collections/organic">Organic Food Items</Link></li>
            <li><Link to="/collections/ayurvedic">Ayurvedic Food Supplements</Link></li>
          </ul>
        </div>

        {/* Column 4: Contact Us */}
        <div className="vgk-footer-col vgk-footer-contact">
          <h3 className="vgk-footer-title">Contact Us</h3>
          <p>8496044605</p>
          <p>vishwagurukulam4u@gmail.com</p>
          
          <h3 className="vgk-footer-title vgk-mt-4">Location</h3>
          <p>
            VGK HUB Industrial premises,<br />
            Ground floor plot NoQ1 old santhe maidana Lalanakere post Gandasi Han, Arasikere, KARNATAKA, 573119
          </p>
          <a href="#" className="vgk-footer-link-bold">See Directions ↗</a>
        </div>

        {/* Column 5: Newsletter */}
        <div className="vgk-footer-col vgk-footer-newsletter">
          <h3 className="vgk-footer-title">Subscribe To Our Newsletter</h3>
          <p className="vgk-footer-desc">
            Be the first to see our latest products, hottest sales and member exclusive discount codes. Sign up below to get your 10% off coupon.
          </p>
          <form className="vgk-newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your e-mail id" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="vgk-footer-bottom">
        <p>© 2025 — Copyright, All Rights reserved. Powered by Digital Showroom</p>
        <div className="vgk-footer-payments">
          <span className="vgk-payment-icon">Pay</span>
          <span className="vgk-payment-icon">GPay</span>
          <span className="vgk-payment-icon">Card</span>
        </div>
      </div>
    </footer>
  );
}
