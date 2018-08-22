import React, { Component } from 'react'
import logo from './logo.svg'
import profile from './avatar.jpg'
import styled from 'styled-components'

import { Container, Subhead, Image } from 'rebass'

import computer from './computer.png'

const Line = styled.hr`
  border: 2px solid;
  background: black;
`

const ContactLink = styled.a`
  text-decoration: none;
  color: black;
  &:hover {
    color: teal;
    transition: 0.2s ease-in-out;
    cursor: pointer;
  }
`
const ProjectLink = ContactLink.extend`
  &:hover {
    color: fuchsia;
  }
`

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
        <Line />
        <ContactLink href="https://github.com/tannergaucher" target="_new">
          <Subhead children="GitHub" fontSize={[4, 5, 6]} ml={5} mt={4} />
        </ContactLink>
        <ContactLink href="#!">
          <Subhead children="Writing" fontSize={[4, 5, 6]} ml={5} />
        </ContactLink>
        <ContactLink href="#!">
          <Subhead children="Contact" fontSize={[4, 5, 6]} ml={5} mb={4} />
        </ContactLink>
        <Line w={5} fontSize={[4, 5, 6]} borderColor="black" />
        <ProjectLink>
          <Subhead
            children="6 Minute Morning"
            fontSize={[4, 5, 6]}
            ml={5}
            mt={4}
          />
        </ProjectLink>
        <ProjectLink href="#!">
          <Subhead children="Work Smart" fontSize={[4, 5, 6]} ml={5} />
        </ProjectLink>
        <ProjectLink>
          <Subhead children="Work{space}" fontSize={[4, 5, 6]} ml={5} />
        </ProjectLink>
        <ProjectLink>
          <Subhead children="TinderMap" fontSize={[4, 5, 6]} ml={5} mb={5} />
        </ProjectLink>
        <Image src={computer} />
      </Container>
    )
  }
}

export default App
