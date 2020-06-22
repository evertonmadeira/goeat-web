import styled from 'styled-components';
import { shade } from 'polished';
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: transparent;

  justify-content: flex-start;
  align-items: center;

  width: 100%;
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  max-width: 940px;

  h1 {
    color: #64002a;
    margin: 24px 50px 24px 72px;
  }
`;

export const CardContainer = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 1024px;
  margin: 0;
`;

export const Card = styled(PerfectScrollbar)`
  background: transparent;
  width: 100%;
  width: 360px;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin
`;

export const OrderCard = styled.li`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  width: 100%;
  width: 300px;
  height: 200px;

  background: #fff;
  border-radius: 10px;
  margin: 0 0 20px 0;
  padding: 10px;

  box-shadow: 0px 0.76726px 0.21381px rgba(0, 0, 0, 0.0196802),
    0px 2.6501px 1.32008px rgba(0, 0, 0, 0.0282725),
    0px 4.5216px 4.0172px rgba(0, 0, 0, 0.035),
    0px 16.3363px 11.869px rgba(0, 0, 0, 0.0417275),
    0px 35.7776px 27.4221px rgba(0, 0, 0, 0.0503198),
    0px 94px 74px rgba(0, 0, 0, 0.07);

  strong {
    font-size: 20px;
    font-weight: 500;
    color: #242424;

    p {
      color: #5f5a5a;
      font-size: 18px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  width: 100%;
  width: 300px;
  height: 100%;
`;

export const Button = styled.button`
  background: transparent;
  border: none;  

  svg {
    color: #3a3636;
    
    &:hover {color: ${shade(0.2, '#3a3636')};}
  }
  }
`;
