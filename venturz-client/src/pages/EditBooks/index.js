import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { toast } from 'react-toastify'


import history from '../../services/history'
import api from '../../services/api'
import FormBook from '../../components/FormBook';


export default function EditBooks() {
  const { book_id } = useParams();

  const [book, setBook] = useState([])

  async function handleEdit(editData) {

    try {
      const { data } = await api.put(`/books/${book_id}`, editData)
      console.log(data)
      toast[data.type](data.msg)
      history.push(`/seller-books/${data.data.shop_id}`)
    } catch (error) {
      toast.error(error.msg)
    }
  }

  useEffect(() => {
    async function loadBook() {
      const { data } = await api.get(`/books/${book_id}`);
      setBook(data.data)
    }
    loadBook();
  }, [book_id]);

  return (
    <FormBook button_name='Edit Book' shop_id={null} handleSubmit={handleEdit} initialData={book} />
  );
}