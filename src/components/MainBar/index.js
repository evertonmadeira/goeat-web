import React from 'react';
import { GiHotMeal } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { Header, NavBar, Background, Container } from './styles';

const MainBar = () => {
  return (
    <>
      <Container>
        <Background />
        <Header>
          <h1>
            GoEat. <GiHotMeal color="white" />
          </h1>
          <NavBar>
            <Link to="/">Gerência</Link>
            <Link to="/kitchen">Cozinha</Link>
          </NavBar>
        </Header>
      </Container>
    </>
  );
};

export default MainBar;
