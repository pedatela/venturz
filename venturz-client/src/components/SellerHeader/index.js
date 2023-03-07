import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.png';
import { Container, Content, Profile } from './styles';

import { signOut } from '../../store/modules/auth/actions';


export default function SellerHeader() {
  const profile = useSelector(state => state.auth)
  const dispatch = useDispatch()

  function handleSignOut() {
    dispatch(signOut())
  }

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Venturz" />
          <Link to="/seller-shop">Shop</Link>
          <Link to="/seller-orders">Orders</Link>
        </nav>
        <aside>
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to="">Meu Perfil</Link>
            </div>
            <img src={"https://api.dicebear.com/5.x/avataaars/svg?seed=Mittens"} alt="avatar" />
          </Profile>
          <button onClick={handleSignOut} type="button">Logout</button>
        </aside>
      </Content>
    </Container>
  )
}
