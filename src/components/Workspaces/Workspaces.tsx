import React, { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div `
    h3{ font: 500 18px 'Roboto'; color: #4B5268; margin-left: 15px; margin-top: 15px; margin-bottom:20px; }
`;

const WorkspacesContainer = styled.div `
    width: 240px;
    background-color: #FFFFFF;
    border-radius: 5px;
    border-bottom: 1px solid #EAECEF;
    box-shadow: 0 4px 2px -2px #dee1e6;
    padding: 10px;
    position: relative;
`;

const Workspace = styled.a `
`;

const BackgroundContainer = styled.div `
    background-image: url(https://media.istockphoto.com/photos/millennial-black-businesswoman-addressing-colleagues-at-a-corporate-picture-id1146472948);
    background-size: cover;
    width: 100%;
    height: 80px;
    position: absolute;
    top: 0;
    left: 0;

`;

const WorkspaceTitle = styled.div `
    margin-top: 80px;

    font: 400 20px 'Roboto';
    color: #232C47;
    margin-bottom: 10px;
`;

const WorkspaceFooter = styled.div `
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    span{
        font: 300 14px 'Roboto';
        color: #565D72;
    }
`;

const Separator = styled.div `
    width: 2px;
    height: 2px;
    background-color: #878B91;
    margin: 0 15px;
`;

const UpdateTime = styled.span `
    font: 300 12px 'Roboto';
    color: #96999E;
`;

const UserIcon = styled.i `
    background-image: url(/media/icons/people.svg);
    display: inline-block;
    background-size: 14px;
    width: 14px;
    height: 11px;
    background-repeat: no-repeat;
    margin-right: 7px;
`;

const ContractIcon = styled.i `
    background-image: url(/media/icons/entities.svg);
    display: inline-block;
    background-size: 13px;
    width: 13px;
    height: 16px;
    background-repeat: no-repeat;
    margin-right: 7px;
`;

export const Workspaces: FC = () => {
    return (
        <Wrapper>
            <h3>Workspaces</h3>
            <WorkspacesContainer>
                <Workspace>
                    <BackgroundContainer/>                    
                    <WorkspaceTitle>
                        <h4>Client contract</h4>
                    </WorkspaceTitle>

                    <WorkspaceFooter>
                        <ContractIcon/><span>Contract</span>
                        <Separator/>
                        <UserIcon/><span>25 users</span>
                    </WorkspaceFooter>

                    <UpdateTime>Last update 3 months ago</UpdateTime>
                </Workspace>
            </WorkspacesContainer>
        </Wrapper>
    ); 
};
