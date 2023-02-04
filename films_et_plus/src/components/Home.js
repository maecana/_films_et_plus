// Package / Dependency Imports
import styled from 'styled-components';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { collection, getDocs } from "firebase/firestore";
// Local Imports
import { db } from '../firebase/firebase';
import { setMovies } from '../features/movie/movieSlice';
import { selectUserName } from '../features/users/userSlice';
import ImageSlider from './ImageSlider';
import NewDisney from './NewDisney';
import Originals from './Originals';
import Recommends from './Recommends';
import Trending from './Trending';
import Viewers from './Viewers';


const Home = (props) => {
    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);

    useEffect(() => {
        const getAllMovies = async () => {
            let recommend = [];
            let trending = [];
            let original = [];
            let newDisney = [];
            const querySnapshot = await getDocs(collection(db, "movies"));

            querySnapshot.forEach((doc) => {
                switch (doc.data().type) {
                    case 'recommend':
                        recommend.push({ id: doc.id, ...doc.data() });
                        break;
                    case 'trending':
                        trending.push({ id: doc.id, ...doc.data() });
                        break;
                    case 'original':
                        original.push({ id: doc.id, ...doc.data() });
                        break;
                    default:
                        newDisney.push({ id: doc.id, ...doc.data() });
                        break;
                }
            });

            dispatch(
                setMovies({
                    recommend: recommend,
                    newDisney: newDisney,
                    original: original,
                    trending: trending,
                })
            );
        };
        getAllMovies();
    }, [ userName, dispatch ]);

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
