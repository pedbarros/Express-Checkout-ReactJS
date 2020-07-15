import React, { useState } from 'react';
import Cards from 'react-credit-cards';
import InputMask from 'react-input-mask';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import {
  Container, ShoppingCart, ProductItem, ProductImage, ProductDescription, ProductQuantity, ProductAmount, ProductRemove,
  CardDetails, PaymentForm, Footer,
} from './styles';

interface Product {
  id: number;
  image: string;
  name: string;
  description: string;
  quantity: number;
  price: number;
}

const ExpressCheckout: React.FC = () => {
  const [checkout, setCheckout] = useState({
    cvc: '',
    expiry: '',
    name: '',
    number: '',
  });

  const [products, setProducts] = useState<Product[]>([{
    id: Math.random(),
    image: 'https://www.piolafotografia.com.br/wp-content/uploads/2014/08/fotografia-de-produto-comida-gastronomia-profissional-regiao-abc-sao-caetano-do-sul-pudim-800x532.jpg',
    name: 'Chicken mono',
    description: 'Aqui é uma descrição',
    quantity: 0,
    price: 4,
  },
  {
    id: Math.random(),
    image: 'https://www.piolafotografia.com.br/wp-content/uploads/2014/08/fotografia-de-produto-comida-gastronomia-profissional-regiao-abc-sao-caetano-do-sul-pudim-800x532.jpg',
    name: 'Chicken mono 22',
    description: 'Aqui é uma descrição',
    quantity: 0,
    price: 2,
  },
  ]);
  function handleSubmitData(e: React.FormEvent<EventTarget>) {
    e.preventDefault();
    console.log(checkout);
  }

  function handleInputChange(e: React.FormEvent<EventTarget>) {
    const { name, value } = e.target as HTMLInputElement;
    setCheckout({ ...checkout, [name]: value });
  }

  function handleIncrement(product: Product) {
    const idx = products.findIndex((p) => p.id === product.id);
    products[idx].quantity += 1;
    setProducts([...products]);
  }

  function handleDecrement(product: Product) {
    const idx = products.findIndex((p) => p.id === product.id);
    products[idx].quantity -= 1;
    setProducts([...products]);
  }

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <Container>
      <ShoppingCart>
        <h2>Shopping Cart</h2>
        {products.map((product) => (
          <ProductItem key={product.name}>
            <ProductImage src={product.image} alt="Produto" />
            <ProductDescription>
              <p>{product.name}</p>
              <span>{product.description}</span>
            </ProductDescription>
            <ProductQuantity>
              <button type="button" onClick={() => handleDecrement(product)}>-</button>
              <input type="text" value={product.quantity} readOnly />
              <button type="button" onClick={() => handleIncrement(product)}>+</button>
            </ProductQuantity>
            <ProductAmount>
              R$
              {product.quantity * product.price}
            </ProductAmount>
            <ProductRemove>
              X
            </ProductRemove>
          </ProductItem>
        ))}
        <Footer>
          <button type="button">
            <AiOutlineArrowLeft />
            <span>Continue Shopping</span>
          </button>
          <div>
            <span>
              Subtotal:
              <strong> R$27,00</strong>
            </span>
          </div>
        </Footer>
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
            <InputMask name="number" placeholder="Card Number" mask="9999 9999 9999 9999" onChange={handleInputChange} />
            <InputMask name="cvc" placeholder="CVC/CVV" mask="999" onChange={handleInputChange} />

            <button type="submit">Check out</button>

          </form>
        </PaymentForm>
      </CardDetails>
    </Container>
  );
};

export default ExpressCheckout;
