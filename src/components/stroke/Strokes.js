import styled from 'styled-components';
import {media} from '../../styles/default/Mediaqueries';
import {backgroundColors, skillsColors} from '../../styles/default/Colors';
import cornerWhite from '../../assets/images/corner.svg';
import React, {Fragment} from 'react';
import CornerSvg from '../svg/CornerSvg';
import PropTypes from 'prop-types'

const Bottom = {
    top : 'auto',
    bottom : 0,
    right: 0,
    left: 0,
};

const Top = {
    top : 0,
    bottom : 'auto',
    right: 0,
    left: 0,
};

const Left = {
    top : 0,
    bottom : 0,
    right: 'auto',
    left: 0,
};

const Right = {
    top : 0,
    bottom : 0,
    right: 0,
    left: 'auto',
};

export const Stroke = styled.div`
    height: ${props => props.side ? 'auto' : props.size + 'px'};
    width: ${props => props.side ? props.size + 'px' : 'auto'};
    z-index: 9999;
    position: fixed;
    left: ${props => Left[props.position]};
    right: ${props => Right[props.position]};
    bottom: ${props => Bottom[props.position]};
    top:${props => Top[props.position]};
    background: ${props => props.url === '/work/all' ? skillsColors.all : 
                (props.url === '/work/front-end' || props.url === '/work/front-end/hackages' || props.url === '/work/front-end/marie-jo' || props.url === '/work/front-end/primadonna' || props.url === '/work/front-end/vdab' || props.url === '/work/front-end/edenred' ?  skillsColors.front : 
    (props.url === '/work/web-design' || props.url === '/work/web-design/hackages' ? skillsColors.web : 
        (props.url === '/work/graphic-design' || props.url === '/work/graphic-design/hackages' || props.url === '/work/graphic-design/verger-bio' || props.url === '/work/graphic-design/brussels-foodtruck-festival' || props.url === '/work/graphic-design/beta-bon-dieu' || props.url === '/work/graphic-design/hugeia' || props.url === '/work/graphic-design/bhack-to-school' || props.url === '/work/graphic-design/3d-side' ? skillsColors.graphic : 
                backgroundColors.stroke)))
    };
`;


const Rotate = {
    topRight : 90,
    topLeft : 0,
    bottomRight: 180,
    bottomLeft: -90,
};

const BoxCorner = styled.div`
   position: absolute;
   bottom: ${props => props.topRight || props.topLeft ? 'auto' : 'calc( ' + props.size + 'px - 5px)'};
   top: ${props => props.topRight ? 'calc( ' + props.size + 'px - 4px)' :(props.topLeft ? 'calc( ' + props.size + 'px - 5px)' : 'auto')};
   left: ${props => props.topLeft ? props.size + 'px' :(props.bottomLeft ? 'calc( ' + props.size + 'px - 1px)' : 'auto')};
   right: ${props => props.topRight ? 'calc(' + props.size + 'px - 1px)' :(props.bottomRight ? props.size + 'px' :  'auto')};
   transform: rotate(${props => Rotate[props.cornerPosition]}deg);
    svg{
      width: ${props => (props.size)}px;
      fill: ${props => props.url === '/work/all' ? skillsColors.all :
        (props.url === '/work/front-end' || props.url === '/work/front-end/hackages' || props.url === '/work/front-end/marie-jo' || props.url === '/work/front-end/primadonna' || props.url === '/work/front-end/vdab' || props.url === '/work/front-end/edenred' ?  skillsColors.front :
            (props.url === '/work/web-design' || props.url === '/work/web-design/hackages' ? skillsColors.web :
                (props.url === '/work/graphic-design' || props.url === '/work/graphic-design/hackages' || props.url === '/work/graphic-design/verger-bio' || props.url === '/work/graphic-design/brussels-foodtruck-festival' || props.url === '/work/graphic-design/beta-bon-dieu' || props.url === '/work/graphic-design/hugeia' || props.url === '/work/graphic-design/bhack-to-school' || props.url === '/work/graphic-design/3d-side' ? skillsColors.graphic :
                    backgroundColors.stroke)))
        };
      }
    `;


const StrokeWhite = styled.div`
--whitesize: calc(${props => props.size}px + 15px);
    background: ${backgroundColors.tertiary};
    display: none;
    z-index: 9999;
    position: fixed;
${media.md`
    height: ${props => props.right ? 'auto' : 'var(--whitesize)'};
    width: ${props => props.right ?  'var(--whitesize)' : 'auto'};
    display: block;
    bottom: calc(${props => props.size}px + 1px);
    left:${props => props.right ? 'auto ' : (props.sideNavbarWidth)+ 'px'};;
    right: ${props => props.size}px;
    border-bottom-right-radius: 8px;
    border-top-right-radius: ${props => props.right ? 8 : 0}px;
    top: ${props => props.right ? props.size + 'px' : 'auto'};
    
    &:after, &:before{
    position: absolute;
      content: url(${cornerWhite});
      width: 40px;
      left: calc(${props => (props.size)}px + 2px);
      bottom: calc(var(--whitesize) - 2px);
    }
    &:after{
        display: ${props => props.right? 'none' : 'block'};
        transform: rotate(-90deg);
    }
    &:before{
      left: auto;
        top: ${props => props.right ? '57.4px' : 'auto'};
        right: ${props => props.right ? 'calc(var(--whitesize) + 2px)' : 'var(--whitesize)'};
        bottom: ${props => props.right ? 'auto' : 'calc(var(--whitesize) - 2px)'};
        transform: rotate(${props => props.right ? 90 : 180 }deg);
      }
`}
`;


export class Strokes extends React.Component {
    static propTypes = {
        cornerPosition: PropTypes.oneOf(Object.keys(Rotate)),

    }
    render() {
        const{size, url, sideNavbarWidth} = this.props;
        return (
            <Fragment>
                <Stroke size={size} url={url} position='top'>
                    <BoxCorner url={url} size={size} topRight cornerPosition='topRight'>
                        <CornerSvg/>
                    </BoxCorner>
                    <BoxCorner url={url} size={size} topLeft cornerPosition='topLeft'>
                        <CornerSvg/>
                    </BoxCorner>
                </Stroke>
                <Stroke size={size} url={url} position='bottom'>
                    <BoxCorner url={url} size={size} bottomRight cornerPosition='bottomRight'>
                        <CornerSvg/>
                    </BoxCorner>
                    <BoxCorner url={url} size={size} bottomLeft cornerPosition='bottomLeft'>
                        <CornerSvg/>
                    </BoxCorner>
                </Stroke>
                <Stroke size={size} position='left' side url={url} />
                <Stroke size={size} position='right' side url={url} />
                <StrokeWhite size={size} sideNavbarWidth={sideNavbarWidth}/>
                <StrokeWhite size={size} sideNavbarWidth={sideNavbarWidth} right/>
            </Fragment>
        )
    }
}
