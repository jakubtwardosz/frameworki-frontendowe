import React, { FC } from 'react';
import styled from 'styled-components';
import useDropdown from 'react-dropdown-hook';

import { Wrapper } from '../../styledHelpers/Components';
import { Colors } from '../../styledHelpers/Colors';
import { ExpandedMenu } from './ExpandedMenu';

const Wrapper2 = styled(Wrapper)`
    padding: 7px;
    box-shadow: 0 4px 2px -2px #e0e3e7;
    background-color: #FFF;
`;

const InnerWrapper = styled.div`
    width: 1200px;
    background: ${Colors.white};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const Logo = styled.img`
    width: 35px;
`;

const SearchImg = styled.img`
    position: absolute;
    top: 9px;
    right: 9px;
`;

const RightIcons = styled.div`
    display:flex;
`;

const SearchWrapper = styled.div`
    position: relative;
`;

const CustomInput = styled.input`
    border: 1px solid ${Colors.grey};
    padding: 8px;
    width: 530px;
    text-align: center;
    font: 300 16px 'Roboto';

    &:hover {
        outline: none;
    }

    &:focus {
        outline: none; 
    }
`;

const IconWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${Colors.grey}; 
    width: 40px;
    height: 40px;
    border-radius: 100%;
    margin: 0 4px;
`;

const MenuWrapper = styled.div`
`;

const LeftSide = styled.div`
    display: flex;
    align-items: center;
`;

const HouseIcon = styled.i`
    background-image: url(/media/icons/house.svg);
    background-size: 24px;
    width: 24px;
    height: 24px;
    background-repeat: no-repeat;
    margin-right: 14px;
`;

const ArrowIcon = styled.i`
    background-image: url(/media/icons/arrow-down.svg);
    background-size: 9px;
    width: 9px;
    height: 6px;
    background-repeat: no-repeat;
    margin-left: 140px;
`;



export const TopBar: FC = () => {
    const [wrapperRef, dropdownOpen, toggleDropdown] = useDropdown();

    const menuHandler = () => {
        toggleDropdown();
    }

    return(
        <Wrapper2>
            <InnerWrapper>
                <Logo src="./media/logo.png"/> 

                <MenuWrapper ref={wrapperRef}>
                    <LeftSide onClick={menuHandler}>
                        <HouseIcon/>
                        <span>Home</span>
                        <ArrowIcon/>
                    </LeftSide>
                    {dropdownOpen &&
                        
                        <ExpandedMenu /> 
                    }
                </MenuWrapper>

                
                <SearchWrapper>
                    <CustomInput type="text" placeholder="Search Legalcluster" />
                    <SearchImg src="./media/icons/search.png" alt="" title=""/>
                </SearchWrapper> 
                <RightIcons>
                    <IconWrapper>                        
                        <img src="./media/icons/house.png" /> 
                    </IconWrapper>
                    <IconWrapper>                        
                        <img src="./media/icons/comments.png" />
                    </IconWrapper>
                    <IconWrapper>                        
                        <img src="./media/icons/bell.png" />
                    </IconWrapper>
                </RightIcons>
            </InnerWrapper> 
        </Wrapper2>
    );
};