import React from 'react'
import {NavLink} from 'react-router-dom'
import styled from 'styled-components';
import {media} from '../../styles/default/Mediaqueries';
import {NavSidebarLinkPropTypes} from '../../constants/nav-links-mock';
import {fontSize} from '../../styles/default/Mixins';
import {colors} from '../../styles/default/Colors';

const Inverter = styled.span`
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
`;

const Invert = styled.p`
          margin: 0;
          clip-path: circle(11% at 84% 50%);
          position: absolute;
          top: 0;
          left: 0;
          color: white; 
`;

export const Anime = styled.div`
        clip-path: circle(11% at 84% 50%);
        background: white;
        position: absolute;
        z-index: -1;
        top: -38px;
        bottom: -38px;
        left: -84px;
        width: 260%;
        ${media.xl`
            left: -23px;
        `}
`;

//Menu mobile
const Box = styled.li`
  ${media.md`
        margin-right: 0;
        margin-bottom: 32px;
  `}
  
  ${media.lg`
    margin-bottom: 0;
    
    a.active, 
    a:focus {
    
      ${Inverter}{
        ${Invert}{
            transition: clip-path .1s ease-in-out .2s;
            clip-path: circle(260% at 84% 50%);
        }
      }
      
      ${Anime}{
        transition: clip-path .9s ease-in-out;
        clip-path: circle(260% at 84% 50%);
      }
    }
    `}
  
  ${media.xl`
    a.active, 
    a:focus {
      ${Anime}{
        transition: clip-path .6s ease-in-out;
      }
    }
  `}
`;
export const LinkWithIcon = styled(NavLink)`
    width: 50px;
    border-radius: 10px;
    margin: 0 8px;
    padding: 0 8px 9px 9px;
    display: flex;
    flex-direction: column;
    font-weight: 700;
    ${fontSize(8)};
    align-items: center;
    justify-content: space-between;
    
    img{
      height: 32px
    }
    
    ${media.md`
    margin: 0;
    padding: 5px 4px;
    margin-right: 0;
    
    img{
        height: auto;
        width: 40px;
    }
    
     > span{
        display: none
    }
  `}
    ${media.lg`
      border: 3px solid ${colors.grey};
      display: block;
      text-align: inherit;
      overflow: hidden;
      border-radius: 24px;
      margin: 10px;
      padding: 16px 147px 16px 16px;
      background: transparent;
      height: auto;
      ${fontSize(13)};
      color: black;
      position: relative;
      transition: color 0s .3s;
      
      img{
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        color: black;
        z-index: 2;
        }
        
        > span{
        display: block;
        }
    `}
    ${media.xl`
        width: 230px;
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
                    {window.innerWidth > 991 &&
                        <Inverter>
                            <p>{this.props.navSidebarLink.name}</p>
                            <Invert>{this.props.navSidebarLink.name}</Invert>
                            <Anime/>
                        </Inverter>
                    }
                    <img src={this.props.navSidebarLink.icon} alt={this.props.navSidebarLink.name}/>
                    {window.innerWidth < 991 &&
                        <span>{this.props.navSidebarLink.label}</span>
                    }
                </LinkWithIcon>
            </Box>
        )
    }
}
