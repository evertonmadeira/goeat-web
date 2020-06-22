import styled, { css } from 'styled-components';

const hasCustomer = css`
  background: #ff6666;
  border: 1px solid #d92323;

  strong {
    color: #d92323;
  }
`;

const vacancy = css`
  background: transparent;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 1024px;

  h1 {
    color: #64002a;
    /* margin-top: 50px; */
    margin: 50px 0 10px 0;
    display: flex;
    align-items: center;

    svg {
      margin-right: 17px;
    }
  }
`;

export const Table = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  section {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 2;

    height: 80px;
    width: 80px;
    background: #fff;

    border: 1px solid #64002a;
    box-sizing: border-box;
    border-radius: 10px;

    box-shadow: 0px 4.45557px 17.1573px rgba(0, 0, 0, 0.14),
      0px 14.9653px 57.6277px rgba(0, 0, 0, 0.083455),
      0px 67px 258px rgba(0, 0, 0, 0.056545);

    margin: 20px;

    strong {
      font-size: 48px;
      font-style: normal;
      color: #64002a;

      button {
        width: 0;
        background: transparent;
        border: none;
        position: relative;
        bottom: 32px;
      }
    }

    ${(props) => props.hasCustomer && hasCustomer}
  }
`;

export const Tables = styled.div`
  width: 100%;
  max-width: 1024px;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: stretch;
  flex-direction: row;
`;

export const Orders = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  section {
    margin: 10px 30px 30px 30px;
    background: #fff;
    border-radius: 10px;
    width: 200px;
    height: 142px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    box-shadow: 0px 2.79493px 6.80745px rgba(100, 0, 42, 0.29),
      0px 6.7166px 16.3593px rgba(100, 0, 42, 0.208468),
      0px 12.6468px 30.803px rgba(100, 0, 42, 0.172871),
      0px 22.5597px 54.9473px rgba(100, 0, 42, 0.145),
      0px 42.1954px 102.773px rgba(100, 0, 42, 0.117129),
      0px 101px 246px rgba(100, 0, 42, 0.0815322);

    strong {
      font-size: 24px;
      margin-bottom: 20px;
    }

    h2 {
      margin-bottom: 28px;
      font-size: 48px;
      color: #3a3636;
    }
  }
`;

export const ClientInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  width: 160px;
  height: 90px;
  margin: 10px;

  background: #ded5d7;
  border-radius: 8px;

  position: relative;
  z-index: 1;
  bottom: 64px;

  p {
    padding: 4px 8px;
    color: #6b6768;
  }

  ${(props) => props.vacancy && vacancy}
`;
