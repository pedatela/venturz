import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { darken } from 'polished';



export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0;

  img {
    margin-right: 20px;
    padding-right: 20px;
    max-width: 200px;
    max-height: 200px;
  }
  
  nav {
    display: flex;
    align-items: center;

    a{
        font-weight: bold;
        color: #7159c1;
    }

    aside{
        display: flex;
        align-items: center;
    }

    button{
      padding: 0 15px;
      margin: 10px;
      height: 30px;
      background: #191920;
      font-weight: bold;
      color: #FFF;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: backgorund 0.2s;

      &:hover{
        background: ${darken(0.03, '#191920')}
      }
    }

  }
`;

export const Profile = styled.div`
    display: flex;
    margin-left: 20px;
    padding-left: 20px;

    div{
        text-align: right;
        margin-right: 10px;
    }
    strong{
        display: block;
        color: #fff;
    }

    a{
        display: block;
        margin-top: 2px;
        font-size: 12px;
        color: #999;
    }

    img{
        width: 32px;
        height: 32px;
        border-radius: 50%;
    }

`;


export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity .2s;

  &:hover{
    opacity: 0.7;
  }

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #FFF;
    }

    span {
      font-size: 12px;
      color: #999;
    }
  }
`;