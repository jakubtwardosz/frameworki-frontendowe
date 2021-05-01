import React, { FC } from 'react'; 
import styled from 'styled-components';

const Wrapper = styled.div`
    position: absolute;
    top: 24px;
    left: 0;
    background: white;
    padding: 16px;
    border 1px solid;
    ul{
        border: 1px solid red;
    }
`;


export const ExpandedMenu: FC = () => {
    return(
        <Wrapper>
            <ul>
                <li>Test</li>
                <li>Test</li>
                <li>Test</li>
                <li>Test</li>
            </ul>
        </Wrapper>
    );
};