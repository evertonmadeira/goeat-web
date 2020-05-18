import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';

import { Container, Button, Content } from './styles';

const OrderCard = () => {
  return (
    <Container>
      <Content>
        <strong>
          MESA: <p>05</p>
        </strong>
        <strong>
          PEDIDO:
          <p>2x Picanha argentina</p>
        </strong>
        <strong>
          OBS: <p>Ao ponto</p>
        </strong>
      </Content>
      <Button type="button">
        <MdKeyboardArrowRight size={30} />
      </Button>
    </Container>
  );
};

export default OrderCard;
