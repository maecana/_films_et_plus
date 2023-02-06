import styled from 'styled-components';


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
                </Controls>
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

        @media (max-width: 768px) {
            width: initial;
        }
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
`;



export default Details;
