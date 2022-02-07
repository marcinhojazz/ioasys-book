import React from 'react';
import { Container } from './styles'

type LogoProps = {}

function Logo({}: LogoProps) {
  return (
    <Container>
      <img src="./Logo.png" alt="" />
      <span>Books</span>
    </Container>
  );
}

export default Logo
