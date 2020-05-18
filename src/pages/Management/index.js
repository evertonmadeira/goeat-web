import React from 'react';
// import { Link } from 'react-router-dom';
import { MdRestaurant, MdLocalAtm } from 'react-icons/md';
import { Container, Content, Tables, Orders } from './styles';
import MainBar from '../../components/MainBar';

const Management = () => {
  return (
    <>
      <MainBar />
      <Container>
        <Content>
          <h1>
            <MdRestaurant />
            Mesas
          </h1>

          <Tables>
            <section>
              <strong>01</strong>
            </section>
            <section>
              <strong>01</strong>
            </section>
            <section>
              <strong>01</strong>
            </section>
            <section>
              <strong>01</strong>
            </section>
            <section>
              <strong>01</strong>
            </section>
            <section>
              <strong>01</strong>
            </section>
            <section>
              <strong>01</strong>
            </section>
            <section>
              <strong>01</strong>
            </section>
            <section>
              <strong>01</strong>
            </section>
            <section>
              <strong>01</strong>
            </section>
          </Tables>

          <h1>
            <MdLocalAtm />
            Pedidos
          </h1>

          <Orders>
            <section>
              <strong style={{ color: '#d92323' }}>Abertos</strong>
              <h2>5</h2>
            </section>
            <section>
              <strong style={{ color: '#0A63EA' }}>Produção</strong>
              <h2>8</h2>
            </section>
            <section>
              <strong style={{ color: '#029E08' }}>Finalizados</strong>
              <h2>10</h2>
            </section>
          </Orders>
        </Content>
      </Container>
    </>
  );
};

export default Management;
