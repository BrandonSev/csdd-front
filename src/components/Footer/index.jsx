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
            <FaInstagram size={40} title="Instagram de la corporation (CSDD)" />
          </a>
        </li>
        <li>
          <a href="#">
            <FaFacebook
              size={40}
              title="Facebook de l'Echo de l'Enclume (CSDD)"
            />
          </a>
        </li>
        <li>
          <img
            src="/assets/logo-compagnons.png"
            width={40}
            title="Site de l'association des Compagnons (AOCDTF)"
          />
        </li>
        <li>
          <img
            src="/assets/Logo-Les-Compagnons-du-Devoir-et-du-Tour-de-France.png"
            width={40}
            title="Site de la Ruche (AOCDTF)"
          />
        </li>
        <li>
          <img
            src="/assets/logo_dumetier.svg"
            width={40}
            title="Du métier (AOCDTF)"
          />
        </li>
        <li>
          <a href="#">
            <FaTwitter size={40} title="Twitter des Compagnons (AOCDTF)" />
          </a>
        </li>
        <li>
          <a href="#">
            <FaInstagram size={40} title="Instagram des Compagnons (AOCDTF)" />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
