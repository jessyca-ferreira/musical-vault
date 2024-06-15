import logo_img from '../../images/on-broadway.svg';
import styled from 'styled-components';

const LogoContainer = styled.div`
    position: relative;
    width: 100vw;
    margin: 0 auto;
    display: block;
`;

const LogoPicture = styled.img`
    width: 30em;
    margin: 0 auto;
    display: block;
`;

const SloganContainer = styled.div`
    font-weight: 500;
    letter-spacing: 1px;
    font-family: "Poppins";
    text-transform: uppercase;
    font-size: 0.7em;
    position: absolute;
    text-align: center;
    left: 50%;
    bottom: 6em;
    transform: translateX(-50%);  
    width: 300px;
    display: block;
    color: #73c72a;
`;

function Logo() {
    return (
        <LogoContainer>
          <LogoPicture id='logo-picture' src={logo_img} alt='On Broadway Logo'/>
          <SloganContainer>Your musical vault</SloganContainer>
        </LogoContainer>
    );
}

export default Logo;