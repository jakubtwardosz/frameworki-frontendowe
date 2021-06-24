import React, { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div `
    h3{ font: 500 18px 'Roboto'; color: #4B5268; margin-left: 15px; margin-top: 15px; margin-bottom:20px; }
`;


export const Resume: FC = () => {
    return (
        <Wrapper>
            <h3>Resume</h3>
        </Wrapper>
    );
};