import React, { FC } from 'react';
import styled from 'styled-components';

const Item = styled.div `
    background-color: #fff;
    box-shadow: 0 4px 2px -2px #dee1e6;
    border-radius: 5px;
    border-bottom: 1px solid #EAECEF;
    padding: 10px 15px;
    margin-bottom: 10px;

    h4{
        color: #2A3F9D;
        font: 500 18px 'Roboto';
        margin-bottom: 15px;
    }
`;

const Footer = styled.div `
    display: flex;
    margin-top: 15px;
    align-items: center;
    color:#565D72;
`;

const Image = styled.div `
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

export const ResumeItem: FC = () => {
    return (
            <Item>
                <h4>Contract #234</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In auctor ut nunc sed ultricies. Sed turpis metus, interdum a vulputate ac, tristique in nisi.</p>

                <Footer>
                        <Image><img src="./media/logo.png"/></Image>                        
                        <p>Subsid. corp.</p>
                    <Separator/>
                        <Icon/>
                        <p>Corporate</p>
                    <Separator/>
                        <p>Updated 3 days ago by John Doe</p>
                </Footer>
            </Item>
    );
};
