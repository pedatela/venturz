import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    padding: 0 30px;
    margin-bottom: 150px;

`;

export const Content = styled.div`
    height: 64px;
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    nav{
        display: flex;
        align-items: center;

        img {
            margin-right: 20px;
            padding-right: 20px;
            max-width: 200px;
            max-height: 200px;
        }

        a{
            text-decoration: none; 
            margin-right: 30px;
            font-weight: bold;
            color: #FFF; 
            font-size: 20px;
        }
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

