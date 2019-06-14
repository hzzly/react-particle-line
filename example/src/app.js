import React from 'react'
import { render } from 'react-dom'
import styled from 'styled-components'
import ReactParticleLine from 'react-particle-line'

const Home = styled.div`
  height: 100vh;
`;

const App = () => <Home><ReactParticleLine /></Home>
render(<App />, document.getElementById('root'))