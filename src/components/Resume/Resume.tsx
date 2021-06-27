import React, { FC, useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import useDropdown from 'react-dropdown-hook';
import { ResumeItem } from './ResumeItem';

const Wrapper = styled.div `
    h3{
        font: 500 18px 'Roboto';
        color: #4B5268;
        margin: 15px 20px
    }
`;

const InputFilter = styled.input `
    background: url(./media/icons/search.svg) no-repeat scroll 95% 50%, #FFF;
    font: 300 14px 'Roboto';
    box-sizing: border-box;
    border: 1px solid #d3d3d3;
    border-radius: 5px;
    padding: 10px 8px;
`;

const DropdownFilter = styled.div `
    position: relative;
    button{
        border: none;
        background: none;
        font: 500 15px 'Roboto';
        color: #2A3F9D;
        padding: 0;
        margin: 0;
        display: flex;
        align-items: center;
        margin-left: 30px;
    }
`;

const Header = styled.div `
    display: flex;
    justify-content: space-between;
`;

const DropdownMenu = styled.div `
    position: absolute;
    top: 20px;
    right: 0;
`;

const NetworkIcon = styled.i `
    display: inline-block;
    background-image: url(/media/icons/network.svg);
    background-size: 17px;
    width: 18px;
    height: 15px;
    background-repeat: no-repeat;
    margin-right: 10px;
`;

const ArrowIcon = styled.i `
    display: inline-block;
    background-image: url(/media/icons/arrow-down.svg);
    background-size: 9px;
    width: 9px;
    height: 6px;
    background-repeat: no-repeat;
    margin-left: 10px;
`;

const FilterContainer = styled.div `    
    display: flex;
    align-items: center;
`;

const ResumeContainer = styled.div `  `;

export const Resume: FC = () => {
    const [wrapperRef, dropdownOpen, toggleDropdown] = useDropdown();

    const menuHandler = () => {
        toggleDropdown();
    }

    const [inputText, setInputText] = useState<string>('');

    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        setInputText(text);
    }

    return ( 
    
    <Wrapper>
        <Header>
            <h3>Resume your work</h3>
            <FilterContainer>
                <InputFilter placeholder="Filter by title" value={inputText} onChange={inputHandler}/>

                <DropdownFilter ref={wrapperRef}>
                    <button onClick = {menuHandler}> 
                        <NetworkIcon/>Followed<ArrowIcon/>        
                    </button> 
                    { dropdownOpen && 
                        <DropdownMenu>
                            <a href ="#">Other</a>
                        </DropdownMenu> 
                    }
                </DropdownFilter> 
            </FilterContainer> 
        </Header>
        <ResumeContainer>
            
            <ResumeItem/>
            <ResumeItem/>
            <ResumeItem/>
            <ResumeItem/>
            <ResumeItem/>
            <ResumeItem/>  

        </ResumeContainer>          
    </Wrapper>
    );
};