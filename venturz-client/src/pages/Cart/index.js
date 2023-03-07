import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md'

import { formatPrice } from '../../util/format'
import * as CartActions from '../../store/modules/cart/action'
import { toast } from 'react-toastify'

import { Container, ProductTable, Total } from './styles';

import { convertArrayOfBytesToBase64 } from '../../util/covertArrayOfBytesToBase64';

import api from '../../services/api'


export default function Cart() {
  const total = useSelector(state => formatPrice(state.cart.reduce((total, product) => {
    return total + product.data.price * product.amount
  }, 0)
  ));

  const cart = useSelector(state => state.cart.map(product => ({
    ...product,
    subtotal: formatPrice(product.data.price * product.amount)
  })))

  const dispatch = useDispatch()

  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.data.id, product.amount + 1))
  }

  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.data.id, product.amount - 1))
  }

  async function createOrder() {
    const covertedData = cart.map(element => ({
      quantity: element.amount,
      price: (element.data.price * element.amount),
      book_id: element.data.id,
      shop_id: element.data.shop_id
    }))
    const { data } = await api.post('/orders', covertedData)
    toast[data.type](data.msg)
  }

  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>BOOK</th>
            <th>QUANTITY</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {cart.map(book => (
            <tr key={book.data.id}>
              <td>
                <img src={`data:image/jpeg;base64,${convertArrayOfBytesToBase64(book.data.image.data)}`}
                  alt={book.data.name}>
                </img>
              </td>
              <td>
                <strong>{book.data.title}</strong>
                <span>{book.priceFormatted}</span>
              </td>
              <td>
                <div>
                  <button type="button" onClick={() => decrement(book)}>
                    <MdRemoveCircleOutline size={20} color="#7159c1" />
                  </button>
                  <input type="number" readOnly value={book.amount}></input>
                  <button type="button" onClick={() => increment(book)}>
                    <MdAddCircleOutline size={20} color="#7159c1" />
                  </button>
                </div>
              </td>
              <td>
                <strong>{book.subtotal}</strong>
              </td>
              <td>
                <button type="button" onClick={() => dispatch(CartActions.removeFromCart(book.id))}>
                  <MdDelete size={20} color="#7159c1" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>
      <footer>
        <button onClick={() => createOrder()} type="button">Buy</button>
        <Total>
          <span>TOTAL</span>
          <strong>{total}</strong>
        </Total>
      </footer>
    </Container>
  );
}