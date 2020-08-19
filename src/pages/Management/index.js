import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { MdRestaurant, MdLocalAtm } from 'react-icons/md';
import { useHistory } from 'react-router-dom';
import {
  Container,
  Content,
  Tables,
  Orders,
  Table,
  ClientInfo,
  DropDown,
} from './styles';
import MainBar from '../../components/MainBar';
import MoreButton from '../../components/MoreButton';
import api from '../../services/api';
import formatDate from '../../utils/formatDate';
import formatValue from '../../utils/formatValue';

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

  async function handleEject(id, num, estado) {
    try {
      // const answer = window.confirm(
      //   'Só é possível liberar a mesa se o cliente já deixou o local.\n Deseja realmente liberar a mesa?',
      // );

      // if (answer === true) {
      //   await api.put(`register/${id}`);

      //   alert(`Mesa ${num} liberada!`);

      //   history.push('/');
      // } else {
      //   getOrders();
      // }
      // eslint-disable-next-line camelcase
      const flag_to_vacancy = true;

      await api.post(`table/update/${id}`, {
        num,
        estado,
        flag_to_vacancy,
      });
    } catch (error) {
      console.log(`Erro ao tentar liberar mesa: ${error}`);
    }
  }

  async function handlePayment(id) {
    try {
      const response = await api.put(`table/handle_payment/${id}`);

      if (response.data === 'Você ainda não realizou pedidos') {
        alert('O cliente ainda não possui débitos!');
      } else {
        alert('Pagamento realizado!');
      }
    } catch (error) {
      console.log(`Erro ao tentar realizar o pagamento: ${error}`);
    }
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  useEffect(() => {
    function getTables() {
      api
        .get('table')
        .then((response) => {
          setTables(response.data[0]);
        })
        .catch((error) => {
          console.log(`Algo deu errado ao carregar mesas: ${error}`);
        });
    }

    // setInterval(() => getTables(), 100000);
    getTables();
  }, []);

  useEffect(() => {
    // setInterval(() => getOrders(), 100000);
    getOrders();
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
              if (table.estado === 'Pagar') {
                return (
                  <>
                    <Table key={table._id} wantToPay>
                      <>
                        <section>
                          <strong>
                            {table.num}
                            <MoreButton>
                              <DropDown>
                                <button
                                  type="button"
                                  onClick={() => {
                                    handleEject(
                                      table._id,
                                      table.num,
                                      table.estado,
                                    );
                                  }}
                                >
                                  <p>Liberar mesa</p>
                                </button>
                                <button
                                  type="button"
                                  onClick={() => handlePayment(table._id)}
                                >
                                  <p>Realizar pagamento</p>
                                </button>
                              </DropDown>
                            </MoreButton>
                          </strong>
                        </section>
                        <ClientInfo>
                          <p>
                            Cliente:{' '}
                            <strong>
                              {capitalizeFirstLetter(table.registered_client)}
                            </strong>
                          </p>
                          <p>
                            Horário:{' '}
                            <strong>{formatDate(table.registered_time)}</strong>
                          </p>
                          <p>
                            Total: <strong>{formatValue(table.total)}</strong>
                          </p>
                        </ClientInfo>
                      </>
                    </Table>
                  </>
                );
              }

              if (table.estado === 'Ocupada')
                return (
                  <>
                    <Table key={table._id} hasCustomer>
                      <>
                        <section>
                          <strong>
                            {table.num}
                            <MoreButton>
                              <DropDown>
                                <button
                                  type="button"
                                  onClick={() => {
                                    handleEject(
                                      table._id,
                                      table.num,
                                      table.estado,
                                    );
                                  }}
                                >
                                  <p>Liberar mesa</p>
                                </button>
                                <button
                                  type="button"
                                  onClick={() => handlePayment(table._id)}
                                >
                                  <p>Realizar pagamento</p>
                                </button>
                              </DropDown>
                            </MoreButton>
                          </strong>
                        </section>
                        <ClientInfo>
                          <p>
                            Cliente:{' '}
                            <strong>
                              {capitalizeFirstLetter(table.registered_client)}
                            </strong>
                          </p>
                          <p>
                            Horário:{' '}
                            <strong>{formatDate(table.registered_time)}</strong>
                          </p>
                          <p>
                            Total: <strong>{formatValue(table.total)}</strong>
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
