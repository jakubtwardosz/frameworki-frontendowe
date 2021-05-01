import React, { FC } from 'react';
import styled from 'styled-components';

import { Wrapper } from '../../styledHelpers/Components';
import { Colors } from '../../styledHelpers/Colors';
import { ExpandedMenu } from './ExpandedMenu';

const Wrapper2 = styled(Wrapper)`
    padding: 10px;
`;

const InnerWrapper = styled.div`
    width: 1200px;
    background: ${Colors.white};
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const RightIcons = styled.div`
    display:flex;
`;

const InputWrapper = styled.div`

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

const CustomImg = styled.img`


`;


const CustomInput = styled.input`
    border: 1px solid ${Colors.grey};
    padding: 15px;


`;

export const TopBar: FC = () => {
    return(
        <Wrapper2>
            <InnerWrapper>
                <CustomImg src="./media/logo.png"/> 
                <div>
                    <ExpandedMenu /> 
                </div>
                <InnerWrapper>
                    <CustomInput type="text" />
                    <CustomImg src="./media/icons/search.png" alt="" title=""/>
                </InnerWrapper> 
                <RightIcons>
                    <IconWrapper>                        
                        <CustomImg src="./media/icons/house.png" /> 
                    </IconWrapper>
                    <IconWrapper>                        
                        <CustomImg src="./media/icons/comments.png" />
                    </IconWrapper>
                    <IconWrapper>                        
                        <CustomImg src="./media/icons/bell.png" />
                    </IconWrapper>
                </RightIcons>
            </InnerWrapper> 
        </Wrapper2>
    );
};