// Package / Dependency Imports
import styled from 'styled-components';
// Local Imports
import ImageSlider from './ImageSlider';


const Home = (props) => {
    return (
        <Container>
            <ImageSlider />
        </Container>
    );
};


const Container = styled.div`
    position: relative;
    min-height: calc(100vh - 250px);
    overflow-x: hidden;
    display: block;
    padding: calc(3.2wv - 5px);
    top: 72px;

    &:after {
        background: url('images/home-background.png') center center / cover no-repeat fixed;
        position: absolute;
        content: '';
        inset: 0;
        z-index: -1;
    }
`;


export default Home;
