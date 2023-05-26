import { Link } from "react-router-dom";
import logo from "../../assets/img/logo3.jpg";
import {
  FaRegAddressBook,
  FaMailBulk,
  FaPhoneAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaGithub,
} from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content mt-10">
      <div>
        <div className="avatar">
          <div className="w-28 rounded-xl">
            <img src={logo} />
          </div>
        </div>
        <h1 className="text-2xl font-bold text-[#727E9A]">BrainSprouts.</h1>
        <p className="md:w-96 text-[#727E9A]">
          A kids toy shop is a store that specializes in selling toys and games
          designed specifically for children.
        </p>
        <p className="flex items-center gap-3 ">
          <span className="text-info text-lg">
            <FaRegAddressBook></FaRegAddressBook>
          </span>
          <span className="text-[#727E9A]">
            Address: Mirpur-10, Dhaka, Bangladesh
          </span>
        </p>
        <p className="flex items-center gap-3 ">
          <span className="text-info text-lg">
            <FaMailBulk></FaMailBulk>
          </span>
          <span className="text-[#727E9A]">
            Email: mahbubaligub192@gmail.com
          </span>
        </p>
        <p className="flex items-center gap-3 ">
          <span className="text-info text-lg">
            <FaPhoneAlt></FaPhoneAlt>
          </span>
          <span className="text-[#727E9A]">Phone: 01600127050</span>
        </p>
      </div>
      <div>
        <span className="footer-title">Quick Links</span>
        <a className="link link-hover md:mt-3">Help</a>
        <a className="link link-hover md:mt-3">Redeem Voucher</a>
        <a className="link link-hover md:mt-3">Contact Us</a>
        <a className="link link-hover md:mt-3">Policies & Rules</a>
        <a className="link link-hover md:mt-3">Check Offer List</a>
      </div>
      <div>
        <span className="footer-title">Information</span>
        <a className="link link-hover md:mt-3">Product Support</a>
        <a className="link link-hover md:mt-3">Checkout</a>
        <a className="link link-hover md:mt-3">License Policy</a>
        <a className="link link-hover md:mt-3">Affiliate</a>
        <a className="link link-hover md:mt-3">About Us</a>
      </div>
      <div>
        <span className="footer-title">Follow Us On</span>
        <Link to={`https://www.facebook.com/profile.php?id=100029964570675`} className="link link-hover md:mt-3 flex items-center gap-2">
          <FaFacebook className="text-lg"></FaFacebook>Facebook
        </Link>
        <Link to={`https://github.com/Mahbub192`} className="link link-hover md:mt-3 flex items-center gap-2">
          <FaGithub className="text-lg"></FaGithub>github
        </Link>
        <a className="link link-hover md:mt-3 flex items-center gap-2">
          <FaTwitter className="text-lg"></FaTwitter>Twitter
        </a>
        <a className="link link-hover md:mt-3 flex items-center gap-2">
          <FaInstagram className="text-lg"></FaInstagram>Instagram
        </a>
        <a className="link link-hover md:mt-3 flex items-center gap-2">
          <FaYoutube className="text-lg"></FaYoutube>Youtube
        </a>
      </div>
    </footer>
  );
};

export default Footer;
