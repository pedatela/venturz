import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'


import api from '../../services/api'

import { Container, ProductTable } from './styles';

export default function BuyerDashboard() {
  const [shops, setShops] = useState([])


  useEffect(() => {
    async function loadShops() {
      const response = await api.get('/shop/all');
      setShops(response.data.data)
    }
    loadShops();
  }, []);

  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th>Name</th>
            <th>Created At</th>
            <th>List of Books</th>
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
                <Link to={`/buyer-books/${shop.id}`}>
                  <strong>Books</strong>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>
    </Container>
  );
}