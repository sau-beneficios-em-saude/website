'use client';
import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Inter } from 'next/font/google';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import Image from 'next/image';
import Logo from '../assets/logo.svg';

// export const metadata = {
//   title: 'Saú - plataforma Benefícios em Saúde!',
//   description:
//     'Nós democratizamos o acesso à saúde de maneira simples e descomplicada',
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar
          collapseOnSelect
          expand="lg">
          <Container>
            <Navbar.Brand href="#home">
              <Image
                src={Logo}
                alt={''}
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>
              <Nav>
                <Nav.Link href="#deets">A Saú</Nav.Link>
                <Nav.Link href="#deets">Vantagens</Nav.Link>
                <Nav.Link href="#deets">Planos</Nav.Link>
                <Nav.Link href="#deets">Parceiros</Nav.Link>
                <Nav.Link href="#deets">Economize</Nav.Link>
                <Nav.Link href="#deets">Siga Saú</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        {children}
      </body>
    </html>
  );
}
