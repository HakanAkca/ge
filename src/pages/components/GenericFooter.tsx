import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "../../utils/StyledFooter";

import '../../styles/GenericFooter.css';

import logo from "../../images/logo.png";
import EnvelopeIcon from '../../../assets/envelope-solid.svg';
import PhoneIcon from '../../../assets/phone-solid.svg';

export default function Footer() {
  return (
    <footer>
      <div className="links">
        <img src={logo} />
        <ul>
          <li><a href="/">Accueil</a></li>
          <li><a href="/details">Nos bars à caviar</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
      <form>
        <p>Contactez-nous via le formulaire de contact, mail ou par téléphone pour toute demande de renseignements </p>
        <div className="input-row">
          <input placeholder="Nom" type="text" name="name" />
          <input placeholder="Téléphone" type="tel" name="phone" />
        </div>
        <div className="input-row">
          <input placeholder="Adresse mail" type="email" name="email" />
        </div>
        <div className="input-row">
          <textarea placeholder="Message ..." name="message" id="message" rows={5}></textarea>
        </div>
        <button type="submit">
          Envoyer
        </button>
      </form>
      <div className="contact">
        <p>
          <img src={EnvelopeIcon} />
          <a href="mailto:contact@gourmeteventsparis.fr">contact@gourmeteventsparis.fr</a>
        </p>
        <p>
          <img src={PhoneIcon} />
          <a href="tel:+33189164180">01 89 16 41 80</a>
        </p>
      </div>
    </footer>
  );
}
