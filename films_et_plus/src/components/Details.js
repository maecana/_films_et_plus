// Package / Depedency Imports
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
// local Imports
import { db } from '../firebase/firebase';


const Details = (props) => {
    return (
        <Container>
            <Background>
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/FA1548A6B82C9991B1D38DF251A388FEA2483904510FBC73E150F67F7BDE38C0/scale?width=1440&aspectRatio=1.78&format=jpeg" alt="Background" />
            </Background>

            <Title>
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F70235E3463A6F246EB462ED5379F9D41D6318E80098BD40900E7AFC1C7D932D/scale?width=1440&aspectRatio=1.78" alt="Title" />
            </Title>

            <MetaContent>
                <Controls>
                    <Player>
                        <img src="/images/play-icon-black.png" alt="" />
                        <span>Play</span>
                    </Player>
                    <Trailer>
                        <img src="/images/play-icon-white.png" alt="" />
                        <span>Trailer</span>
                    </Trailer>
                    <AddToList>
                        <span />
                        <span />
                    </AddToList>
                    <GroupWatch>
                        <img src="/images/group-icon.png" alt="Group Watch" />
                    </GroupWatch>
                </Controls>

                <Subtitle>
                    Cupidatat laborum et aliquip non et dolor.
                </Subtitle>

                <Description>
                    Deserunt id enim exercitation nulla duis. Consequat aliquip enim ea tempor elit. Sint magna do ut sint ad adipisicing sit qui occaecat aliqua esse aute. Qui aute tempor velit velit enim. Et Lorem dolor cupidatat Lorem eu aute deserunt occaecat ipsum elit voluptate eu. Dolore aliqua consectetur incididunt aliquip deserunt excepteur ea sit qui dolore pariatur est.
                    Ex id ex consequat enim. Elit nostrud est nostrud aliquip ullamco. Ea dolor qui in sunt quis aliqua esse mollit minim incididunt adipisicing sunt. Nostrud exercitation amet mollit adipisicing id do aliqua et commodo sit fugiat mollit. Commodo enim nostrud voluptate adipisicing id dolor irure labore est sit. Cillum qui voluptate mollit aute veniam. Magna ipsum qui sunt in ad commodo ea.
                </Description>
            </MetaContent>
        </Container>
    )
};


const Container = styled.div`
    position: relative;
    min-height: calc(100vh-70px);
    width: 100%;
    overflow-x: hidden;
    inset: 0;
    padding: calc(3.2wv - 5px);
    display: block;
    top: 72px;
`;

const Background = styled.div`
    position: fixed;
    inset: 0;
    z-index: -1;
    opacity: 0.8;

    img {
        height: 100vh;
        width: 100vw;
        object-fit: cover;
    }

    @media (max-width: 768px) {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const Title = styled.div`
    width: 100%;
    height: 30vw;
    min-height: 170px;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    -webkit-box-pack: start;
    margin: 0px auto;
    padding: 0 2vw;
    padding-bottom: 24px;

    img {
        width: 35vw;
        max-width: 600px;
        min-width: 200px;
    }
`;

const MetaContent = styled.div`
    width: 50vw;
    max-width: 874px;
    min-width: 300px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0 2vw;
    padding-bottom: 1.5rem;
`;

const Controls = styled.div`
    display: flex;
    width: 100%;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
`;

const Player = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 24px;
    margin: 0 .5rem;
    font-size: 16px;
    height: 56px;
    letter-spacing: 1.8px;
    border-radius: 4px;
    border: none;
    outline: none;
    cursor: pointer;
    text-transform: uppercase;
    background: rgb(249, 249, 249);
    color: (0, 0, 0);

    img {
        width: 32px;
    }

    &:hover {
        background: rgb(198, 198, 198);
    }

    @media (max-width: 768px) {
        height: 44px;
        padding: 0 12px;

        img {
            width: 24px;
        }
    }
`;

const Trailer = styled(Player)`
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);

    &:hover {
        color: rgb(0, 0, 0);

        img {
            content: url("/images/play-icon-black.png");
        }
    }
`;

const GroupWatch = styled(Player)`
    border-radius: 50%;
    padding: 0;
    min-width: 50px;
    min-height: 50px;
    max-width: 50px;
    max-height: 50px;
    width: 50px;
    height: 50px;
    border: 2px solid rgb(249, 249, 249);
    background: rgba(0, 0, 0, 0.6);

    img {
        width: 80%;
    }

    @media (max-width: 768px) {
        margin: 0 .2rem;
        min-width: 44px;
        min-height: 44px;
        max-width: 44px;
        max-height: 44px;
        width: 44px;
        height: 44px;
    }
`;

const AddToList = styled(GroupWatch)`
    span {
        background-color: rgb(249, 249, 249);
        display: inline-block;
        &:first-child {
            height: 2px;
            transform: translate(1px, 0px) rotate(0deg);
            width: 16px;
        }
        &:nth-child(2) {
            height: 16px;
            transform: translateX(-8px) rotate(0deg);
            width: 2px;
        }
    }
    
    &:hover {
        span {
            background-color: rgb(0, 0, 0);
        }
    }
`;

const Subtitle = styled.div`
    margin: 1.5rem .5rem;
    color: rgb(249, 249, 249);
    font-size: 16px;

    @media (max-width: 768px) {
        font-size: 12px;
    }
`;

const Description = styled.div`
    margin: 0 .5rem;
    line-height: 1.4;
    font-size: 20px;
    color: rbg(249, 249, 249);

    @media (max-width: 768px) {
        font-size: 14px;
    }
`;


export default Details;
