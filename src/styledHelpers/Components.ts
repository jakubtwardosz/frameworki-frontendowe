import styled from 'styled-components';
import { Colors } from './Colors';

export type Styles = {
    [ruleOrSelector: string]: string | number | Styles,
}

const boxShadow = (): Styles => {
    return {
        color: `${Colors.black}`
    };
};

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
    ${boxShadow()};
`;

export const LeftMenuIcon = styled.i`
    display: inline-block;
    background-size: 20px;
    width: 20px;
    height: 17px;
    background-repeat: no-repeat;
    margin-right: 8px;
`;

export const LeftMenuButton = styled.button`
    display: inline-block;
    background-size: 16px;
    background-position: center;
    width: 30px;
    height: 22px;
    border: 1px solid ${Colors.independence};
    border-radius: 5px;    
    background-repeat: no-repeat;
    background-color: transparent;
    margin-left: auto;
    cursor: pointer;
`;

export const BelowLeftMenuIcon = styled.i`
    display: inline-block;
    background-size: 28px;
    width: 28px;
    height: 28px;
    background-repeat: no-repeat;
    margin-right: 17px;
`;