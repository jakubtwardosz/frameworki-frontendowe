import React, { FC } from 'react';
import styled from 'styled-components';
import useDropdown from 'react-dropdown-hook';

const Wrapper = styled.div `
    h3{ font: 500 18px 'Roboto'; color: #4B5268; margin-left: 15px; margin-top: 15px; margin-bottom:20px; }
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
const Separator = styled.div `
    width: 2px;
    height: 2px;
    background-color: #878B91;
    margin: 0 15px;
`;
const Icon = styled.i `
    background-image: url(/media/icons/entities2.svg);
    display: inline-block;
    background-size: 12px;
    width: 12px;
    height: 15px;
    background-repeat: no-repeat;
    margin-right: 10px;
`;

const ResumeHeader = styled.div `
    display: flex;
    justify-content: space-between;
`;

const WorkContainer = styled.div `
    background-color: #fff;
    box-shadow: 0 4px 2px -2px #dee1e6;
    border-radius: 5px;
    border-bottom: 1px solid #EAECEF;
    padding: 10px 15px;

    h4{
        color: #2A3F9D;
        font: 500 18px 'Roboto';
        margin-bottom: 15px;
    }
`;

const WorkFooter = styled.div `
    display: flex;
    margin-top: 15px;
    align-items: center;
    color:#565D72;
`;

const ImageContainer = styled.div `
    width: 15px;
    height: 15px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 10px;
    img{
        width: 100%;
        height: 100%;
    }
`;

const DropdownMenu = styled.div `
    position: absolute;
    top: 20px;
    right: 0;

`;

const NetworkIcon = styled.i`
    display: inline-block;
    background-image: url(/media/icons/network.svg);
    background-size: 17px;
    width: 18px;
    height: 15px;
    background-repeat: no-repeat;
    margin-right: 10px;
`;

const ArrowIcon = styled.i`
    display: inline-block;
    background-image: url(/media/icons/arrow-down.svg);
    background-size: 9px;
    width: 9px;
    height: 6px;
    background-repeat: no-repeat;
    margin-left: 10px;
`;

const FilterContainer = styled.div`
    
    display: flex;
    align-items: center;

`;



export const Resume: FC = () => {
    const [wrapperRef, dropdownOpen, toggleDropdown] = useDropdown();

    const menuHandler = () => {
        toggleDropdown();
    }


    return (
        <Wrapper>
            <ResumeHeader>
                <h3>Resume your work</h3>

                <FilterContainer>
                    <InputFilter placeholder="Filter by title"/>

                    <DropdownFilter ref={wrapperRef}>
                        <button onClick={menuHandler}><NetworkIcon/>Followed<ArrowIcon/></button>
                        {dropdownOpen &&                        
                            <DropdownMenu>
                                <a href="#">Other</a>
                            </DropdownMenu>

                            
                        }                        
                    </DropdownFilter>
                </FilterContainer>
            </ResumeHeader>

            <WorkContainer>
                <h4>Contract #234</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In auctor ut nunc sed ultricies. Sed turpis metus, interdum a vulputate ac, tristique in nisi.</p>

                <WorkFooter>
                        <ImageContainer><img src="./media/logo.png"/></ImageContainer>
                        
                        <p>Subsid. corp.</p>
                    <Separator/>
                        <Icon/>
                        <p>Corporate</p>
                    <Separator/>
                        <p>Updated 3 days ago by John Doe</p>
                </WorkFooter>
            </WorkContainer>
        </Wrapper>
    );
};

