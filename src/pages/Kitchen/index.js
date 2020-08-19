import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { MdKeyboardArrowRight, MdDelete } from 'react-icons/md';
import MainBar from '../../components/MainBar';
import {
  Container,
  Card,
  OrderCard,
  Content,
  Button,
  Title,
  CardContainer,
} from './styles';
import api from '../../services/api';

const Kitchen = () => {
  const [orders, setOrders] = useState([]);
  const history = useHistory();

  async function getOrders() {
    await api
      .get('order/status')
      .then((response) => {
        setOrders(response.data);
      })
      .catch((error) =>
        console.log(`Algo deu errado ao carregar pedidos: ${error}`),
      );
  }

  async function changeStatusToMaking(id) {
    const data = {
      status: 'Em produção',
    };

    await api.put(`order/${id}`, data);

    getOrders();
  }

  async function changeStatusToFinished(id) {
    const data = {
      status: 'Finalizado',
    };

    await api.put(`order/${id}`, data);

    getOrders();
  }

  async function removeOrder(id, table) {
    try {
      const answer = window.confirm('Deseja realmente remover o pedido?');

      if (answer === true) {
        await api.delete(`order/${table}/${id}`);

        getOrders();

        alert(`Pedido removido!`);
      }
    } catch (error) {
      console.log(`Erro ao remover pedido finalizado: ${error}`);
    }
  }

  useEffect(() => {
    // setInterval(() => getOrders(), 5000);
    getOrders();
  }, []);

  return (
    <>
      <MainBar />
      <Container>
        <Title>
          <h1>Abertos</h1>
          <h1>Produção</h1>
          <h1>Finalizados</h1>
        </Title>
        <CardContainer>
          <Card>
            {orders.map((order) => (
              <>
                {order.opened.map((item) => (
                  <OrderCard key={item._id}>
                    <Content>
                      <strong>
                        MESA: <p>{item.mesa}</p>
                      </strong>
                      <strong>
                        PEDIDO {item.order_number}:
                        {item.pedidos.map((pedido) => (
                        <p key={pedido._id}>
                          {pedido.quantity}x {pedido.nome}
                        </p>
                      ))}
                      </strong>
                    </Content>
                    <Button
                      onClick={() => changeStatusToMaking(item._id)}
                      type="button"
                    >
                      <MdKeyboardArrowRight size={30} />
                    </Button>
                  </OrderCard>
                ))}
              </>
            ))}
          </Card>

          <Card>
            {orders.map((order) => (
              <>
                {order.making.map((item) => (
                  <OrderCard key={item._id}>
                    <Content>
                      <strong>
                        MESA: <p>{item.mesa}</p>
                      </strong>
                      <strong>
                        PEDIDO {item.order_number}:
                        {item.pedidos.map((pedido) => (
                        <p key={pedido._id}>
                          {pedido.quantity}x {pedido.nome}
                        </p>
                      ))}
                      </strong>
                    </Content>
                    <Button
                      onClick={() => changeStatusToFinished(item._id)}
                      type="button"
                    >
                      <MdKeyboardArrowRight size={30} />
                    </Button>
                  </OrderCard>
                ))}
              </>
            ))}
          </Card>

          <Card>
            {orders.map((order) => (
              <>
                {order.finished.map((item) => (
                  <OrderCard key={item._id}>
                    <Content>
                      <strong>
                        MESA: <p>{item.mesa}</p>
                      </strong>
                      <strong>
                        PEDIDO {item.order_number}:
                        {item.pedidos.map((pedido) => (
                        <p key={pedido._id}>
                          {pedido.quantity}x {pedido.nome}
                        </p>
                      ))}
                      </strong>
                    </Content>
                    <Button
                      onClick={() => removeOrder(item._id, item.mesa)}
                      type="button"
                    >
                      <MdDelete size={30} />
                    </Button>
                  </OrderCard>
                ))}
              </>
            ))}
          </Card>
        </CardContainer>
      </Container>
    </>
  );
};

export default Kitchen;
