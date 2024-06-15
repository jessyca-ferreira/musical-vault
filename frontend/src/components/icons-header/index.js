import profile from '../../images/profile.svg';
import bag from '../../images/bag.svg';
import styled from 'styled-components';

const icons = [profile, bag];
const IconsContainer = styled.ul`
    margin: 0 auto;
    margin-bottom: 0.5em;
    display: flex;
    align-items: center;
`;

const IconContainer = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 1em;
`;

const Icon = styled.img`
    width: 1em;
`;

function Icons() {
    return (
        <IconsContainer> 
            { icons.map( (icon) => (
            <IconContainer><Icon src={icon} alt='icon'></Icon></IconContainer>
            ) )  }
        </IconsContainer>
    );
}

export default Icons;