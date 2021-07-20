import React from 'react'

import Header from '../components/Header'
import Video from '../components/Video'
import Chat from '../components/Chat'

import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <main>
        <Header />
        <Video />
      </main>
      <aside>
        <Chat />
      </aside>
    </Container>
  )
}

export default Home
