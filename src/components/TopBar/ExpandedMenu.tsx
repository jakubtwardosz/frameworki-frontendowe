import { Settings } from 'http2';
import { platform } from 'node:os';
import React, { FC } from 'react'; 
import styled from 'styled-components';
import { Colors } from '../../styledHelpers/Colors';

const Wrapper = styled.div`
    position: absolute;
    top: 24px;
    left: 0;
    background: ${Colors.white};
    padding: 16px;
    border: 1px solid;
    ul{
        border: 1px solid red;
    }
`;
const FilterInput = styled.input`
`;
const MenuContainer = styled.div`
`;
const AccountContainer = styled.div`
`;
const ProfileLink = styled.a`
`;
const PrivacyLink = styled.a`
`;
const SettingsLink = styled.a`
`;
const PrivacyIcon = styled.i`
`;
const SettingsIcon = styled.i`
`;
const LogoutButton = styled.button`
`;





export const ExpandedMenu: FC = () => {
    return(
        <Wrapper>
            <MenuContainer>
                <FilterInput type="text" placeholder="Filter..."/>
                <span>Platform</span>
                <ul>
                    <li>Home</li>
                    <li>Publications</li>
                    <li>People</li>
                    <li>Entities</li>
                    <li>Administration</li>
                </ul>
                <span>Workspaces</span>
                <ul>
                    <li>Client contract</li>
                    <li>Supplier contract</li>
                    <li>Corporate</li>
                    <li>Group Norms</li>
                    <li>Real estate contracts</li>
                </ul>
            </MenuContainer>
            <AccountContainer>
                <span>Account</span>
                <ProfileLink>
                    <img src='./media/employee-photo.jpg' alt="Employee photo"/>
                    <p>Jeane-Marie de la cli...</p>
                    <span>See profile</span>
                </ProfileLink>
                <PrivacyLink>
                    <PrivacyIcon/>
                    Privacy
                </PrivacyLink>
                <SettingsLink>
                    <SettingsIcon/>
                    Settings
                </SettingsLink>
                <LogoutButton>Logout</LogoutButton>
            </AccountContainer>


        </Wrapper>
    );
};