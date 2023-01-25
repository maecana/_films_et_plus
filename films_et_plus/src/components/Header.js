// Dependency Imports
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// Internal Imports
import { auth, provider } from '../firebase';
import { 
    selectUserName,
    // selectUserEmail,
    selectUserPhoto,
    setUserLoginDetails
} from '../features/users/userSlice';


const Header = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const username = useSelector(selectUserName);
    // const email = useSelector(selectUserEmail);
    const photo = useSelector(selectUserPhoto);

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                setUser(user);
                navigate('/home');
            }
        })
    }, [ username ]);
    
    const handleAuth = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;

            setUser(user);
            console.log("token: "+token);
        }).catch((error) => {
            // const errorCode = error.code;
            // const errorMessage = error.message;
            // const email = error.customData.email;
            // // The AuthCredential type that was used.
            // const credential = GoogleAuthProvider.credentialFromError(error);
        });
    }

    const setUser = (user) => {
        dispatch(
            setUserLoginDetails({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL,
            })
        )
    }


    return (
        <Nav>
            <Logo>
                <img src="/images/logo.svg" alt='Film Et Plus'/>
            </Logo>

            {
                !username ?
                <Login onClick={handleAuth}>Login</Login> :
                <>
                    <NavMenu>
                        <a href="/"><img src="/images/home-icon.svg" alt="Home" /><span>HOME</span></a>
                        <a href="/"><img src="/images/search-icon.svg" alt="Search" /><span>Search</span></a>
                        <a href="/"><img src="/images/watchlist-icon.svg" alt="Watchlist" /><span>Watchlist</span></a>
                        <a href="/"><img src="/images/original-icon.svg" alt="Originals" /><span>Originals</span></a>
                        <a href="/"><img src="/images/movie-icon.svg" alt="Movies" /><span>Movies</span></a>
                        <a href="/"><img src="/images/series-icon.svg" alt="Series" /><span>Series</span></a>
                    </NavMenu>

                    <UserImg src={photo} alt={username} />
                </>
            }
        </Nav>
    );
};

const Nav = styled.nav`
    height: 70px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: #090b13;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px;
    letter-spacing: 16px;
    z-index: 3;
`;

const Logo = styled.a`
    padding: 0;
    width: 80px;
    margin-top: 4px;
    max-height: 70px;
    font-size: 0;
    display: inline-block;

    img {
        display: block;
        width: 100%;
    }
`;


const NavMenu = styled.div`
    height: 100%;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: flex-end;
    padding: 0;
    margin: 0;
    margin-right: auto;
    margin-left: 24px;
    position: relative;
    letter-spacing: 16px;

    a {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 12px;

        img {
            height: 20px;
            width: 20px;
            min-width: 20px;
            z-index: auto;
        }

        span {
            color: rgb(249, 249, 249)
            font-size: 13px;
            letter-spacing: 1.42px;
            line-height: 1.08;
            padding: 2px 0;
            white-space: nowrap;
            position: relative;
            
            &:before {
                opacity: 0;
                background-color: rgb(249, 249, 249);
                border-radius: 0 0 4px 4px;
                bottom: -6px;
                position: absolute;
                height: 2px;
                content: '';
                left: 0;
                right: 0;
                transform-origin: left center;
                transform: scaleX(0);
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.25) 0s;
                visibility: hidden;
                width: auto;
            }
        }

        &:hover {
            span:before {
                transform: scaleX(1);
                visibility: visible;
                opacity: 1 !important;
            }
        }
    }

    @media (max-width: 768px) {
        display: none;
    }
`;


const Login = styled.a`
    background-color: rgba(0, 0, 0, 0.6);
    padding: 8px 16px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    border: 1px solid #f9f9f9;
    border-radius: 4px;
    transition: all .2ms ease 0s;

    &:hover {
        background-color: #f9f9f9;
        color: #000;
        border-color: transparent;
    }
`;

const UserImg = styled.img`
    width: 40px;
    height: 40px;
    max-width: 40px;
    border-radius: 50%;
    margin-left: 1rem;
`;

export default Header;
