import React, { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div `
    min-height: 300px;
    background-color: #FFFFFF;
    border-radius: 5px;    
    border-bottom: 1px solid #EAECEF;
    box-shadow: 0 4px 2px -2px #dee1e6;
    padding: 10px;
`;



export const Slider: FC = () => {
    return (
        <Wrapper>
        Slider
        </Wrapper>
    );
};
