import React from 'react';
import { useParams } from "react-router-dom";
import history from '../../services/history'
import { toast } from 'react-toastify'

import api from '../../services/api'
import FormBook from '../../components/FormBook';


export default function CreateBooks() {

  const { shop_id } = useParams();

  async function handleCreate(createData) {
    try {
      const { data } = await api.post('/books', createData)
      toast[data.type](data.msg)
      history.push(`/seller-books/${shop_id}`)
    } catch (error) {
      toast.error(error.msg)
    }
  }

  return (
    <FormBook button_name='Create Book' shop_id={shop_id} handleSubmit={handleCreate} initialData={null} />
  );
}