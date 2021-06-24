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
import { Entities } from '../../entities/Entities';
import { TestPage } from '../../testPage/TestPage';
import { Profile } from '../../profile/Profile';

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
        <Router>            
            <Wrapper>
                <TopBar />
                <Content>
                        <LeftMenu />
                        <RightContent>
                            <Switch>
                                <Route path="/testpage" exact>
                                    <TestPage />
                                </Route>
                                <Route path="/entities" exact>
                                    <Entities />
                                </Route>
                                <Route path="/profile" exact>
                                    <Profile />
                                </Route>
                                <Route path="/" exact>                                    
                                    <Slider />
                                    <Workspaces />
                                    <Resume />
                                </Route>
                            </Switch>
                        </RightContent>
                </Content>
            </Wrapper>
        </Router>
    );
};

export default MainPage;