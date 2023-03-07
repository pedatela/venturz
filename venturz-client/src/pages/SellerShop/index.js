import React, { useEffect, useState } from 'react';
import { MdEdit, MdDelete } from 'react-icons/md'
import { toast } from 'react-toastify'


import { Link } from 'react-router-dom'

import api from '../../services/api'

import { Container, ProductTable } from './styles';


export default function SellerShop() {

  const [shops, setShop] = useState([])


  useEffect(() => {
    loadShops();
  }, []);

  async function loadShops() {
    const { data } = await api.get('/shops');
    setShop(data.data)
  }


  async function deleteShop(id) {
    const { data } = await api.delete(`/shops/${id}`);
    toast[data.type](data.msg)
    loadShops()
  }


  return (
    <Container>
      <header>
        <Link to='create-shop'>
          <button type="button">Create Shop</button>
        </Link>
      </header>

      <ProductTable>
        <thead>
          <tr>
            <th>Name</th>
            <th>Created At</th>
            <th>List of Books</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {shops.map(shop => (
            <tr key={shop.id}>
              <td>
                <strong>{shop.name}</strong>
              </td>
              <td>
                <span>{shop.createdAt}</span>
              </td>
              <td>
                <Link to={`/seller-books/${shop.id}`}>Books</Link>
              </td>
              <td>
                <button onClick={() => deleteShop(shop.id)} type="button" >
                  <MdDelete size={20} color="#7159c1" />
                </button>
                <Link to={`/edit-shop/${shop.id}`}>
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