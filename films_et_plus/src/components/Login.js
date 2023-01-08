import styled from 'styled-components';

const Login = (props) => {
    return (
        <Container>
            <Content>
                <CTA>
                    <CTALogoTop src="/images/cta-logo-one.svg" alt="Top Logos" />
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
    margin-top: 0;
    margin-bottom: 2vw;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition-timing-function: ease-out;
    transition: 0.2s;
`;

const CTALogoTop = styled.img`
    margin-bottom: 2vw;
    width: 100%;
    max-width: 600px;
    min-height: 1px;
    display: block;
`;

export default Login;
