import React, { useEffect, useState } from 'react';

import { formatPrice } from '../../util/format'


import api from '../../services/api'

import { Container, ProductTable } from './styles';


export default function SellerOrders() {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    loadOrders();
  }, []);

  async function loadOrders() {
    const { data } = await api.get(`/orders`);
    setOrders(data.data)
  }



  return (
    <Container>

      <ProductTable>
        <thead>
          <tr>
            <th>BOOK NAME</th>
            <th>STOCK COUNT</th>
            <th>Price</th>
            <th>STATUS</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(orders => (
            <tr key={orders.id}>
              <td>
                <strong>{orders.Book.name}</strong>
              </td>
              <td>
                <span>{orders.quantity}</span>
              </td>
              <td>
                <strong>{formatPrice(orders.price)}</strong>
              </td>
              <td>
                <strong>{orders.status}</strong>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>
    </Container>
  );
}