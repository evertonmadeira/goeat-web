import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { MdRestaurant, MdLocalAtm, MdEject } from 'react-icons/md';
import { useHistory } from 'react-router-dom';
import {
  Container,
  Content,
  Tables,
  Orders,
  Table,
  ClientInfo,
} from './styles';
import MainBar from '../../components/MainBar';
import api from '../../services/api';
import formatDate from '../../utils/formatDate';

const Management = () => {
  const [tables, setTables] = useState([]);
  const [countOrders, setCountOrders] = useState([]);
  const { countOpened, countMaking, countFinished } = countOrders;
  const history = useHistory();

  async function getOrders() {
    try {
      const response = await api.get('order/status');
      setCountOrders(response.data[0]);
    } catch (error) {
      console.log(`Algo deu errado ao carregar pedidos: ${error}`);
    }
  }

  async function handleEject(id, num) {
    const answer = window.confirm(
      'Só é possível liberar a mesa se o cliente já deixou o local.\n Deseja realmente liberar a mesa?',
    );

    if (answer === true) {
      await api.put(`register/${id}`);

      alert(`Mesa ${num} liberada!`);

      history.push('/kitchen');
    } else {
      getOrders();
    }
  }

  useEffect(() => {
    api
      .get('table')
      .then((response) => {
        setTables(response.data);
      })
      .catch((error) => {
        console.log(`Algo deu errado ao carregar mesas: ${error}`);
      });
  }, []);

  useEffect(() => {
    setInterval(() => getOrders(), 5000);
  }, []);

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
            {tables.map((table) => {
              if (table.estado === 'Livre') {
                return (
                  <Table key={table._id}>
                    <>
                      <section>
                        <strong>{table.num}</strong>
                      </section>
                      <ClientInfo vacancy />
                    </>
                  </Table>
                );
              }
              return (
                <>
                  <Table key={table._id} hasCustomer>
                    <>
                      <section>
                        <strong>
                          {table.num}
                          <button
                            onClick={() =>
                              handleEject(table.register_id, table.num)}
                            type="button"
                          >
                            <MdEject size={24} style={{ color: '#d92323' }} />
                          </button>
                        </strong>
                      </section>
                      <ClientInfo>
                        <p>
                          Cliente: <strong>{table.registered_client}</strong>
                        </p>
                        <p>
                          Horário:{' '}
                          <strong>{formatDate(table.registered_time)}</strong>
                        </p>
                      </ClientInfo>
                    </>
                  </Table>
                </>
              );
            })}
          </Tables>

          <h1>
            <MdLocalAtm />
            Pedidos
          </h1>
          <Orders>
            <section>
              <strong style={{ color: '#d92323' }}>Abertos</strong>
              <h2>{countOpened}</h2>
            </section>

            <section>
              <strong style={{ color: '#0A63EA' }}>Produção</strong>
              <h2>{countMaking}</h2>
            </section>
            <section>
              <strong style={{ color: '#029E08' }}>Finalizados</strong>
              <h2>{countFinished}</h2>
            </section>
          </Orders>
        </Content>
      </Container>
    </>
  );
};

export default Management;
