import React, { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div `
    min-height: 300px;
    background-color: #FFFFFF;
    border-radius: 5px;    
    border-bottom: 1px solid #EAECEF;
    box-shadow: 0 4px 2px -2px #dee1e6;
    display: flex;
    overflow: hidden;
`;
const PublicationImageContainer = styled.div `
    width: 68px;
    height: 68px;
    object-fit: cover;
    margin-right: 10px;

    img{
        width: 100%;
        height: 100%;
    }
`;
const AuthorImageContainer = styled.div `
    display: inline-block;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 10px;
    img{
        width: 100%;
        height: 100%;
    }

`;
const PublicationsContainer = styled.div `
    h3{
        font: 500 18px 'Roboto';
        color: #4B5268;
        margin: 10px 0;
    }

`;
const Publication = styled.div `
    display: flex;
`;
const Date = styled.div ``;
const Author = styled.div `
    display:flex;
    align-items: center;

`;

const FeaturedPublication = styled.div `
    width: 300px;
    position: relative;
    margin-right: 20px;

    


`;

const FeaturedImage = styled.img `    
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
`;

const PublicationFooter = styled.div `display: flex;
align-items: center;margin-top: 10px;`;


const PublicationDataContainer = styled.div ` `;
export const Slider: FC = () => {
    return (
        <Wrapper>
            <FeaturedPublication>
                    <FeaturedImage src="https://media.istockphoto.com/photos/millennial-black-businesswoman-addressing-colleagues-at-a-corporate-picture-id1146472948" alt="Featured Publication" />
                    <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
                    <Date>7 jan. 2020</Date>
                    <Author>
                        <img src="#" alt="Author" />
                        <span>John Doe.</span>
                    </Author>


            </FeaturedPublication>


            <PublicationsContainer>
                <h3>Latest publications</h3>

                <Publication>
                    <PublicationImageContainer>
                        <img src="https://media.istockphoto.com/photos/millennial-black-businesswoman-addressing-colleagues-at-a-corporate-picture-id1146472948" alt="Publication" />
                    </PublicationImageContainer>

                    <PublicationDataContainer>
                        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>

                        <PublicationFooter>
                            <Date>7 jan. 2020</Date>
                            <Author>
                                <AuthorImageContainer>
                                    <img src="./media/employee-photo.jpg" alt="Author"></img>
                                </AuthorImageContainer>
                                John Doe.
                            </Author>

                        </PublicationFooter>  


                    </PublicationDataContainer>

                                      
                </Publication>

            </PublicationsContainer>
        </Wrapper>
    );
};
