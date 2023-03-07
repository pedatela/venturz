import { Switch } from 'react-router-dom'
import React from 'react'
import Route from './Routes'

import BuyerShops from '../pages/BuyerShops'
import BuyerBooks from '../pages/BuyerBooks'

import SellerShop from '../pages/SellerShop'
import SellerBooks from '../pages/SellerBooks'
import CreateBooks from '../pages/CreateBooks'
import EditBooks from '../pages/EditBooks'
import CreateShop from '../pages/CreateShop'
import EditShop from '../pages/EditShop'
import SellerOrders from '../pages/SellerOrders'

import SignUp from '../pages/SignUp'
import SignIn from '../pages/SignIn'

import Home from '../pages/Home'
import Cart from '../pages/Cart'

export default function Routes() {
  return (
    <Switch>
      <Route path='/' exact component={SignIn} />
      <Route path="/home" isPrivate component={Home} />
      <Route path="/cart" isPrivate component={Cart} />
      <Route path='/register' component={SignUp} />
      <Route path='/buyer-dashboard' component={BuyerShops} isPrivate />
      <Route path='/buyer-books/:shop_id' component={BuyerBooks} isPrivate />
      <Route path='/seller-shop' component={SellerShop} isPrivate />
      <Route path='/seller-books/:shop_id' component={SellerBooks} isPrivate />
      <Route path='/create-book/:shop_id' component={CreateBooks} isPrivate />
      <Route path='/edit-book/:book_id' component={EditBooks} isPrivate />
      <Route path='/create-shop' component={CreateShop} isPrivate />
      <Route path='/edit-shop/:shop_id' component={EditShop} isPrivate />
      <Route path='/seller-orders/:shop_id' component={EditShop} isPrivate />
      <Route path='/seller-orders' component={SellerOrders} isPrivate />
    </Switch>
  )
}