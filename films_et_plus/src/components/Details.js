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

export default Details;
