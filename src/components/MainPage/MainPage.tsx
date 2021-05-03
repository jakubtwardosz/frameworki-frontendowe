import React, { FC } from 'react';
import styled from 'styled-components';

import { TopBar } from '../TopBar/TopBar';
import { LeftMenu } from '../LeftMenu/LeftMenu';

const Wrapper = styled.div`
    


`;

const Content = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

const RightContent = styled.div`
    flex: 1;
`;
 

const MainPage: FC = () => {
    return (
        <Wrapper>
            <TopBar />
            <Content>
                    <LeftMenu />
                    <RightContent>Content</RightContent>
            </Content>
        </Wrapper>
    );
};

export default MainPage;