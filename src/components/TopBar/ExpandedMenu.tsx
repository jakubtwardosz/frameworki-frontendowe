import React, { FC } from 'react'; 
import styled from 'styled-components';
import { Colors } from '../../styledHelpers/Colors';

const Wrapper = styled.div`
    position: absolute;
    top: 24px;
    left: 0;
    background: ${Colors.white};
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