import React, { FC } from 'react';
import styled from 'styled-components';
import useDropdown from 'react-dropdown-hook';

import { Wrapper } from '../../styledHelpers/Components';
import { Colors } from '../../styledHelpers/Colors';
import { ExpandedMenu } from './ExpandedMenu';

const Wrapper2 = styled(Wrapper)`
    padding: 10px;
    box-shadow: 0px 0px 10px 0px rgb(0 0 0);
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
    top: 7px;
    right: 7px;
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
    margin: 0 5px;
`;

const MenuWrapper = styled.div`
`;

const LeftSide = styled.div`
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
                        <img src="./media/icons/house.png" alt=""/>
                        <span>Home</span>
                    </LeftSide>
                    <img src="./media/icons/arrow-down.png" alt=""/>
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