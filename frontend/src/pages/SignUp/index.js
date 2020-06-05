import React from 'react';
import { Link } from 'react-router-dom';

// import { Container } from './styles';
import logo from '~/assets/logo.svg';

export default function SignUp() {
  return (
    <>
      <img src={logo} alt="" />
      <form>
        <input type="text" placeholder="seu Nome" />
        <input type="email" placeholder="seu e-mail" />
        <input type="password" placeholder="sua senha secreta" />

        <button type="submit">Criar Conta</button>
        <Link to="/">Já tenho login</Link>
      </form>
    </>
  );
}
