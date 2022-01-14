import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "../../utils/StyledFooter";

import logo from "../../images/logo.png";

export default function Footer() {
  return (
    <Box>
      <Container>
        <Row>
          <Column style={{ marginLeft: 0, alignItems: "center" }}>
            <img style={{ height: 169, width: 169 }} src={logo} />
          </Column>
          <Column>
            <FooterLink href="/">Accueil</FooterLink>
            <FooterLink href="/details">Nos bars à caviar</FooterLink>
            <FooterLink href="#">Services</FooterLink>
          </Column>
          <Column>
            <FooterLink href="#">Blog</FooterLink>
            <FooterLink href="#">Contact</FooterLink>
            <FooterLink href="/">Mentions légales</FooterLink>
          </Column>
          {/* <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>Facebook</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>Instagram</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>Twitter</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>Youtube</span>
              </i>
            </FooterLink>
          </Column> */}
        </Row>
      </Container>
    </Box>
  );
}
