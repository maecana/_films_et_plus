// Package / Dependency Imports
import styled from 'styled-components';
// Local Imports
import ImageSlider from './ImageSlider';
import NewDisney from './NewDisney';
import Originals from './Originals';
import Recommends from './Recommends';
import Trending from './Trending';
import Viewers from './Viewers';


const Home = (props) => {
    return (
        <Container>
            <ImageSlider />
            <Viewers />
            <Recommends />
            <NewDisney />
            <Originals />
            <Trending />
        </Container>
    );
};


const Container = styled.div`
    position: relative;
    min-height: calc(100vh - 70px);
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
