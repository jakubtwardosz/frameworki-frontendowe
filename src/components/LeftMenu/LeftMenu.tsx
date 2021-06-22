import React, { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    flex: 230px 0;    
`;
const Card = styled.div`
    box-shadow: 0 4px 2px -2px #DEE1E6;
    border-radius: 5px;
    border: 1px solid #EAECEF;
    background-color: #FFFFFF;
`;
const Header = styled.div`
    text-align: center;
    border-bottom: 1px solid #EAECEF;
    padding: 10px;
    p{
        color: #2A3F9D;
        font: 500 16px 'Roboto';
        margin: 8px 0;        
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
        color: #232C47;
        font: 500 16px 'Roboto';
    }
`;
const NetworkIcon = styled.i`
    display: inline-block;
    background-image: url(/media/icons/network.png);
    background-size: 20px;
    width: 20px;
    height: 17px;
    background-repeat: no-repeat;
    margin-right: 8px;   
`;
const PublicationsIcon = styled.i`
    display: inline-block;
    background-image: url(/media/icons/publications.svg);
    background-size: 20px;
    width: 20px;
    height: 17px;
    background-repeat: no-repeat;
    margin-right: 8px;
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
        color: #4B5268;
        font-weight: 500;
    }
`;
const PublicationsIcon2 = styled.i`
    display: inline-block;
    background-image: url(/media/icons/publications.svg);
    background-size: 28px;
    width: 28px;
    height: 28px;
    background-repeat: no-repeat;
    margin-right: 17px;
`;
const EcosystemIcon = styled.i`
    display: inline-block;
    background-image: url(/media/icons/ecosystem.svg);
    background-size: 28px;
    width: 28px;
    height: 28px;
    background-repeat: no-repeat;
    margin-right: 17px;
`;
const EntitiesIcon = styled.i`
    display: inline-block;
    background-image: url(/media/icons/entities.svg);
    background-size: 28px;
    width: 28px;
    height: 28px;
    background-repeat: no-repeat;
    margin-right: 17px;
`;
const NetworkButton = styled.button`
    display: inline-block;
    background-image: url(/media/icons/user-plus.svg);
    background-size: 16px;
    background-position: center;
    width: 30px;
    height: 22px;
    border: 1px solid #4B5268;
    border-radius: 5px;    
    background-repeat: no-repeat;
    background-color: transparent;
    margin-left: auto;
    cursor: pointer;
`;
const PublicationsButton = styled.button`
    display: inline-block;
    background-image: url(/media/icons/plus.svg);
    background-size: 16px;
    background-position: center;
    width: 30px;
    height: 22px;
    border: 1px solid #4B5268;
    border-radius: 5px;    
    background-repeat: no-repeat;
    background-color: transparent;
    margin-left: auto;
    cursor: pointer;
`;

export const LeftMenu: FC = () => {
    return(
        
            <Wrapper>
            <Card>
                <Header>
                    <ImageWrapper>
                        <img src='./media/employee-photo.jpg' alt="Employee photo"/>
                    </ImageWrapper>
                    <p>Humberta Swift</p>
                    <span>Job title - Company</span>
                </Header>

                <CardList>
                    <CardItem>
                        <LinkContainer>
                            <NetworkIcon/>
                            <a href='#'>Your network</a>
                            <NetworkButton/>
                        </LinkContainer>                        
                    </CardItem>
                    <CardItem>
                        <LinkContainer>
                            <PublicationsIcon/>
                            <a href='#'>Your publications</a>
                            <PublicationsButton/>
                        </LinkContainer>
                    </CardItem>
                </CardList>
            </Card>

            <Navigation>
                <List>
                    <ListItem>
                        <PublicationsIcon2/>
                        <a href='#'>Publications</a>
                    </ListItem>
                    <ListItem>
                        <EcosystemIcon/>
                        <a href='#'>Ecosystem</a>
                    </ListItem>
                    <ListItem>
                        <EntitiesIcon/>
                        <a href='#'>Entities</a>
                    </ListItem> 
                </List>
            </Navigation>
            </Wrapper>
            
        
        
    );
};