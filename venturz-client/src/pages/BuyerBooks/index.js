import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { useParams } from "react-router-dom";
import { MdAddShoppingCart } from 'react-icons/md'

import api from '../../services/api'
import { formatPrice } from '../../util/format'
import { convertArrayOfBytesToBase64 } from '../../util/covertArrayOfBytesToBase64';

import { ProductList } from './styles';

import * as CartActions from '../../store/modules/cart/action'

export default function BuyerDashboard() {
  const { shop_id } = useParams();
  const [books, setBooks] = useState([])

  const dispatch = useDispatch();


  useEffect(() => {
    async function loadBooks() {
      const response = await api.get(`/shops/${shop_id}/books`);

      const data = response.data.data.map(book => ({
        ...book,
        priceFormatted: formatPrice(book.price)
      }))
      setBooks(data)
    }
    loadBooks();
  }, [shop_id]);

  function handleAddProduct(id, stock_count) {
    dispatch(CartActions.addToCartRequest(id, stock_count))
  }

  return (
    <ProductList>
      {books.map(book => (
        <li key={book.id}>
          <img src={`data:image/jpeg;base64,${convertArrayOfBytesToBase64(book.image.data)}`}
            alt={book.name}>
          </img>
          <strong>{book.name}</strong>
          <span>{book.priceFormatted}</span>
          <button type="button" onClick={() => handleAddProduct(book.id, book.stock_count)}>
            <div>
              <MdAddShoppingCart size={16} color="#FFF" />{book.stock_count}
            </div>
            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
      ))}
    </ProductList>
  );
}