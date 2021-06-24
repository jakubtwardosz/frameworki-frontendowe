import React, { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div `
    h3{ font: 500 18px 'Roboto'; color: #4B5268; margin-left: 15px; margin-top: 15px; margin-bottom:20px; }
`;

const InputFilter = styled.input `
    background: url(./media/icons/search.svg) no-repeat scroll 0px 0px;
`;
const DropdownFilter = styled.div ``;
const Separator = styled.i ``;
const Icon = styled.i ``;



export const Resume: FC = () => {
    return (
        <Wrapper>
            <h3>Resume your work</h3>
            <InputFilter placeholder="Filter by title"/>

            <DropdownFilter>
                <button>Followed</button>
                <div>
                    <a href="#">Other</a>
                </div>
            </DropdownFilter>

            <div>
                <h4>Contract #234</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In auctor ut nunc sed ultricies. Sed turpis metus, interdum a vulputate ac, tristique in nisi.</p>

                <div>
                        <img src="./media/logo.png"/>
                        <p>Subsid. corp.</p>
                    <Separator/>
                        <Icon/>
                        <p>Corporate</p>
                    <Separator/>
                        <p>Updated 3 days ago by John Doe</p>
                </div>
            </div>
        </Wrapper>
    );
};

