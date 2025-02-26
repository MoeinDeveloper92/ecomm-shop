import React from 'react';
import Container from './Container';
import FooterTop from './FooterTop';
import FooterDown from './FooterDown';
const Footer = () => {
  return (
    <footer className="bg-white border-t ">
      <Container>
        <FooterTop />
        <FooterDown />
      </Container>
    </footer>
  );
};

export default Footer;
