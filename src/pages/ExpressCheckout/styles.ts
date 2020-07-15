import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 50px auto;

  display: flex;
  flex-direction: column;

  @media(min-width: 900px) {
    flex-direction: row;
  }
`;

export const ShoppingCart = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  padding: 30px;

  h2 {
    margin-bottom: 30px;
  }

`;

export const ProductItem = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px 0;
  border-bottom: 1px solid #cfcfd1;
`;

export const ProductImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

export const ProductDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    font-weight: bold;
    font-size: 18px;
  }
  span {
    color: #68696e;
  }
`;

export const ProductQuantity = styled.div`
  display: flex;
  align-items: center;
  height: 100%;

  input {
    width: 50px;
    border: 1px solid #40424a;
    border-radius: 4px;
    text-align: center;
  }

  button {
    border: 0;
    background: transparent;
    color: #000;
    font-size: 22px;
    padding: 10px;
  }
`;

export const ProductAmount = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 20px;
`;

export const ProductRemove = styled.button`
  border: 0;
  background: transparent;
  font-weight: bold;
  font-size: 18px;
`;

export const Footer = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    display: flex;
    align-items: center;
    border: 0;
    background: transparent;
    font-weight: bold;
    color: #2d7aee;
    font-size: 18px;
  }

  div {
    span {
      color: #40424a;
      font-size: 14px;

      strong {
        color: #000;
        font-size: 20px;
      }
    }
  }
`;

export const CardDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 400px;
  background: #40424a;
  border-radius: 10px;
  padding: 30px;
  box-shadow: -2px 3px 28px -1px rgba(0,0,0,0.75);

  h2 {
    color: #fff;
  }

`;

export const PaymentForm = styled.div`
  margin: 30px auto;

  p {
    color: #b0b1b4;
    margin-bottom: 20px;
    font-weight: bold;
  }

  form  {
    display: flex;
    flex-direction: column;

    input {
      font-weight: bold;
      background: transparent;
      border: 0;
      border-bottom: 1px solid #b0b1b4;
      color: #6d6f76;
      padding: 5px;
      margin-top: 20px;
      width: 100%;
    }

    button {
      font-weight: bold;
      margin-top: 20px;
      padding: 15px;
      border-radius: 4px;
      color: #fff;
      background: #2d7aee;
      font-size: 16px;

    }
  }
`;
