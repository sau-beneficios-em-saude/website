'use client';
import Image from 'next/image';
import styles from './page.module.css';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { Roboto } from '@next/font/google';
import CardImage from '../assets/card-sau.png';
import BlueCardIcon from '../assets/icon-card-blue.svg';
import PcRodaIcon from '../assets/pc-roda-icon.svg';
import MaoDinheiroIcon from '../assets/mao-dinheiro-icon.svg';
import CmdBlock from '../assets/cmd.png';
import AwsBlock from '../assets/aws.png';
import OracleBlock from '../assets/oracle.png';
import GpSolucoesBlock from '../assets/gpSolucoes.png';
import Plano1 from '../assets/plano1.png';
import Plano2 from '../assets/plano2.png';
import BannerHome from '../assets/bannerHome.jpg';
import AuxilioBanner from '../assets/auxilioBanner.png';
import TelaSauHome from '../assets/telaSauHome.png';

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
    <>
      <Container>
        <section>
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
        </section>
        <section className={styles.containerBeneficios}>
          <h2 className={roboto.className + ' ' + styles.dv1}>
            Benefícios Personalizados para sua Saúde:{'\u00A0'}
            <span>Vida com qualidade e bem-estar</span>
          </h2>
          <Row className={styles.dv2}>
            <Col lg={4}>
              <div className={styles.dv3}>
                <Image
                  src={BlueCardIcon}
                  alt=""
                  className={styles.imgHeight}
                />
                <div className={styles.dv4}>
                  <h2 className={roboto.className}>
                    Facilidade <span>de Uso e Cadastro</span> Simplificado
                  </h2>
                  <p className={styles.dv5 + ' ' + roboto400.className}>
                    Faça parte da Saú em poucos cliques em nossa plataforma
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className={styles.dv3 + ' ' + styles.dv3_}>
                <Image
                  src={PcRodaIcon}
                  alt=""
                  className={styles.imgHeight}
                />
                <div className={styles.dv4 + ' ' + styles.dv4_}>
                  <h2 className={roboto.className}>
                    Dois Planos: <span>uma Solução</span> Sob Medida para Você
                  </h2>
                  <p
                    className={
                      styles.dv5 + ' ' + roboto400.className + ' ' + styles.dv5_
                    }>
                    Individual ou Familiar, conforme sua necessidade
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className={styles.dv3 + ' ' + styles.dv3_}>
                <Image
                  src={MaoDinheiroIcon}
                  alt=""
                  className={styles.imgHeight}
                />
                <div className={styles.dv4 + ' ' + styles.dv4_}>
                  <h2 className={roboto.className}>
                    Acompanhe <span>sua</span> economia{' '}
                    <span>em tempo real</span>
                  </h2>
                  <p
                    className={
                      styles.dv5 + ' ' + roboto400.className + ' ' + styles.dv5_
                    }>
                    Individual ou Familiar, conforme sua necessidade
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </section>
      </Container>
      <section className={styles.dv6}>
        <Container>
          <h2 className={styles.dv7 + ' ' + roboto.className}>
            Quem confia na Saú Benefícios em Saúde
          </h2>
          <h3 className={styles.dv8 + ' ' + roboto400.className}>Parceiros</h3>
          <Row>
            <Col lg={3}>
              <Image
                src={CmdBlock}
                alt=""
                className="w-100"
              />
            </Col>
            <Col lg={3}>
              <Image
                src={AwsBlock}
                alt=""
                className="w-100"
              />
            </Col>
            <Col lg={3}>
              <Image
                src={OracleBlock}
                alt=""
                className="w-100"
              />
            </Col>
            <Col lg={3}>
              <Image
                src={GpSolucoesBlock}
                alt=""
                className="w-100"
              />
            </Col>
          </Row>
        </Container>
      </section>
      <section className={styles.dv9}>
        <Container>
          <Row>
            <Col lg={6}>
              <Image
                src={Plano1}
                alt=""
                className="w-100"
              />
            </Col>
            <Col lg={6}>
              <Image
                src={Plano2}
                alt=""
                className="w-100"
              />
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Image
          src={BannerHome}
          alt=""
          className={styles.dv10 + ' w-100'}
        />
      </section>
      <section className={styles.dv11}>
        <Container>
          <h2 className={styles.dv12 + ' ' + roboto.className}>
            A Saú é o seu melhor acompanhante: Veja como podemos te auxiliar!
          </h2>
          <div className={styles.dv13}>
            <Image
              src={AuxilioBanner}
              alt=""
              className="w-100"
            />
          </div>
        </Container>
      </section>
      <section className={styles.dv16}>
        <Container>
          <Row className="d-flex align-items-center">
            <Col lg={6}>
              <p className={styles.dv14 + ' ' + roboto400.className}>
                Cuide da sua saúde com economia
              </p>
              <h3 className={styles.dv15 + ' ' + roboto.className}>
                Desconto de até 50% em diversos exames com a Saú!
              </h3>
              <div>
                <Button
                  className={roboto.className}
                  variant="primary">
                  Clique aqui para fazer a sua inscrição
                </Button>
              </div>
            </Col>
            <Col
              className="text-center"
              lg={6}>
              <Image
                src={TelaSauHome}
                alt=""
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
