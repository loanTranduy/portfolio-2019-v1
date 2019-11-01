import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components';
import {media} from '../../styles/default/Mediaqueries';
import {NavSidebarLinkPropTypes} from '../../constants/navLinksMock';
import {fontSize} from '../../styles/default/Mixins';
import {colors} from '../../styles/default/Colors';

const Inverter = styled.span`
    ${media.xl`
        width: 92px;
        position: relative;
        display: block;
        p{
       ${fontSize(12)};
       font-weight: 600;
          line-height: 16px;
        }
        p:first-of-type {
          color: black;
        }
    
    `}
`;

const Invert = styled.p`
    ${media.xl`   
          margin: 0;
          clip-path: circle(11% at 84% 50%);
          position: absolute;
          top: 0;
          left: 0;
          color: white; 
    `}
`;

export const Anime = styled.div`
    ${media.xl`
        clip-path: circle(11% at 84% 50%);
        background: white;
        position: absolute;
        z-index: -1;
        top: -38px;
        bottom: -38px;
        left: -54px;
        width: 260%;
    `}
`;

//Menu mobile
const Box = styled.li`
  ${media.md`
     margin-right: 0;
     margin-bottom: 32px;
  `}
  ${media.xl`
     margin-bottom: 0;
    a:active, a:focus {
      ${Inverter}{
        ${Invert}{
        transition: clip-path .4s ease-in-out .2s;
        clip-path: circle(260% at 84% 50%);
        }
      }
      ${Anime}{
        transition: clip-path 1s ease-in-out;
        clip-path: circle(260% at 84% 50%);
      }
    }
    `}
`;

export const LinkWithIcon = styled(Link)`
    width: 38px;
    border-radius: 10px;
    margin: 0 8px;
    padding: 5px 1px;
    display: flex;
    flex-direction: column;
    font-weight: 700;
    ${fontSize(8)};
    align-items: center;
    justify-content: space-between;
    img{
      margin-bottom: 4px;
      height: 16px
    }
    ${media.md`
    margin: 0;
    padding: 10px 4px;
    height: 24px;
    img{
        height: auto;
        width: 24px;
    }
    margin-right: 0;
     > span{
        display: none
    }
  `}
    ${media.xl`
      border: 3px solid ${colors.grey};
      display: block;
      text-align: inherit;
      overflow: hidden;
      border-radius: 6px;
      margin: 10px;
      padding: 16px 147px 16px 16px;
      background: transparent;
      height: auto;
      ${fontSize(13)};
      color: black;
      position: relative;
      transition: color 0s .3s;
      img{
      width: 22px;
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
        color: black;
         padding: 10px 7px;
        z-index: 2;
        }
        > span{
        display: block;
    }
    `}
`


export class NavSidebarLinkRow extends React.Component {
    static propTypes = {
        navSidebarLink: NavSidebarLinkPropTypes,
    };

    render() {
        return (
            <Box>
                <LinkWithIcon
                    to={this.props.navSidebarLink.breadCrumb}
                >
                    {window.innerWidth > 1074 ?
                        <Inverter>
                            <p>{this.props.navSidebarLink.name}</p>
                            <Invert>{this.props.navSidebarLink.name}</Invert>
                            <Anime/>
                        </Inverter> : null
                    }
                    <img src={this.props.navSidebarLink.icon} alt={this.props.navSidebarLink.name}/>
                    {window.innerWidth < 991 ?
                    <span>{this.props.navSidebarLink.label}</span> : null }
                </LinkWithIcon>
            </Box>
        )
    }
}
