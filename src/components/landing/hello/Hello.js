import React from 'react'
import {fontSize, lineHeight} from '../../../styles/default/Mixins';
import {media} from '../../../styles/default/Mediaqueries';
import styled from 'styled-components';

const Text = styled.p`
  bottom: 0;
  ${props => fontSize(props.SizeFr ? 56 :(props.SizeGr ? 64 : 80))};
  ${props => lineHeight(props.SizeFr ? 50 : (props.SizeGr ? 60 : (props.SizeCn ? 87 : 66)))};
  ${lineHeight(100)};
  font-weight: 900;
  font-style: italic;
  letter-spacing: 10px;
  text-align: ${props => props.center ? 'center' : 'left'};
  ${media.md`
    ${props => fontSize(props.center ? 72 : 50)};
    ${lineHeight(90)};
    letter-spacing: 15.96px;
    text-align: left;
  `}
`

const internationalHello = [
    'Hello',
    'Bonjour',
    'Holà',
    'Ciao',
    'Hallo',
    '你好',
    'Yassas',
];

export class Hello extends React.Component {
    constructor() {
        super();
        this.state = {
            textIdx: 0
        };
    }

    componentDidMount() {
        this.timeout = setInterval(() => {
            let currentIdx = this.state.textIdx;

            if(currentIdx <= internationalHello.length - 2) {
                this.setState({textIdx: currentIdx + 1});

            } else {
                clearInterval(currentIdx);
                this.setState({textIdx: 0});
            }

        }, 1800);

    }

    componentWillUnmount() {
        clearInterval(this.timeout);
    }

    render() {
        let textThatChanges = internationalHello[this.state.textIdx % internationalHello.length];
        const{textIdx} = this.state;
        return (
                <Text SizeFr={textIdx === 1}
                      SizeGr={textIdx === 6}
                      SizeCn={textIdx === 5}
                      center={this.props.center}
                >
                    {textThatChanges}
                    {window.innerWidth > 768 &&
                    '!'
                    }
                    </Text>
        )
    }
}
