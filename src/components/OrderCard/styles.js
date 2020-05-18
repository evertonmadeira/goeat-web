import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  width: 100%;
  width: 300px;
  height: 200px;

  background: #fff;
  border-radius: 10px;
  margin: 20px 0 20px 0;
  padding: 10px;

  box-shadow: 0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802),
    0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725),
    0px 12.5216px 10.0172px rgba(0, 0, 0, 0.035),
    0px 22.3363px 17.869px rgba(0, 0, 0, 0.0417275),
    0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0503198),
    0px 100px 80px rgba(0, 0, 0, 0.07);

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
  justify-content: space-between;

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
