import React from 'react'
import { Container } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer className="text-center">
      <Container fluid className="d-flex justify-content-center align-items-center section-footer-01">
        <a href="https://www.instagram.com/onecreationofc/" target="_blank">
          <img src="/one_creation/assets/icons/instagram.svg" alt="instagram one creation" />
        </a>
        <a href="mailto:alysson.oneservices@gmail.com" target="_blank">
          <img src="/one_creation/assets/icons/gmail.svg" alt="email one creation" />
        </a>
      </Container>
      <Container fluid className="d-flex flex-column justify-content-center align-items-center section-footer-02">
        <p>© 2024 Copyright: OneCreation</p>
        <img src="/one_creation/assets/one_desk.svg" alt="Logotipo OneDesk" />
      </Container>
    </footer>
  )
}

export default Footer