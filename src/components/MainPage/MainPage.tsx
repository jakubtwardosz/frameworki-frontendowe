import React, { FC } from 'react';
import styled from 'styled-components';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import { TopBar } from '../TopBar/TopBar';
import { LeftMenu } from '../LeftMenu/LeftMenu';
import { Colors } from '../../styledHelpers/Colors';
import { Slider } from '../Slider/Slider';
import { Workspaces } from '../Workspaces/Workspaces';
import { Resume } from '../Resume/Resume';

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
                    <RightContent>
                        <Slider />
                        <Workspaces />
                        <Resume />
                    </RightContent>
            </Content>
        </Wrapper>
    );
};

export default MainPage;