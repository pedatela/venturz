import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup'


import { Wrapper, Content } from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('Name is Required'),
})

export default function FormShop({ button_name, handleSubmit, initialData }) {

  function handleSubmitForm({ name }) {
    handleSubmit({ name })

  }

  return (
    <Wrapper>
      <Content>
        <Form initialData={initialData} schema={schema} onSubmit={handleSubmitForm}>
          <Input name="name" type="text" placeholder="Shop Name" />
          <button type="submit">{button_name}</button>
        </Form>
      </Content>
    </Wrapper>
  );
}