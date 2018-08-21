import React, { Component } from 'react'
import logo from './logo.svg'
import profile from './avatar.jpg'
import styled from 'styled-components'

import {
  Container,
  Lead,
  Subhead,
  Divider,
  Samp,
  Avatar,
  BlockLink,
  Flex,
  Box,
  Image
} from 'rebass'

import computer from './computer.png'

import { Subhead as Base } from 'rebass'

const MyDivider = styled(Divider)`
  border: 2px solid;
`

const Link = props => (
  <Subhead
    {...props}
    css={{
      '&:hover': {
        color: 'teal',
        transition: '.2s ease-in-out',
        cursor: 'pointer'
      }
    }}
  />
)

const Project = props => (
  <Subhead
    {...props}
    css={{
      '&:hover': {
        color: 'fuchsia',
        transition: '.2s ease-in-out',
        cursor: 'pointer'
      }
    }}
  />
)

class App extends Component {
  render() {
    return (
      <Container>
        <Subhead children="Tanner Gaucher" fontSize={[4, 5, 6]} ml={5} mt={4} />

        <Subhead
          children="Full Stack Developer"
          fontSize={[4, 5, 6]}
          ml={5}
          mb={4}
        />
        <MyDivider />
        <Link href="https://github.com/tannergaucher" target="_new">
          <Subhead children="GitHub" fontSize={[4, 5, 6]} ml={5} mt={4} />
        </Link>
        <Link href="#!">
          <Subhead children="Writing" fontSize={[4, 5, 6]} ml={5} />
        </Link>
        <Link href="#!">
          <Subhead children="Contact" fontSize={[4, 5, 6]} ml={5} mb={4} />
        </Link>
        <MyDivider w={5} fontSize={[4, 5, 6]} borderColor="black" />
        <Project>
          <Subhead
            children="6 Minute Morning"
            fontSize={[4, 5, 6]}
            ml={5}
            mt={4}
          />
        </Project>
        <Project href="#!">
          <Subhead children="Work Smart" fontSize={[4, 5, 6]} ml={5} />
        </Project>
        <Project>
          <Subhead children="Work{space}" fontSize={[4, 5, 6]} ml={5} />
        </Project>
        <Project>
          <Subhead children="TinderMap" fontSize={[4, 5, 6]} ml={5} mb={5} />
        </Project>
        <MyDivider />
        {/* <Image src={computer} /> */}
      </Container>
    )
  }
}

export default App
