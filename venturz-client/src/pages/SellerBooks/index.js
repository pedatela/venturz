import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

import { MdDelete, MdEdit } from 'react-icons/md'
import { useParams } from "react-router-dom";

import { convertArrayOfBytesToBase64 } from '../../util/covertArrayOfBytesToBase64';
import { formatPrice } from '../../util/format'


import api from '../../services/api'

import { Container, ProductTable } from './styles';


export default function SellerBooks() {
  const [books, setBooks] = useState([])
  const { shop_id } = useParams();

  useEffect(() => {
    loadBooks();
  }, []);

  async function loadBooks() {
    const { data } = await api.get(`/shops/${shop_id}/books`);
    setBooks(data.data)
  }

  async function deleteBook(id) {
    const { data } = await api.delete(`/books/${id}`);
    toast[data.type](data.msg)
    loadBooks()
  }



  return (
    <Container>
      <header>
        <Link to={`/create-book/${shop_id}`}>
          <button type="button">Create new Book</button>
        </Link>

      </header>

      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>STOCK COUNT</th>
            <th>Price</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {books.map(book => (
            <tr key={book.id}>
              {book.image ?
                <td>
                  <img src={`data:image/jpeg;base64,${convertArrayOfBytesToBase64(book.image.data)}`}
                    alt={book.name}>
                  </img>
                </td>
                :
                <td>
                  <img src='https://api.dicebear.com/5.x/identicon/svg?seed=Shadow'
                    alt={book.name}>
                  </img>
                </td>
              }
              <td>
                <strong>{book.name}</strong>
              </td>
              <td>
                <span>{book.stock_count}</span>
              </td>
              <td>
                <strong>{formatPrice(book.price)}</strong>
              </td>
              <td>
                <button onClick={() => deleteBook(book.id)} type="button" >
                  <MdDelete size={20} color="#7159c1" />
                </button>

                <Link to={`/edit-book/${book.id}`}>
                  <button type="button">
                    <MdEdit size={20} color="#7159c1" />
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>
    </Container>
  );
}