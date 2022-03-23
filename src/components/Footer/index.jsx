import React from 'react';
import './Footer.css';
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from 'react-icons/all';

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer-logo">
        <li>
          <a href="#">
            <FaInstagram size={40} />
          </a>
        </li>
        <li>
          <a href="#">
            <FaTwitter size={40} />
          </a>
        </li>
        <li>
          <a href="#">
            <FaFacebook size={40} />
          </a>
        </li>
        <li>
          <a href="#">
            <FaWhatsapp size={40} />
          </a>
        </li>
        <li>
          <a href="#">
            <FaInstagram size={40} />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
