import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { toast } from 'react-toastify'


import history from '../../services/history'
import api from '../../services/api'
import FormShop from '../../components/FormShop';


export default function EditShop() {
  const { shop_id } = useParams();

  const [shop, setShop] = useState([])

  async function handleEdit(editData) {

    try {
      const { data } = await api.put(`/shops/${shop_id}`, editData)
      toast[data.type](data.msg)
      history.push(`/seller-shop`)
    } catch (error) {
      toast.error(error.msg)
    }
  }

  useEffect(() => {
    async function loadShop() {
      const { data } = await api.get(`/shops/${shop_id}`);
      setShop(data.data)
    }
    loadShop();
  }, [shop_id]);

  return (
    <FormShop button_name='Create Shop' shop_id={null} handleSubmit={handleEdit} initialData={shop} />
  );
}