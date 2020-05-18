import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;

  width: 100%;
`;

export const Card = styled.div`
  background: transparent;
  width: 100%;
  width: 300px;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 20px;

  h1 {
    color: #64002a;
  }
`;
