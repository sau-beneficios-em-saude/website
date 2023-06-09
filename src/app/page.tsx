'use client';
import Image from 'next/image';
import styles from './page.module.css';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { Roboto } from '@next/font/google';
import CardImage from '../assets/card-sau.png';

export const roboto = Roboto({
  display: 'swap',
  weight: '700',
  style: 'normal',
  subsets: ['latin'],
});
export const roboto400 = Roboto({
  display: 'swap',
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
});

export default function Home() {
  return (
    <Container>
      <div className={styles.banner + ' d-flex align-items-center'}>
        <div className={styles.bannerInt}>
          <Row className="d-flex align-items-center">
            <Col lg={6}>
              <h1 className={styles.text1 + ' ' + roboto.className}>
                Bem-vindo à Saú: plataforma Benefícios em Saúde!
              </h1>
              <p
                className={
                  roboto400.className +
                  ' ' +
                  styles.text2 +
                  ' ' +
                  styles.mt45 +
                  ' mb-0 pb-0'
                }>
                Nós democratizamos o acesso à saúde de maneira simples e
                descomplicada
              </p>
              <div className={styles.mt45}>
                <Button
                  className={roboto.className}
                  variant="primary">
                  Clique aqui para fazer a sua inscrição
                </Button>
              </div>
            </Col>
            <Col lg={6}>
              <Image
                src={CardImage}
                alt="Picture of the author"
                className="img-fluid"
              />
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  );
}
