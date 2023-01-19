import styled from 'styled-components';

const Header = (props) => {
    return (
        <Nav>
            <Logo>
                <img src="/images/logo.svg" alt='Film Et Plus'/>
            </Logo>
        </Nav>
    );
};

const Nav = styled.nav`
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px;
    letter-spacing: 16px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: #090b13
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


export default Header;
