import styled from 'styled-components';
import { shade } from 'polished';
import img from '../../assets/background-management.png';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Background = styled.div`
  background: url(${img}) no-repeat center;
  width: 100%;
  height: 140px;
  background-size: cover;
`;

export const Header = styled.header`
  display: flex;

  width: 100%;
  max-width: 1024px;
  height: 124px;

  margin-top: -60px;
  background: #64002a;

  align-items: center;
  justify-content: space-between;

  border-radius: 10px;
  box-shadow: 0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802),
    0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725),
    0px 12.5216px 10.0172px rgba(0, 0, 0, 0.035),
    0px 22.3363px 17.869px rgba(0, 0, 0, 0.0417275),
    0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0503198),
    0px 100px 80px rgba(0, 0, 0, 0.07);

  h1 {
    margin-left: 28px;
    font-weight: bold;
    color: #fff;
  }
`;

export const NavBar = styled.div`
  margin-top: 70px;

  a {
    color: #fff;
    text-decoration: none;

    margin-right: 24px;

    &:hover {
      color: ${shade(0.2, '#fff')};
    }
  }
`;
