import React from 'react'
import {NavSidebarLink} from '../../constants/nav-links-mock';
import {NavSidebarLinkList} from './NavSidebarLinkList';
import styled from 'styled-components';
import {media} from '../../styles/default/Mediaqueries';
import {Anime} from './NavSidebarLinkRow';
import {colors} from '../../styles/default/Colors';

export const Ul = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 8px 14px;
    
    li a {
    transition: all .3s ease;
    }
    
    li{
    a.active{
        transform: translateY(-15px);
        color: white;
    }
    }
    
        li:nth-child(1){
        a{
            &:hover,&:focus,&.active{
            background: ${colors.teal};
            }
        }
    }
    
    li:nth-child(2){
        a{
            &:hover,&:focus,&.active{
            background: ${colors.violet};
            }
        }
    }
    
    li:nth-child(3){
        a{
            &:hover,&:focus,&.active{
            background: ${colors.yellow};
            }
        }
    }
        
    li:nth-child(4){
        a{
            &:hover,&:focus,&.active{
            background: ${colors.pink};
            }
        }
   }
    ${media.md`
    padding: 50px 16px 0 16px; 
    flex-direction: column;
        li{
    a.active{
        transform: none;
        color: white;
    }
    }
  `}
    ${media.lg`
    li{
        a{
        transition: border .1s ease-in;
            img{
                transition: transform .3s ease-in-out;
            }
            ${Anime}{
                transition: background .1s ease-in;
            }
            &:hover,&.active, &:focus{
            img{
                color: #1DAE8D;
            }
          }
        }
    }
    li:nth-child(1) { 
        a{
          border: 3px solid ${colors.black};
          &:hover,&.active, &:focus{
              background: transparent;
              ${Anime}{
                  background: ${colors.teal};
              }
          }
          &:focus, &.active{
              border: 3px solid ${colors.teal};
          }
        }
    }
    
    li:nth-child(2) { 
        a{
            &:hover,&.active, &:focus{
                background: transparent;
                ${Anime}{
                    background: ${colors.violet};
                }
            }
            &:focus, &.active{
                border: 3px solid ${colors.violet};
            }
        }
    }
  
    li:nth-child(3){ 
        a{
          &:hover,&.active, &:focus{
          background: transparent;
           ${Anime}{
            background: ${colors.yellow};
           }
          }
          &:focus, &.active{
          border: 3px solid ${colors.yellow};
          }
        }
  }
  
  li:nth-child(4){ 
    a{
      &:hover,&.active, &:focus{
      background: transparent;
       ${Anime}{
        background: ${colors.pink};
       }
      }
      &:focus, &.active{
      border: 3px solid ${colors.pink};
      }
    }
  }
    `}
`

export class NavSidebar extends React.Component {
    render() {
        return (
            <Ul>
                <NavSidebarLinkList navSidebarLinks={Object.values(NavSidebarLink)}/>
            </Ul>
        )
    }
}


