import React from 'react'

import { Container } from 'react-bootstrap';

import Services from './Services';
import Works from './Works';
import About from './About';

const Main = () => {
  return (
    <main>
    <Container className='d-flex flex-column justify-content-center align-items-center'>
      <Services />
      <Works />
      <About />
    </Container>
    </main>
  )
}

export default Main