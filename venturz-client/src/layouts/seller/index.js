import React from 'react';
import PropTypes from 'prop-types'

import SellerHeader from '../../components/SellerHeader'

import { Wrapper } from './styles';

export default function SellerLayout({ children }) {
  return (
    <Wrapper>
      <SellerHeader />
      {children}
    </Wrapper>
  );
}
SellerLayout.propTypes = {
  children: PropTypes.element.isRequired
}