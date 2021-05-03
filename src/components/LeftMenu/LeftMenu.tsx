import React, { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    flex: 0.2;
`;
const Card = styled.div`
`;
const Header = styled.div`
    text-align: center;
`;
const ImageWrapper = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 auto;

    img{
        width: 100%;
        height: 100%;
    }
`;
const CardList = styled.div`
`;
const CardItem = styled.div`



`;
const LinkContainer = styled.div`
`;
const NetworkIcon = styled.i`
    background-image: url('./media/network.svg');
    background-size: 16px;
`;
const PublicationsIcon = styled.i`
    background-image: url('./media/publications.svg');
    background-size: 16px;

`;
const Navigation = styled.div`
`;
const List = styled.ul`
`;
const ListItem = styled.li`
`;
const EcosystemIcon = styled.i`
`;
const EntitiesIcon = styled.i`
`;


export const LeftMenu: FC = () => {
    return(
        <Wrapper>
            <Card>
                <Header>
                    <ImageWrapper>
                        <img src='./media/employee-photo.jpg' alt="Employee photo"/>
                    </ImageWrapper>
                    <span>Humberta Swift</span>
                    <p>Job title - Company</p>
                </Header>

                <CardList>
                    <CardItem>
                        <LinkContainer>
                            <NetworkIcon/>
                            <a href='#'>Your network</a>
                        </LinkContainer>
                        <button/>
                    </CardItem>
                    <CardItem>
                        <LinkContainer>
                            <PublicationsIcon/>
                            <a href='#'>Your publications</a>
                        </LinkContainer>
                        <button/>
                    </CardItem>
                </CardList>
            </Card>
            <Navigation>
                <List>
                    <ListItem>
                        <PublicationsIcon/>
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