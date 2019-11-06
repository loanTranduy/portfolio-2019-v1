import React from 'react'
import {fontSize, lineHeight} from '../../styles/default/Mixins';
import {media} from '../../styles/default/Mediaqueries';
import styled from 'styled-components';

const Text = styled.p`
  //position: absolute;
  bottom: 0;
  ${props => fontSize(props.SizeFr ? 70 :(props.SizeGr ? 83 : 94))};
  // ${props => lineHeight(props.SizeFr ? 50 : (props.SizeGr ? 60 : (props.SizeCn ? 87 : 66)))};
    ${lineHeight(100)};
  font-weight: 800;
  font-style: italic;
  letter-spacing: 10px;
  //margin-top: 48px;
  
  ${media.md`
    ${fontSize(60)};
    ${lineHeight(100)};
    letter-spacing: 15.96px;
  
  `}
  
  ${media.xl`
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

    componentDidUnmount() {
        clearInterval(this.timeout);
    }

    render() {
        let textThatChanges = internationalHello[this.state.textIdx % internationalHello.length];
        const{textIdx} = this.state;
        return (
                <Text SizeFr={textIdx === 1}
                      SizeGr={textIdx === 6}
                      SizeCn={textIdx === 5}
                >
                    {textThatChanges}
                    {window.innerWidth > 768 &&
                    '!'
                    }
                    </Text>
        )
    }
}
