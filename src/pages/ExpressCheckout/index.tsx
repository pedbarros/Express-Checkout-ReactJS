import React, { useState } from 'react';
import Cards from 'react-credit-cards';
import {
  Container, ShoppingCart, ProductItem, ProductImage, ProductDescription, ProductQuantity, ProductAmount, ProductRemove,
  CardDetails, PaymentForm,
} from './styles';

const ExpressCheckout: React.FC = () => {
  const [checkout, setCheckout] = useState({
    cvc: '',
    expiry: '',
    name: '',
    number: '',
  });

  function handleSubmitData(e: React.FormEvent<EventTarget>) {
    e.preventDefault();
    console.log(checkout);
  }

  function handleInputChange(e: React.FormEvent<EventTarget>) {
    const { name, value } = e.target as HTMLInputElement;
    setCheckout({ ...checkout, [name]: value });
  }

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <Container>
      <ShoppingCart>
        <h2>Shopping Cart</h2>
        <ProductItem>
          <ProductImage src="https://www.piolafotografia.com.br/wp-content/uploads/2014/08/fotografia-de-produto-comida-gastronomia-profissional-regiao-abc-sao-caetano-do-sul-pudim-800x532.jpg" alt="Produto" />
          <ProductDescription>
            <p>Chicken mono</p>
            <span>Aqui é uma descrição...</span>
          </ProductDescription>
          <ProductQuantity>
            <button type="button">-</button>
            <input type="text" value={10} />
            <button type="button">+</button>
          </ProductQuantity>
          <ProductAmount>
            R$9,00
          </ProductAmount>
          <ProductRemove>
            X
          </ProductRemove>
        </ProductItem>
        <ProductItem>
          <ProductImage src="https://www.piolafotografia.com.br/wp-content/uploads/2014/08/fotografia-de-produto-comida-gastronomia-profissional-regiao-abc-sao-caetano-do-sul-pudim-800x532.jpg" alt="Produto" />
          <ProductDescription>
            <p>Chicken mono</p>
            <span>Aqui é uma descrição...</span>
          </ProductDescription>
          <ProductQuantity>
            <button type="button">-</button>
            <input type="text" value={10} />
            <button type="button">+</button>
          </ProductQuantity>
          <ProductAmount>
            R$9,00
          </ProductAmount>
          <ProductRemove>
            X
          </ProductRemove>
        </ProductItem>
        <ProductItem>
          <ProductImage src="https://www.piolafotografia.com.br/wp-content/uploads/2014/08/fotografia-de-produto-comida-gastronomia-profissional-regiao-abc-sao-caetano-do-sul-pudim-800x532.jpg" alt="Produto" />
          <ProductDescription>
            <p>Chicken mono</p>
            <span>Aqui é uma descrição...</span>
          </ProductDescription>
          <ProductQuantity>
            <button type="button">-</button>
            <input type="text" value={10} />
            <button type="button">+</button>
          </ProductQuantity>
          <ProductAmount>
            R$9,00
          </ProductAmount>
          <ProductRemove>
            X
          </ProductRemove>
        </ProductItem>
      </ShoppingCart>
      <CardDetails>
        <h2>Card Details</h2>

        <PaymentForm>
          <p>Card Type</p>
          <Cards
            cvc={checkout.cvc}
            expiry={checkout.expiry}
            name={checkout.name}
            number={checkout.number}
          />
          <form onSubmit={handleSubmitData}>
            <input
              name="name"
              placeholder="Name on card"
              onChange={handleInputChange}
            />
            <input
              type="tel"
              name="number"
              placeholder="Card Number"
              onChange={handleInputChange}
            />
            <input
              name="cvc"
              placeholder="CVC/CVV"
              onChange={handleInputChange}
            />

            <button type="submit">Check out</button>

          </form>
        </PaymentForm>
      </CardDetails>
    </Container>
  );
};

export default ExpressCheckout;
