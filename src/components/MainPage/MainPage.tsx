import React, { FC } from 'react';
import styled from 'styled-components';

import { TopBar } from '../TopBar/TopBar';
import { LeftMenu } from '../LeftMenu/LeftMenu';
import { Colors } from '../../styledHelpers/Colors';

const Wrapper = styled.div`
    background-color: ${Colors.culturedBackground}; 


`;

const Content = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 20px 0;
`;

const RightContent = styled.div`
    flex: 1;
    margin-left: 40px;
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