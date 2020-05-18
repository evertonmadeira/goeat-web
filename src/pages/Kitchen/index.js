import React from 'react';
import MainBar from '../../components/MainBar';
import { Container, Card } from './styles';
import OrderCard from '../../components/OrderCard';

const Kitchen = () => {
  return (
    <>
      <MainBar />
      <Container>
        <Card>
          <h1>Abertos</h1>
          <OrderCard />
          <OrderCard />
          <OrderCard />
        </Card>
        <Card>
          <h1>Produção</h1>
          <OrderCard />
          <OrderCard />
          <OrderCard />
        </Card>
        <Card>
          <h1>Finalizados</h1>
          <OrderCard />
          <OrderCard />
          <OrderCard />
        </Card>
      </Container>
    </>
  );
};

export default Kitchen;
