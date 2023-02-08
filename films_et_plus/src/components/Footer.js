import styled from 'styled-components';

const Footer = (props) => {
    return (
        <FooterContainer>
            <p>&copy; 2023</p>
        </FooterContainer>
    )
};


const FooterContainer = styled.footer`
    margin: 3rem 0 0 0;
    background: rgb;
    color: #fff;
    padding: 1rem;
    text-align: center;
`;


export default Footer;
