import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {media} from '../../styles/default/Mediaqueries';
import {Ratios} from '../../styles/default/Mixins';
import {backgroundColors} from '../../styles/default/Colors';

const MaskRatioWrap = styled.div`
    border: ${props => props.mockupVideo ? '2px solid white' : 'none'};
    box-shadow: ${props => props.mockupVideo ? '4px 5px 22px 0 rgba(164,181,208,0.5)' : 'none'};
    
    position: relative;
    height: 0;
    padding-top: ${props => Ratios[props.ratio]};
    overflow: hidden;
    width: 100%;
    left: 50%;
    border-radius: ${props => props.mockupVideo ? 10 : 40}px;
    background: ${backgroundColors.tertiary};
    transform: translateX(-50%);
    ${media.lg`
      padding-top: ${props => Ratios[props.ratioDesktop]};
    `}    
    >video,
    >img,
    >button,
    >div{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        height: 102%;
        >img{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            height: 100%;
        }
    }
    >svg{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
   
`;

class MaskRatio extends React.Component {
    static propTypes = {
        ratio: PropTypes.oneOf(Object.keys(Ratios)),
        ratioDesktop: PropTypes.oneOf(Object.keys(Ratios)),
        children: PropTypes.node,
        mockupVideo: PropTypes.bool
    };

    static defaultProps = {
        ratio: 'landscape',
    };

    render() {
        const {ratio, children, ratioDesktop, mockupVideo} = this.props;
        return (
            <MaskRatioWrap ratio={ratio} ratioDesktop={ratioDesktop} mockupVideo={mockupVideo}>
                {children}
            </MaskRatioWrap>
        );
    }
}

export default MaskRatio;

