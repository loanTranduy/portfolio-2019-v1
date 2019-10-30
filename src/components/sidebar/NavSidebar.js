import React from 'react'
import {NavSidebarLink} from '../../constants/navLinksMock';
import {NavSidebarLinkList} from './NavSidebarLinkList';
import styled from 'styled-components';

export const Ul = styled.div`
display: flex;
justify-content: space-between;
padding: 0 16px;
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


