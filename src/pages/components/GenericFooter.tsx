import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "../../utils/StyledFooter";

import "../../styles/GenericFooter.css";

import logo from "../../images/logo.png";
import EnvelopeIcon from "../../../assets/envelope-solid.svg";
import PhoneIcon from "../../../assets/phone-solid.svg";
import alcool from "../../images/alcool.png";

export default function Footer() {
  return (
    <footer>
      <div className="footer-first">
        <div className="links">
          <img src={logo} />
          <ul>
            <li>
              <a href="/">Accueil</a>
            </li>
            <li>
              <a href="/details">Nos bars à caviar</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/mentions">Mentions légales</a>
            </li>
            <li>
              <a href="/personnal">Données personnels</a>
            </li>
          </ul>
        </div>
        <form>
          <p>
            Contactez-nous via le formulaire de contact, mail ou par téléphone
            pour toute demande de renseignements{" "}
          </p>
          <div className="input-row">
            <input placeholder="Nom" type="text" name="name" />
            <input placeholder="Téléphone" type="tel" name="phone" />
          </div>
          <div className="input-row">
            <input placeholder="Adresse mail" type="email" name="email" />
          </div>
          <div className="input-row">
            <textarea
              placeholder="Message ..."
              name="message"
              id="message"
              rows={5}
            ></textarea>
          </div>
          <button type="submit">Envoyer</button>
        </form>
        <div className="contact">
          <p>
            <img src={EnvelopeIcon} />
            <a href="mailto:contact@gourmeteventsparis.fr">
              contact@gourmeteventsparis.fr
            </a>
          </p>
          <p>
            <img src={PhoneIcon} />
            <a href="tel:+33189164180">01 89 16 41 80</a>
          </p>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#0F0F20",
          display: "flex",
          flexDirection: "row",
          marginTop: 50,
          justifyContent: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={alcool} />
        </div>
        <p
          style={{
            marginTop: 0,
            color: "#FFFFFF",
            fontFamily: "Roboto",
            fontStyle: "italic",
            fontSize: 18,
            width: "80%",
            marginLeft: 25,
          }}
        >
          L’abus d’alcool est dangereux pour la santé, consommez avec
          modération. <br />
          <br />
          La consommation de boissons alcolisées pendant la grossesse, même en
          faible quantité, peut avoir des conséquences grave sur la santé de
          l’enfant
        </p>
      </div>
    </footer>
  );
}
