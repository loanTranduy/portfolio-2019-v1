import React from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom'
import {fontSize} from '../styles/default/Mixins';

const Container = styled.nav`
    background: black;
    ${fontSize(14)};
    a{
      color: white;
    }
    `

export class Navbar extends React.Component {
    render() {
        return (
            <Container>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
            </Container>
        )
    }
}


