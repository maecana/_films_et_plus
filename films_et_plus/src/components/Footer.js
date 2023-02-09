import styled from 'styled-components';

const Footer = (props) => {
    return (
        <FooterContainer>
            <Logo>
                <img src="/images/logo.svg" alt='Film Et Plus'/>
            </Logo>
            <FooterContent>
                <FooterLink>
                    <a href="/">Privacy Policy</a>
                    <a href="/">Subscriber Agreemet</a>
                    <a href="/">Collection Statement</a>
                    <a href="/">Help</a>
                    <a href="/">Supported Devices</a>
                    <a href="https://github.com/maecana">About Us</a>
                    <a href="/">Interest-base Ads</a>
                </FooterLink>
                <p>&copy; {new Date().getFullYear()} &bull; Film et Plus &bull; Tous droits réservés</p>
                <Dev href="https://github.com/maecana">&lt;maya.dev /&gt;</Dev>
            </FooterContent>
        </FooterContainer>
    )
};


const FooterContainer = styled.footer`
    margin: 3rem 0 0 0;
    background: #090b13;
    color: rgb(249, 249, 249);
    padding: 1rem;
    text-align: center;
`;

const Logo = styled.a`
    padding: .6rem 0;
    width: 80px;
    margin-top: 4px;
    max-height: 70px;
    font-size: 0;
    display: inline-block;

    img {
        display: block;
        width: 100%;
    }

    &:hover {
        color: rgb(249, 249, 249);
    }
`;

const FooterContent = styled.div`
    width: 100%;
    margin: 0 auto;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: rgb(249, 249, 249);
    font-size: .9rem;

    @media (max-width: 768px) {
        font-size: .5rem;
    }
`;

const Dev = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    letter-spacing: .2rem;
    color: rgba(249, 249, 249, 0.3);
    margin-bottom: .5rem;

    &:hover {
        color: rgb(249, 249, 249);
    }
`;


const FooterLink = styled.div`
    width: 65%;
    margin: 2rem 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;

    a {
        margin: .5rem;
    }

    @media (max-width: 300px) {
        flex-direction: column;
    }
`;

export default Footer;
