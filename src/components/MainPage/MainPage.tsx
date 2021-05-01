import React, { FC } from 'react';
import styled from 'styled-components';

import { TopBar } from '../TopBar/TopBar';
import { LeftMenu } from '../LeftMenu/LeftMenu';
import { Colors } from '../../styledHelpers/Colors';

const Wrapper = styled.div`
`;

const Content = styled.div`
    max-width: 1200px;
    align-items: center;
    display: flex;
`;

const InnerWrapper = styled.div`
    width: 1200px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const MainPage: FC = () => {
    return (
        <Wrapper>
            <TopBar />
            <Content>
                <InnerWrapper>
                    <LeftMenu />
                    <div>Content</div>
                </InnerWrapper>
            </Content>
        </Wrapper>
    );
};

export default MainPage;