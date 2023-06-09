'use client';
import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { Roboto } from '@next/font/google';
import Image from 'next/image';
import Logo from '../assets/logo.svg';
export const roboto = Roboto({
  display: 'swap',
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
});

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
                <Nav.Link
                  className={roboto.className + ' linkMenu'}
                  href="#deets">
                  A Saú
                </Nav.Link>
                <Nav.Link
                  className={roboto.className + ' linkMenu'}
                  href="#deets">
                  Vantagens
                </Nav.Link>
                <Nav.Link
                  className={roboto.className + ' linkMenu'}
                  href="#deets">
                  Planos
                </Nav.Link>
                <Nav.Link
                  className={roboto.className + ' linkMenu'}
                  href="#deets">
                  Parceiros
                </Nav.Link>
                <Nav.Link
                  className={roboto.className + ' linkMenu'}
                  href="#deets">
                  Economize
                </Nav.Link>
                <Nav.Link
                  className={roboto.className + ' linkMenu'}
                  href="#deets">
                  Siga Saú
                </Nav.Link>
                <Nav.Link
                  className={roboto.className + ' linkMenu'}
                  href="#deets"></Nav.Link>
              </Nav>
              <Button
                className={roboto.className}
                variant="outline-primary">
                Área do Paciente
              </Button>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        {children}
      </body>
    </html>
  );
}
