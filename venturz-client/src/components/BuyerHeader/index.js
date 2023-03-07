import React from 'react';
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'


import { MdShoppingBasket } from 'react-icons/md'

import { Container, Cart, Profile } from './styles';
import { signOut } from '../../store/modules/auth/actions';

import logo from '../../assets/images/logo.png';


export default function Header() {
  const dispatch = useDispatch()
  const profile = useSelector(state => state.auth)
  const cartSize = useSelector(state => state.cart.length)

  function handleSignOut() {
    dispatch(signOut())
  }

  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Venturz" ></img>
      </Link>

      <nav>
        <Link to="/buyer-dashboard">Shops</Link>
      </nav>

      <Cart to="/cart">
        <div>
          <strong>Cart</strong>
          <span>{cartSize} items</span>
        </div>
        <MdShoppingBasket size={36} color='#FFF' />
      </Cart>
      <aside>
        <button onClick={handleSignOut} type="button">Logout</button>
      </aside>
    </Container>
  );
}