import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1000px;
  margin: 50px auto;

  display: flex;


`;

export const ShoppingCart = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  padding: 30px;

`;

export const ProductItem = styled.div`
  margin-top: 40px;
  display: flex;

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }

  div {
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    small {
      color: #d4d5d5;
    }
  }
`;

export const CardDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  background: #40424a;
  border-radius: 10px;
  padding: 30px;

  h2 {
    color: #fff;
  }

`;

export const PaymentForm = styled.div`
  margin: 30px auto;

  form  {
    display: flex;
    flex-direction: column;

    input {
      background: transparent;
      border: 0;
      border-bottom: 1px solid #b0b1b4;
      padding: 5px;
      margin-top: 20px;
      width: 100%;
    }

    button {
      margin-top: 20px;
      padding: 15px;
      border-radius: 4px;
      color: #fff;
      background: #2d7aee;
      font-weight: bold;
      font-size: 16px;

    }
  }
`;
