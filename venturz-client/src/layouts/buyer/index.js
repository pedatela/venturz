import React from 'react';
import PropTypes from 'prop-types'

import BuyerHeader from '../../components/BuyerHeader'

import { Wrapper } from './styles';

export default function BuyerLayout({ children }) {
  return (
    <Wrapper>
      <BuyerHeader />
      {children}
    </Wrapper>
  );
}
BuyerLayout.propTypes = {
  children: PropTypes.element.isRequired
}