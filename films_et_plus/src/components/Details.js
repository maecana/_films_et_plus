// Package / Depedency Imports
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore";

// local Imports
import { db } from '../firebase/firebase';


const Details = (props) => {
    const { id } = useParams();
    const [ details, setDetails ] = useState({});

    useEffect(() => {
        const getMovieDetails = async () => {
            const docRef = doc(db, "movies", id);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                const data = docSnap.data();
                setDetails(data);
            }
        };


        getMovieDetails();
    }, [ id ]);


    return (
        <Container>
            <Background>
                <img src={details.backgroundImg} alt="" />
            </Background>

            <Title>
                {details && details.titleImg ?
                    <img src={details.titleImg } alt={details.title} /> :
                    <h1>{details?.title || 'No title available.'}</h1>
                }
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
                    {details?.subTitle || 'No subtitle available.'}
                </Subtitle>

                <Description>
                    {details?.description || 'No description available.'}
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
        padding: 0 2vw;
        width: 35vw;
        max-width: 600px;
        min-width: 200px;
    }

    h1 {
        padding: 0 12px;
        margin: 0;
        max-width: 50vw;
        overflow: hidden;
        white-space: wrap;
        text-overflow: ellipsis;
        font-size: 5rem;

    }

    @media (max-width: 768px) {
        h1 {
            font-size: 2rem;
        }
    }
`;

const MetaContent = styled.div`
    width: 90vw;
    min-width: 300px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0 2vw;
    padding-bottom: 1.5rem;

    @media (max-width: 768px) {
        width: 100%;
    }
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
