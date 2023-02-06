// Package / Dependency Imports
import styled from 'styled-components';


const Login = (props) => {
    return (
        <Container>
            <Content>
                <CTA>
                    <CTALogoTop src="/images/cta-logo-one.svg" alt="Top Logos" />
                    <Register>GET ALL VIDEOS</Register>
                    <Description>
                        Get Premier Access to Raya and the Last Dragon for an additional fee
                        with a Disney+ subscription. As of 03/26/21, the price of Disney+
                        and The Disney Bundle will increase by $1.
                    </Description>
                    <CTALogoBottom src="/images/cta-logo-two.png" alt="Bottom Logos" />
                </CTA>

                <BgImage />
            </Content>
        </Container>
    );
};

const Container = styled.section`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100vh;
`;

const Content = styled.div`
    margin-bottom: 10vw;
    padding: 80px 40px;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    position relative;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const BgImage = styled.div`
    height: 100%;
    background-image: url('/images/login-background.jpg');
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;
`;

const CTA = styled.div`
    width: 100%;
    max-width: 650px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const CTALogoTop = styled.img`
    margin-bottom: 2vw;
    width: 100%;
    max-width: 600px;
    min-height: 1px;
    display: block;
`;

const Register = styled.a`
    font-weight: bold;
    font-size: 18px;
    background-color: #0063e5;
    padding: 16.4px 0;
    margin-bottom: 12px;
    width: 100%;
    letter-spacing: 1.4px;
    border-radius: 4px;
    border: 1px solid transparent;

    &:hover {
        background-color: #0483ee;
    }
`;

const Description = styled.div`
    color: color: hsla(0, 0%, 95.3%, 1);
    font-size: 11px;
    margin-bottom: 24px;
    line-height: 1.5;
    letter-spacing: 1.5px;
`;

const CTALogoBottom = styled.img`
    margin-bottom: 20px;
    width: 100%;
    max-width: 600px;
    min-height: 1px;
    display: inline-block;
    vertical-align: bottom;
`;


export default Login;
