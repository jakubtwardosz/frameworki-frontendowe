import React, { FC } from 'react';
import styled from 'styled-components';
import { Colors } from '../../styledHelpers/Colors';
import { LeftMenuIcon } from '../../styledHelpers/Components';
import { LeftMenuButton } from '../../styledHelpers/Components';
import { BelowLeftMenuIcon } from '../../styledHelpers/Components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
    flex: 230px 0;    
`;
const Card = styled.div`
    box-shadow: 0 4px 2px -2px ${Colors.gainsboro};
    border-radius: 5px;
    border: 1px solid ${Colors.cultured};
    background-color:${Colors.white};
`;
const Header = styled.div`
    text-align: center;
    border-bottom: 1px solid ${Colors.cultured};
    padding: 10px;
    p{
        color: ${Colors.denimBlue};
        font: 500 16px 'Roboto';
        margin: 8px 0;        
    }
    a{
        text-decoration: none;
    }
    span{            
        font: 300 14px 'Roboto';        
    }
`;
const ImageWrapper = styled.div`
    width: 64px;
    height: 64px;
    border-radius: 50%;
    overflow: hidden;
    margin: auto;
    img{
        width: 100%;
        height: 100%;
    }
`;
const CardList = styled.div`
`;
const CardItem = styled.div`
    margin: 12px 16px;
`;
const LinkContainer = styled.div`
    display: flex;
    align-items: center;
    a{
        text-decoration: none;
        color: ${Colors.spaceCadet};
        font: 500 16px 'Roboto';
    }

    a:last-child {
        margin-left: auto;
    }
`;
const NetworkIcon = styled(LeftMenuIcon)`
    background-image: url(/media/icons/network.png);
`;
const PublicationsIcon = styled(LeftMenuIcon)`
    background-image: url(/media/icons/publications.svg);
`;
const Navigation = styled.div`
`;
const List = styled.ul`
`;
const ListItem = styled.li`
    display: flex;
    align-items: center;
    margin: 20px 16px;
    a{
        text-decoration: none;
        color: ${Colors.independence};
        font-weight: 500;
    }
    
`;
const PublicationsIcon2 = styled(BelowLeftMenuIcon)`    
    background-image: url(/media/icons/publications.svg);
`;
const EcosystemIcon = styled(BelowLeftMenuIcon)`    
    background-image: url(/media/icons/ecosystem.svg);    
`;
const EntitiesIcon = styled(BelowLeftMenuIcon)`    
    background-image: url(/media/icons/entities.svg);    
`;
const NetworkButton = styled(LeftMenuButton)`    
    background-image: url(/media/icons/user-plus.svg);
`;
const PublicationsButton = styled(LeftMenuButton)`    
    background-image: url(/media/icons/plus.svg);    
`;

export const LeftMenu: FC = () => {
    return(
        
            <Wrapper>
            <Card>
                <Header>
                    <Link to="/profile">
                    <ImageWrapper>
                        <img src='./media/employee-photo.jpg' alt="Employee photo"/>
                    </ImageWrapper>
                    <p>Humberta Swift</p>
                    <span>Job title - Company</span>
                    </Link>
                </Header>

                <CardList>
                    <CardItem>
                        <LinkContainer>
                            <NetworkIcon/>
                            <Link to="/testpage">Your network</Link>
                            <Link to="/testpage"><NetworkButton/></Link>
                        </LinkContainer>                        
                    </CardItem>
                    <CardItem>
                        <LinkContainer>
                            <PublicationsIcon/>                            
                            <Link to="/testpage">Your publications</Link>
                            <Link to="/testpage"><PublicationsButton/></Link>
                        </LinkContainer>
                    </CardItem>
                </CardList>
            </Card>

            <Navigation>
                <List>
                    <ListItem>
                        <PublicationsIcon2/>
                        <Link to="/testpage">Publications</Link>
                    </ListItem>
                    <ListItem>
                        <EcosystemIcon/>
                        <Link to="/testpage">Ecosystem</Link>
                    </ListItem>
                    <ListItem>
                        <EntitiesIcon/>
                        <Link to="/entities">Entities</Link>
                    </ListItem> 
                </List>
            </Navigation>
            </Wrapper>
            
        
        
    );
};