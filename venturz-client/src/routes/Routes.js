import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'

import AuthLayout from '../layouts/auth'
import BuyerLayout from '../layouts/buyer'
import SellerLayout from '../layouts/seller'

import { store } from '../store'

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const { signed, is_seller } = store.getState().auth;

  if (!signed && isPrivate) {
    return <Redirect to='/' />
  }

  if (signed && !is_seller && !isPrivate) {
    return <Redirect to='/buyer-dashboard' />
  }

  if (signed && is_seller && !isPrivate) {
    return <Redirect to='/seller-shop' />
  }

  let Layout;
  if (!signed) {
    Layout = AuthLayout
  } else {
    if (is_seller) {
      Layout = SellerLayout
    } else {
      Layout = BuyerLayout
    }
  }

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  )
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired
}

RouteWrapper.defaultProps = {
  isPrivate: false
}