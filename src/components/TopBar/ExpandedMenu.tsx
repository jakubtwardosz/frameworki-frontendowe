import { Settings } from 'http2';
import React, { FC, useState, ChangeEvent } from 'react'; 
import styled from 'styled-components';
import { Colors } from '../../styledHelpers/Colors';

import { ExpandedMenuIcon } from '../../styledHelpers/Components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
    position: absolute;
    top: 30px;
    left: 0;
    background: ${Colors.white};
    border: 1px solid ${Colors.cultured};
    border-radius: 5px;
    min-width: 280px;
    
`;
const FilterInput = styled.input`
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #E8E8E8;
    border-radius: 5px;
    padding: 10px 8px;
    font: 300 16px 'Roboto';
    margin-bottom: 5px;
`;
const MenuContainer = styled.div`
    border-bottom: 1px solid #E8E8E8;

    span{
        color:#878B91;
        font: 500 14px 'Roboto';
        margin: 5px 0;
    }
    ul li{
        margin: 15px 0;        
    }
    ul li a{
        text-decoration: none;
        color: #232C47;
        display: flex;
        align-items: center;
    }
`;
const InnerWrapper = styled.div`
    margin: 10px;
    
    
    ul li{
        margin: 15px 0;
        
    }

    ul li a{
        color: #232C47;

        display: flex;
        align-items: center;
        text-decoration: none;
    }
`;
const AccountContainer = styled.div`
    span{
        color:#878B91;
        font: 500 14px 'Roboto';
        margin: 5px 0;
    }

`;
const ProfileLink = styled(Link)`    
    margin: 15px 0;
    display: flex;
    align-items: center;
    text-decoration: none;    
 p{
     font: 400 16px 'Roboto';
     color: #232C47;
 }
 span{
     font: 400 14px 'Roboto';
     color: #2A3F9D;
 }

`;
const PrivacyIcon = styled(ExpandedMenuIcon)`
    background-image: url(/media/icons/privacy.svg);
`;
const SettingsIcon = styled(ExpandedMenuIcon)`
    background-image: url(/media/icons/settings.svg);
`;
const LogoutButton = styled.button`
    border-style: solid;
    border-width: 1px 0 0 0;
    border-color: #E8E8E8;
    align-items: center;
    background: transparent;
    font: 400 16px 'Roboto';
    color: #878B91;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
    padding: 10px 0;
    cursor: pointer;

`;
const HomeIcon = styled(ExpandedMenuIcon)`
    background-image: url(/media/icons/house.svg);
`;
const PublicationsIcon = styled(ExpandedMenuIcon)`
    background-image: url(/media/icons/publications.svg);
`;
const PeopleIcon = styled(ExpandedMenuIcon)`
    background-image: url(/media/icons/people.svg);
`;
const EntitiesIcon = styled(ExpandedMenuIcon)`
    background-image: url(/media/icons/entities.svg);
`;
const AdministrationIcon = styled(ExpandedMenuIcon)`
    background-image: url(/media/icons/administration.svg);
`;
const CorporateIcon = styled(ExpandedMenuIcon)`
    background-image: url(/media/icons/entities2.svg);
`;
const LogoutIcon = styled(ExpandedMenuIcon)`
    background-image: url(/media/icons/logout.svg);
    background-size: 20px;
    width: 20px;
    height: 20px;
    background-position: center; 
`;
const ImageContainer = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 15px;

    img{
        width: 100%;
    height: 100%;
    }
 
`;
export const ExpandedMenu: FC = () => {

    const [inputText, setInputText] = useState<string>('');

    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        setInputText(text);
    }

    return(
        <Wrapper>
            <MenuContainer>
                <InnerWrapper>
                    <FilterInput type="text" placeholder="Filter..." value={inputText} onChange={inputHandler} />
                    <span>Platform</span>
                    <ul>
                        {'Home'.toLowerCase().includes(inputText.toLowerCase()) && <li><Link to="/"><HomeIcon/>Home</Link></li>}
                        {'Publications'.toLowerCase().includes(inputText.toLowerCase()) && <li><Link to="/testpage"><PublicationsIcon/>Publications</Link></li>}
                        {'People'.toLowerCase().includes(inputText.toLowerCase()) && <li><Link to="/testpage"><PeopleIcon/>People</Link></li>}
                        {'Entities'.toLowerCase().includes(inputText.toLowerCase()) && <li><Link to="/entities"><EntitiesIcon/>Entities</Link></li>}
                        {'Administration'.toLowerCase().includes(inputText.toLowerCase()) && <li><Link to="/testpage"><AdministrationIcon/>Administration</Link></li>}                        
                    </ul>
                    <span>Workspaces</span>
                    <ul>
                        {'Client contract'.toLowerCase().includes(inputText.toLowerCase()) && <li><Link to="/testpage"><PublicationsIcon/>Client contract</Link></li>}
                        {'Supplier contract'.toLowerCase().includes(inputText.toLowerCase()) && <li><Link to="/testpage"><PublicationsIcon/>Supplier contract</Link></li>}
                        {'Corporate'.toLowerCase().includes(inputText.toLowerCase()) && <li><Link to="/testpage"><CorporateIcon/>Corporate</Link></li>}
                        {'Group Norms'.toLowerCase().includes(inputText.toLowerCase()) && <li><Link to="/testpage"><PeopleIcon/>Group Norms</Link></li>}
                        {'Real estate contracts'.toLowerCase().includes(inputText.toLowerCase()) && <li><Link to="/testpage"><PublicationsIcon/>Real estate contracts</Link></li>}
                    </ul>
                </InnerWrapper>
            </MenuContainer>
            <AccountContainer>
                <InnerWrapper>
                    <span>Account</span>
                    <ProfileLink to="/profile">
                            <ImageContainer>
                                <img src='./media/employee-photo.jpg' alt="Employee photo"/>
                            </ImageContainer>
                            <div>
                                <p>Jeane-Marie de la cli...</p>
                                <span>See profile</span>
                            </div>
                    </ProfileLink> 
                    <ul>
                        <li><Link to="/testpage"><PrivacyIcon/>Privacy</Link></li>
                        <li><Link to="/testpage"><SettingsIcon/>Settings</Link></li>
                    </ul>                    
                </InnerWrapper>
                <LogoutButton><LogoutIcon/>Logout</LogoutButton>
            </AccountContainer>
        </Wrapper>
    );
};