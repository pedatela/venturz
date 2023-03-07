import React from 'react';
import history from '../../services/history'
import { toast } from 'react-toastify'

import api from '../../services/api'
import FormShop from '../../components/FormShop';


export default function CreateShop() {


  async function handleCreate(createData) {
    try {
      const { data } = await api.post('/shops', createData)
      toast[data.type](data.msg)
      history.push(`/seller-shop`)
    } catch (error) {
      toast.error(error.msg)
    }
  }

  return (
    <FormShop button_name='Create Shop' shop_id={null} handleSubmit={handleCreate} initialData={null} />
  );
}