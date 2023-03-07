import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup'


import { Wrapper, Content } from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('Name is Required'),
  stock_count: Yup.string().required('Stock Count is required'),
  price: Yup.string().required('Price is required'),
})

export default function FormBook({ button_name, shop_id, handleSubmit, initialData }) {
  const data = new FormData()


  function handleProgress(e) {
    data.append('file', e.target.files[0])
  }


  function handleSubmitForm({ name, stock_count, price }) {
    if (shop_id) {
      createBook({ name, stock_count, price })
    } else {
      editBooks({ name, stock_count, price })
    }

  }

  function createBook({ name, stock_count, price }) {
    data.append('name', name)
    data.append('price', price)
    data.append('shop_id', shop_id)
    data.append('stock_count', stock_count)
    handleSubmit(data)
  }

  function editBooks({ name, stock_count, price }) {
    handleSubmit({ name, stock_count, price })
  }

  return (
    <Wrapper>
      <Content>
        <Form initialData={initialData} schema={schema} onSubmit={handleSubmitForm}>
          <Input name="name" type="text" placeholder="Book Name" />
          <Input name="stock_count" type="number" placeholder="Stock Count" />
          <Input name="price" type="text" placeholder="Price" />
          {shop_id &&
            <input name="file" type='file' onChange={handleProgress} />
          }
          <button type="submit">{button_name}</button>
        </Form>
      </Content>
    </Wrapper>
  );
}